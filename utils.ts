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
  verticalAlign: 'top' as VerticalAlign,
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
  const wrappedLines: WrappedLine[] = [];
  let totalTextHeight = 0;
  // 2mm padding on each side
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

      wrappedLines.push({
        segments: segLine,
        height: lineHeight,
        gapTop,
        gapBottom,
      });
      totalTextHeight += lineHeight + gapTop + gapBottom;
    });
  });

  return { wrappedLines, totalTextHeight };
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

function trimToFit(
  wrappedLines: WrappedLine[],
  totalTextHeight: number,
  cardH: number
) {
  const maxTextHeight = cardH - DEFAULTS.cardPadding * 2;

  while (totalTextHeight > maxTextHeight && wrappedLines.length) {
    const removed = wrappedLines.pop();
    if (!removed) break;
    totalTextHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  return { wrappedLines, totalTextHeight };
}

function renderCard(
  doc: jsPDF,
  x: number,
  y: number,
  cardW: number,
  cardH: number,
  wrappedLines: WrappedLine[],
  totalTextHeight: number
) {
  doc.setLineDashPattern([1, 2], 0);
  doc.rect(x, y, cardW, cardH);

  let currentY: number;

  if (DEFAULTS.verticalAlign === 'top') {
    currentY = y + DEFAULTS.cardPadding;
  } else if (DEFAULTS.verticalAlign === 'middle') {
    currentY = y + (cardH - totalTextHeight) / 2;
  } else {
    currentY = y + cardH - totalTextHeight - DEFAULTS.cardPadding;
  }

  wrappedLines.forEach((wrappedLine: WrappedLine) => {
    // Apply top gap
    currentY += wrappedLine.gapTop || 0;

    // Calculate full line width
    let lineWidth = 0;
    wrappedLine.segments.forEach((seg: Segment) => {
      setFontStyles(doc, seg);
      lineWidth += doc.getTextWidth(seg.text);
    });

    // Horizontal alignment
    let currentX: number;

    if (DEFAULTS.horizontalAlign === 'left') {
      currentX = x + DEFAULTS.cardPadding;
    } else if (DEFAULTS.horizontalAlign === 'middle') {
      currentX = x + (cardW - lineWidth) / 2;
    } else {
      currentX = x + cardW - lineWidth - DEFAULTS.cardPadding;
    }

    // Draw text
    wrappedLine.segments.forEach((seg: Segment) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, currentY + wrappedLine.height, {
        align: 'left',
      });
      currentX += doc.getTextWidth(seg.text);
    });

    // Move down by line height
    currentY += wrappedLine.height;

    // Apply bottom gap
    currentY += wrappedLine.gapBottom || 0;
  });
}

// Main: generate PDF
function renderCards(cards: Card[], filename = 'flashcards.pdf') {
  const doc = createDocument();
  const layout = getLayout();

  cards.forEach((card, i) => {
    const cardIndexOnPage = i % layout.cardsPerPage;
    if (i > 0 && cardIndexOnPage === 0) doc.addPage();

    const col = cardIndexOnPage % layout.cols;
    const row = Math.floor(cardIndexOnPage / layout.cols);
    const x = layout.marginLeft + col * layout.cardW;
    const y = layout.marginTop + row * layout.cardH;

    const { wrappedLines, totalTextHeight } = buildWrappedLines(
      doc,
      card,
      layout.cardW
    );
    const trimmed = trimToFit(wrappedLines, totalTextHeight, layout.cardH);

    renderCard(
      doc,
      x,
      y,
      layout.cardW,
      layout.cardH,
      trimmed.wrappedLines,
      trimmed.totalTextHeight
    );
  });

  doc.save(filename);
}

export default renderCards;
