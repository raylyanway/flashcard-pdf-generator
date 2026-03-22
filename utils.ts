import { jsPDF } from 'jspdf';
import type {
  Card,
  FontWeight,
  HorizontalAlign,
  Line,
  Segment,
  VerticalAlign,
  WrappedLine,
} from './types';

import notoSansBold from './fonts/notoSansBold';
import notoSansLight from './fonts/notoSansLight';

const DEFAULTS = {
  gapTop: 0,
  gapBottom: 1,
  cardPadding: 1,
  fontName: 'Noto Sans',
  fontWeight: 'light' as FontWeight,
  fontSize: 14,
  verticalAlign: 'middle' as VerticalAlign,
  horizontalAlign: 'middle' as HorizontalAlign,
};

function createDocument() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  addFonts(doc);
  return doc;
}

function addFonts(doc: jsPDF) {
  doc.addFileToVFS('NotoSans-Light.ttf', notoSansLight);
  doc.addFont('NotoSans-Light.ttf', 'Noto Sans', 'light');

  doc.addFileToVFS('NotoSans-Bold.ttf', notoSansBold);
  doc.addFont('NotoSans-Bold.ttf', 'Noto Sans', 'bold');
}

function getLayout() {
  const pageWidth = 210;
  const pageHeight = 297;

  const marginTop = 15;
  const marginBottom = 15;
  const marginLeft = 15;
  const marginRight = 15;

  const printableWidth = pageWidth - marginLeft - marginRight;
  const printableHeight = pageHeight - marginTop - marginBottom;

  const cols = 3;
  const rows = 3;

  const cardW = printableWidth / cols;
  const cardH = printableHeight / rows;

  return {
    pageWidth,
    pageHeight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    printableWidth,
    printableHeight,
    cols,
    rows,
    cardW,
    cardH,
    cardsPerPage: cols * rows,
  };
}

function setFontStyles(
  doc: jsPDF,
  {
    fontWeight,
    fontSize,
  }: {
    fontWeight?: string;
    fontSize?: number;
  }
) {
  doc.setFont(DEFAULTS.fontName, fontWeight || DEFAULTS.fontWeight);
  doc.setFontSize(fontSize || DEFAULTS.fontSize);
}

// Build wrapped lines for a single card
function buildWrappedLines(doc: jsPDF, card: Card, cardW: number) {
  const topLines: WrappedLine[] = [];
  const normalLines: WrappedLine[] = [];

  let topHeight = 0;
  let normalHeight = 0;

  const maxWidth = cardW - DEFAULTS.cardPadding * 2;

  card.forEach((line) => {
    const segments = buildSegmentsForLine(line);
    const wrappedSegmentLines = wrapSegments(doc, segments, maxWidth);

    wrappedSegmentLines.forEach((segLine, idx) => {
      let lineHeight = 0;

      segLine.forEach((seg) => {
        setFontStyles(doc, seg);
        const dims = doc.getTextDimensions(seg.text);
        lineHeight = Math.max(lineHeight, dims.h);
      });

      const gapTop = idx === 0 ? (line.gapTop ?? DEFAULTS.gapTop) : 0;
      const gapBottom =
        idx === wrappedSegmentLines.length - 1
          ? (line.gapBottom ?? DEFAULTS.gapBottom)
          : 0;

      const wrappedLine = {
        segments: segLine,
        height: lineHeight,
        gapTop,
        gapBottom,
      };

      if (line.pinTop) {
        topLines.push(wrappedLine);
        topHeight += lineHeight + gapTop + gapBottom;
      } else {
        normalLines.push(wrappedLine);
        normalHeight += lineHeight + gapTop + gapBottom;
      }
    });
  });

  return {
    topLines,
    normalLines,
    topHeight,
    normalHeight,
  };
}

function buildSegmentsForLine(line: Line): Segment[] {
  const text = Array.isArray(line.text)
    ? line.text
    : [
        {
          text: line.text,
          fontWeight: line.fontWeight,
          fontSize: line.fontSize,
        },
      ];

  return text.map((segment) => ({
    text: segment.text ?? '',
    fontWeight: segment.fontWeight || line.fontWeight,
    fontSize: segment.fontSize || line.fontSize,
  }));
}

function wrapSegments(doc: jsPDF, segments: Segment[], maxWidth: number) {
  const wrapped: Segment[][] = [];
  let currentLine: Segment[] = [];
  let currentWidth = 0;

  // 1. Break every segment into "Atoms" (either a word-chunk or whitespace)
  const atoms: {
    seg: Segment;
    text: string;
    width: number;
    isSpace: boolean;
  }[] = [];
  segments.forEach((seg) => {
    setFontStyles(doc, seg);
    // Split by spaces but keep them: "Hello world" -> ["Hello", " ", "world"]
    const tokens = seg.text.split(/(\s+)/);
    tokens.forEach((token) => {
      if (!token) return;
      atoms.push({
        seg,
        text: token,
        width: doc.getTextWidth(token),
        isSpace: /\s+/.test(token),
      });
    });
  });

  // 2. Group consecutive non-space atoms into "Cohesive Groups"
  // This ensures "plac" + "e" + "d" are treated as a single unit.
  const groups: {
    atoms: typeof atoms;
    totalWidth: number;
    isSpace: boolean;
  }[] = [];
  let currentGroup: typeof atoms = [];

  atoms.forEach((atom, i) => {
    if (atom.isSpace) {
      if (currentGroup.length) {
        groups.push({
          atoms: currentGroup,
          totalWidth: currentGroup.reduce((s, a) => s + a.width, 0),
          isSpace: false,
        });
        currentGroup = [];
      }
      groups.push({ atoms: [atom], totalWidth: atom.width, isSpace: true });
    } else {
      currentGroup.push(atom);
      if (i === atoms.length - 1) {
        groups.push({
          atoms: currentGroup,
          totalWidth: currentGroup.reduce((s, a) => s + a.width, 0),
          isSpace: false,
        });
      }
    }
  });

  // 3. Render Groups with character-fallback for long words
  groups.forEach((group) => {
    // If the whole word group is wider than maxWidth, we MUST break it by character
    if (group.totalWidth > maxWidth && !group.isSpace) {
      group.atoms.forEach((atom) => {
        const chars = atom.text.split('');
        chars.forEach((char) => {
          const charW = doc.getTextWidth(char);
          if (currentWidth + charW > maxWidth && currentLine.length) {
            wrapped.push(currentLine);
            currentLine = [];
            currentWidth = 0;
          }
          currentLine.push({ ...atom.seg, text: char });
          currentWidth += charW;
        });
      });
      return;
    }

    // Normal wrapping for standard words/groups
    if (currentWidth + group.totalWidth > maxWidth && currentLine.length) {
      wrapped.push(currentLine);
      currentLine = [];
      currentWidth = 0;
      if (group.isSpace) return; // Don't start a new line with a space
    }

    // Add the group to the line
    group.atoms.forEach((atom) => {
      currentLine.push({ ...atom.seg, text: atom.text });
      currentWidth += atom.width;
    });
  });

  if (currentLine.length) wrapped.push(currentLine);
  return wrapped;
}

function trimToFitSplit(
  topLines: WrappedLine[],
  normalLines: WrappedLine[],
  topHeight: number,
  normalHeight: number,
  cardH: number
) {
  const maxTextHeight = cardH - DEFAULTS.cardPadding * 2;

  // 🔴 If top content alone overflows → we must trim it too (rare but safe)
  while (topHeight > maxTextHeight && topLines.length) {
    const removed = topLines.pop();
    if (!removed) break;

    topHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  // Remaining space for normal lines
  const remainingHeight = maxTextHeight - topHeight;

  // 🟡 Trim normal lines first
  while (normalHeight > remainingHeight && normalLines.length) {
    const removed = normalLines.pop();
    if (!removed) break;

    normalHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  return {
    topLines,
    normalLines,
    topHeight,
    normalHeight,
  };
}

function renderCard(
  doc: jsPDF,
  x: number,
  y: number,
  cardW: number,
  cardH: number,
  topLines: WrappedLine[],
  normalLines: WrappedLine[],
  topHeight: number,
  normalHeight: number
) {
  doc.setLineDashPattern([1, 2], 0);
  doc.rect(x, y, cardW, cardH);

  const padding = DEFAULTS.cardPadding;

  // 🔹 1. Render TOP pinned lines
  let topY = y + padding;

  topLines.forEach((line) => {
    topY += line.gapTop || 0;

    let lineWidth = 0;
    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      lineWidth += doc.getTextWidth(seg.text);
    });

    let currentX =
      DEFAULTS.horizontalAlign === 'left'
        ? x + padding
        : DEFAULTS.horizontalAlign === 'middle'
          ? x + (cardW - lineWidth) / 2
          : x + cardW - lineWidth - padding;

    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, topY + line.height);
      currentX += doc.getTextWidth(seg.text);
    });

    topY += line.height + (line.gapBottom || 0);
  });

  // 🔹 2. Render NORMAL lines (existing behavior, but shifted down)
  let startY: number;

  const availableHeight = cardH - topHeight - padding * 2;

  if (DEFAULTS.verticalAlign === 'top') {
    startY = y + padding + topHeight;
  } else if (DEFAULTS.verticalAlign === 'middle') {
    startY = y + padding + topHeight + (availableHeight - normalHeight) / 2;
  } else {
    startY = y + cardH - normalHeight - padding;
  }

  let currentY = startY;

  normalLines.forEach((line) => {
    currentY += line.gapTop || 0;

    let lineWidth = 0;
    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      lineWidth += doc.getTextWidth(seg.text);
    });

    let currentX =
      DEFAULTS.horizontalAlign === 'left'
        ? x + padding
        : DEFAULTS.horizontalAlign === 'middle'
          ? x + (cardW - lineWidth) / 2
          : x + cardW - lineWidth - padding;

    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, currentY + line.height);
      currentX += doc.getTextWidth(seg.text);
    });

    currentY += line.height + (line.gapBottom || 0);
  });
}

// Main: generate PDF
function renderCards(cards: Record<string, Card[]>) {
  Object.entries(cards).forEach(([key, cardList]) => {
    const doc = createDocument();
    const layout = getLayout();
    const filename = `${key}.pdf`;

    cardList.forEach((card, i) => {
      const cardIndexOnPage = i % layout.cardsPerPage;
      if (i > 0 && cardIndexOnPage === 0) doc.addPage();

      const col = cardIndexOnPage % layout.cols;
      const row = Math.floor(cardIndexOnPage / layout.cols);
      const x = layout.marginLeft + col * layout.cardW;
      const y = layout.marginTop + row * layout.cardH;

      const { topLines, normalLines, topHeight, normalHeight } =
        buildWrappedLines(doc, card, layout.cardW);
      const trimmed = trimToFitSplit(
        topLines,
        normalLines,
        topHeight,
        normalHeight,
        layout.cardH
      );

      renderCard(
        doc,
        x,
        y,
        layout.cardW,
        layout.cardH,
        trimmed.topLines,
        trimmed.normalLines,
        trimmed.topHeight,
        trimmed.normalHeight
      );
    });

    doc.save(`./pdfs/${filename}`);
  });
}

export default renderCards;
