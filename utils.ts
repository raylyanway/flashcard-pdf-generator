import { jsPDF } from 'jspdf';

import type {
  Card,
  CardsMap,
  FontWeight,
  HorizontalAlign,
  Line,
  Segment,
  VerticalAlign,
  WrappedLine,
} from './types';

import notoSansBold from './fonts/notoSansBold';
import notoSansLight from './fonts/notoSansLight';
import { cardConfig } from './config';

const DEFAULTS = {
  gapTop: 0,
  gapBottom: 1,
  cardPadding: 1,
  fontName: 'Noto Sans',
  fontWeight: 'light' as FontWeight,
  fontSize: 10,
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
  const middleLines: WrappedLine[] = [];
  const bottomLines: WrappedLine[] = [];

  let topHeight = 0;
  let middleHeight = 0;
  let bottomHeight = 0;

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
      } else if (line.pinBottom) {
        bottomLines.push(wrappedLine);
        bottomHeight += lineHeight + gapTop + gapBottom;
      } else {
        middleLines.push(wrappedLine);
        middleHeight += lineHeight + gapTop + gapBottom;
      }
    });
  });

  return {
    topLines,
    middleLines,
    bottomLines,
    topHeight,
    middleHeight,
    bottomHeight,
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

function trimToFitThreeZones(
  topLines: WrappedLine[],
  middleLines: WrappedLine[],
  bottomLines: WrappedLine[],
  topHeight: number,
  middleHeight: number,
  bottomHeight: number,
  cardH: number
) {
  const maxTextHeight = cardH - DEFAULTS.cardPadding * 2;

  // 🔴 Trim bottom LAST priority? (we decide priority)
  // Priority: top > bottom > middle (middle is most flexible)

  // Step 1: trim middle first
  while (
    topHeight + middleHeight + bottomHeight > maxTextHeight &&
    middleLines.length
  ) {
    const removed = middleLines.pop();
    if (!removed) break;

    middleHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  // Step 2: trim bottom if needed
  while (
    topHeight + middleHeight + bottomHeight > maxTextHeight &&
    bottomLines.length
  ) {
    const removed = bottomLines.shift(); // remove from TOP of bottom block (visually nicer)
    if (!removed) break;

    bottomHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  // Step 3: trim top (last resort)
  while (
    topHeight + middleHeight + bottomHeight > maxTextHeight &&
    topLines.length
  ) {
    const removed = topLines.pop();
    if (!removed) break;

    topHeight -=
      removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  return {
    topLines,
    middleLines,
    bottomLines,
    topHeight,
    middleHeight,
    bottomHeight,
  };
}

function getAlignedX(doc: jsPDF, line: WrappedLine, x: number, cardW: number) {
  const padding = DEFAULTS.cardPadding;

  let lineWidth = 0;
  line.segments.forEach((seg) => {
    setFontStyles(doc, seg);
    lineWidth += doc.getTextWidth(seg.text);
  });

  if (DEFAULTS.horizontalAlign === 'left') return x + padding;
  if (DEFAULTS.horizontalAlign === 'middle') return x + (cardW - lineWidth) / 2;
  return x + cardW - lineWidth - padding;
}

function renderCard(
  doc: jsPDF,
  x: number,
  y: number,
  cardW: number,
  cardH: number,
  topLines: WrappedLine[],
  middleLines: WrappedLine[],
  bottomLines: WrappedLine[],
  topHeight: number,
  middleHeight: number,
  bottomHeight: number
) {
  doc.setLineDashPattern([0.5, 20], 0);
  doc.rect(x, y, cardW, cardH);

  const padding = DEFAULTS.cardPadding;

  // 🔹 TOP
  let topY = y + padding;

  topLines.forEach((line) => {
    topY += line.gapTop || 0;

    let currentX = getAlignedX(doc, line, x, cardW);
    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, topY + line.height);
      currentX += doc.getTextWidth(seg.text);
    });

    topY += line.height + (line.gapBottom || 0);
  });

  // 🔹 BOTTOM
  let bottomY = y + cardH - padding - bottomHeight;

  bottomLines.forEach((line) => {
    bottomY += line.gapTop || 0;

    let currentX = getAlignedX(doc, line, x, cardW);
    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, bottomY + line.height);
      currentX += doc.getTextWidth(seg.text);
    });

    bottomY += line.height + (line.gapBottom || 0);
  });

  // 🔹 MIDDLE (remaining space)
  const freeHeight = cardH - padding * 2 - topHeight - bottomHeight;

  let middleStartY: number;

  if (DEFAULTS.verticalAlign === 'top') {
    middleStartY = y + padding + topHeight;
  } else if (DEFAULTS.verticalAlign === 'middle') {
    middleStartY = y + padding + topHeight + (freeHeight - middleHeight) / 2;
  } else {
    middleStartY = y + cardH - padding - bottomHeight - middleHeight;
  }

  let currentY = middleStartY;

  middleLines.forEach((line) => {
    currentY += line.gapTop || 0;

    let currentX = getAlignedX(doc, line, x, cardW);
    line.segments.forEach((seg) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, currentX, currentY + line.height);
      currentX += doc.getTextWidth(seg.text);
    });

    currentY += line.height + (line.gapBottom || 0);
  });
}

// Main: generate PDF
function renderCards(cards: CardsMap) {
  Object.entries(cards).forEach(([key, cardList]) => {
    if (!cardList) return;

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

      const {
        topLines,
        middleLines,
        bottomLines,
        topHeight,
        middleHeight,
        bottomHeight,
      } = buildWrappedLines(doc, card, layout.cardW);

      const trimmed = trimToFitThreeZones(
        topLines,
        middleLines,
        bottomLines,
        topHeight,
        middleHeight,
        bottomHeight,
        layout.cardH
      );

      renderCard(
        doc,
        x,
        y,
        layout.cardW,
        layout.cardH,
        trimmed.topLines,
        trimmed.middleLines,
        trimmed.bottomLines,
        trimmed.topHeight,
        trimmed.middleHeight,
        trimmed.bottomHeight
      );
    });

    doc.save(`./pdfs/${filename}`);
  });
}

function constructCards(cards: CardsMap): CardsMap {
  const cardsWithHeaderAndFooter: CardsMap = {};

  Object.entries(cardConfig).forEach(([contentName, contentValue]) => {
    Object.entries(contentValue).forEach(([level, topics]) => {
      let cardNumber = 1;
      let updatedCards: Card[] = [];
      const fileName = `${contentName}_${level}`;

      topics.forEach((topic) => {
        const cardList = cards[topic];
        if (!cardList) return;

        const cardsWithHeaderAndFooter = cardList.map((card) => {
          const header: Line = {
            text: topic,
            pinTop: true,
          };

          const footer: Line = {
            text: `${cardNumber++} (${level} - ${contentName})`,
            pinBottom: true,
          };

          return [header, ...card, footer];
        });

        updatedCards = updatedCards.concat(cardsWithHeaderAndFooter);
      });

      cardsWithHeaderAndFooter[fileName] = updatedCards;
    });
  });

  return cardsWithHeaderAndFooter;
}

function render(cards: CardsMap) {
  renderCards(constructCards(cards));
}

export default render;
