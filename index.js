import { jsPDF } from 'jspdf';

import lexendLight from './fonts/lexendLight.js';
import lexendBold from './fonts/lexendBold.js';
import robotoLight from './fonts/robotoLight.js';
import robotoBold from './fonts/robotoBold.js';

import { cards } from './cards/phonetic.js';

// Document and layout helpers
function createDocument() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  addFonts(doc);
  return doc;
}

function addFonts(doc) {
  doc.addFileToVFS('Lexend-Light.ttf', lexendLight);
  doc.addFont('Lexend-Light.ttf', 'Lexend', 'light');

  doc.addFileToVFS('Lexend-Bold.ttf', lexendBold);
  doc.addFont('Lexend-Bold.ttf', 'Lexend', 'bold');

  doc.addFileToVFS('Roboto-Light.ttf', robotoLight);
  doc.addFont('Roboto-Light.ttf', 'Roboto', 'light');

  doc.addFileToVFS('Roboto-Bold.ttf', robotoBold);
  doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');
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
    cardsPerPage: cols * rows
  };
}

// Fonts and spacing defaults
const DEFAULTS = {
  lineGap: 1,
  cardPadding: 2,
  fontName: 'Lexend',
  ruFontName: 'Roboto',
  fontWeight: 'light',
  fontSize: 14,
  defaultFont: { name: 'Lexend', style: 'light', size: 14 },
  defaultRuFont: { name: 'Roboto', style: 'light', size: 14 }
};

function detectFontNameForText(text) {
  return /[а-яА-ЯЁё]/.test(text) ? DEFAULTS.ruFontName : DEFAULTS.fontName;
}

function setFontStyles({ fontName, fontWeight, fontSize }) {
  doc.setFont(fontName, fontWeight);
  doc.setFontSize(fontSize);
}

// Build wrapped lines for a single card
function buildWrappedLines(doc, card, cardW) {
  const wrappedLines = [];
  let totalTextHeight = 0;
  const maxWidth = cardW - (DEFAULTS.cardPadding * 2); // 2mm padding on each side

  card.forEach(line => {
    const segments = buildSegmentsForLine(line);

    // measure widths
    const segWidths = segments.map(seg => {
      setFontStyles(seg);
      return doc.getTextWidth(seg.text);
    });

    // wrap segments
    const wrappedSegmentLines = wrapSegments(doc, segments, segWidths, maxWidth);

    wrappedSegmentLines.forEach((segLine, idx) => {
      // line height is max of segments
      let lineHeight = 0;
      segLine.forEach(seg => {
        setFontStyles(seg);
        const dims = doc.getTextDimensions(seg.text);
        lineHeight = Math.max(lineHeight, dims.h);
      });

      const gapTop = idx === 0 ? (line.gapTop ?? DEFAULTS.lineGap) : 0;
      const gapBottom = idx === wrappedSegmentLines.length - 1 ? (line.gapBottom ?? DEFAULTS.lineGap) : 0;

      wrappedLines.push({ segments: segLine, height: lineHeight, gapTop, gapBottom });
      totalTextHeight += lineHeight + gapTop + gapBottom;
    });
  });

  return { wrappedLines, totalTextHeight };
}

function normalizeSegments(segments, lineFontName, lineFontWeight, lineFontSize) {
    return segments.map(segment => ({
      text: segment.text,
      fontName: segment.fontName || lineFontName || detectFontNameForText(segment.text),
      fontWeight: segment.style || lineFontWeight || DEFAULTS.fontWeight,
      fontSize: segment.size || lineFontSize || DEFAULTS.fontSize
    }));
  }

function buildSegmentsForLine(line) {
  return Array.isArray(line.text) ? normalizeSegments(line.text, line.fontName, line.fontWeight, line.fontSize) : normalizeSegments(line.text.split('').map(t => ({ text: t })), line.fontName, line.fontWeight, line.fontSize);
}

function wrapSegments(doc, segments, segWidths, maxWidth) {
  const wrapped = [];
  let currentLine = [];
  let currentWidth = 0;

  segments.forEach((seg, idx) => {
    const segWidth = segWidths[idx];
    if (segWidth > maxWidth) {
      // break the segment into smaller parts
      setFontStyles(seg);
      const parts = doc.splitTextToSize(seg.text, maxWidth);
      parts.forEach((part, pidx) => {
        const text = pidx > 0 ? ' ' + part : part;
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

function trimToFit(wrappedLines, totalTextHeight, cardH) {
  const maxTextHeight = cardH - DEFAULTS.cardPadding * 2;

  while (totalTextHeight > maxTextHeight && wrappedLines.length) {
    const removed = wrappedLines.pop();
    totalTextHeight -= removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
  }

  return { wrappedLines, totalTextHeight };
}

function renderCard(doc, x, y, cardW, cardH, wrappedLines) {
  doc.setLineDash([1, 2]);
  doc.rect(x, y, cardW, cardH);

  let currentY = y + wrappedLines[0].height;

  wrappedLines.forEach(wrappedline => {
    currentY += wrappedline.gapTop || 0;

    let lineWidth = 0;
    wrappedline.segments.forEach(seg => {
      setFontStyles(seg);
      lineWidth += doc.getTextWidth(seg.text);
    });

    let cursorX = x + cardW / 2 - lineWidth / 2;
    wrappedline.segments.forEach(seg => {
      setFontStyles(seg);
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

  const { wrappedLines, totalTextHeight } = buildWrappedLines(doc, card, layout.cardW);
  const trimmed = trimToFit(wrappedLines, totalTextHeight, layout.cardH);

  renderCard(doc, x, y, layout.cardW, layout.cardH, trimmed.wrappedLines);
});

doc.save('flashcards.pdf');