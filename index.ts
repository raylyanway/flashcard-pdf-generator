import { jsPDF } from 'jspdf';
import type { Card, FontWeight, Line, Segment, WrappedLine } from './types';

import notoSansBold from './fonts/notoSansBold';
import notoSansLight from './fonts/notoSansLight';

// import { cards } from './cards/phonetic';
import { cards } from './cards/test';

// Document and layout helpers
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

// Fonts and spacing defaults
const DEFAULTS = {
  lineGap: 1,
  cardPadding: 2,
  fontName: 'Noto Sans',
  fontWeight: 'light' as FontWeight,
  fontSize: 14,
};

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

    // measure widths
    const segWidths = segments.map((seg) => {
      setFontStyles(doc, seg);
      return doc.getTextWidth(seg.text);
    });

    const wrappedSegmentLines = wrapSegments(
      doc,
      segments,
      segWidths,
      maxWidth
    );

    wrappedSegmentLines.forEach((segLine, idx) => {
      let lineHeight = 0;
      segLine.forEach((seg) => {
        setFontStyles(doc, seg);
        const dims = doc.getTextDimensions(seg.text);
        lineHeight = Math.max(lineHeight, dims.h);
      });

      const gapTop = idx === 0 ? (line.gapTop ?? DEFAULTS.lineGap) : 0;
      const gapBottom =
        idx === wrappedSegmentLines.length - 1
          ? (line.gapBottom ?? DEFAULTS.lineGap)
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
    fontWeight: segment.fontWeight || line.fontWeight || DEFAULTS.fontWeight,
    fontSize: segment.fontSize || line.fontSize || DEFAULTS.fontSize,
  }));
}

function wrapSegments(
  doc: jsPDF,
  segments: Segment[],
  segWidths: number[],
  maxWidth: number
) {
  const wrapped: Segment[][] = [];
  let currentLine: Segment[] = [];
  let currentWidth = 0;

  segments.forEach((seg, idx) => {
    const segWidth = segWidths[idx];
    if (segWidth > maxWidth) {
      // break the segment into smaller parts
      setFontStyles(doc, seg);
      const parts = doc.splitTextToSize(seg.text, maxWidth);
      parts.forEach((text: string) => {
        const w = doc.getTextWidth(text);
        if (currentWidth + w > maxWidth && currentLine.length) {
          wrapped.push(currentLine);
          currentLine = [];
          currentWidth = 0;
        }
        currentLine.push({ ...seg, text });

        currentWidth += w;
      });
    } else {
      if (currentWidth + segWidth > maxWidth && currentLine.length) {
        wrapped.push(currentLine);
        currentLine = [];
        currentWidth = 0;
      }
      currentLine.push(seg);
      currentWidth += segWidth;
    }
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
  wrappedLines: WrappedLine[]
) {
  doc.setLineDashPattern([1, 2], 0);
  doc.rect(x, y, cardW, cardH);

  let currentY = y + (wrappedLines[0]?.height ?? 0);

  wrappedLines.forEach((wrappedline: WrappedLine) => {
    currentY += wrappedline.gapTop || 0;

    let lineWidth = 0;
    wrappedline.segments.forEach((seg: Segment) => {
      setFontStyles(doc, seg);
      lineWidth += doc.getTextWidth(seg.text);
    });

    let cursorX = x + cardW / 2 - lineWidth / 2;
    wrappedline.segments.forEach((seg: Segment) => {
      setFontStyles(doc, seg);
      doc.text(seg.text, cursorX, currentY, { align: 'left' });
      cursorX += doc.getTextWidth(seg.text);
    });

    currentY += wrappedline.height;
  });
}

// Main: generate PDF
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

  renderCard(doc, x, y, layout.cardW, layout.cardH, trimmed.wrappedLines);
});

doc.save('flashcards.pdf');
