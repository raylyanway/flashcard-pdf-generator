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
  defaultFont: { name: 'Lexend', style: 'light', size: 14 },
  defaultRuFont: { name: 'Roboto', style: 'light', size: 14 }
};

// Build wrapped lines for a single card
function buildWrappedLines(doc, card, cardW) {
  const wrappedLines = [];
  let totalTextHeight = 0;
  const maxWidth = cardW - 4; // 2mm padding on each side

  card.forEach(line => {
    const segments = buildSegmentsForLine(line);

    // measure widths
    const segWidths = segments.map(seg => {
      doc.setFont(seg.fontName, seg.fontStyle);
      doc.setFontSize(seg.fontSize);
      return doc.getTextWidth(seg.text);
    });

    // wrap segments
    const wrappedSegmentLines = wrapSegments(doc, segments, segWidths, maxWidth);

    wrappedSegmentLines.forEach((segLine, idx) => {
      // line height is max of segments
      let lineHeight = 0;
      segLine.forEach(seg => {
        doc.setFont(seg.fontName, seg.fontStyle);
        doc.setFontSize(seg.fontSize);
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

function buildSegmentsForLine(line) {
  // normalize input into an array of segments {text,fontName,fontStyle,fontSize}
  if (Array.isArray(line.text)) {
    return line.text.map(piece => ({
      text: piece.text,
      fontName: piece.fontName || (/[а-яА-ЯЁё]/.test(piece.text) ? DEFAULTS.defaultRuFont.name : DEFAULTS.defaultFont.name),
      fontStyle: piece.style || line.style || DEFAULTS.defaultFont.style,
      fontSize: piece.size || line.size || DEFAULTS.defaultFont.size
    }));
  }

  // split mixed-script text into segments per script
  const chars = line.text.split('');
  const segments = [];
  let cur = null;

  chars.forEach(ch => {
    const isCyr = /[а-яА-ЯЁё]/.test(ch);
    const fontName = isCyr ? DEFAULTS.defaultRuFont.name : DEFAULTS.defaultFont.name;
    if (!cur || cur.fontName !== fontName) {
      cur = { text: ch, fontName, fontStyle: line.style || DEFAULTS.defaultFont.style, fontSize: line.size || DEFAULTS.defaultFont.size };
      segments.push(cur);
    } else {
      cur.text += ch;
    }
  });

  return segments;
}

function wrapSegments(doc, segments, widths, maxWidth) {
  const wrapped = [];
  let currentLine = [];
  let currentWidth = 0;

  segments.forEach((seg, idx) => {
    const width = widths[idx];
    if (width > maxWidth) {
      // break the segment into smaller parts
      doc.setFont(seg.fontName, seg.fontStyle);
      doc.setFontSize(seg.fontSize);
      const parts = doc.splitTextToSize(seg.text, maxWidth);
      parts.forEach((part, pidx) => {
        const text = pidx > 0 ? ' ' + part : part;
        const w = doc.getTextWidth(text);
        if (currentWidth + w > maxWidth && currentLine.length) {
          wrapped.push(currentLine);
          currentLine = [];
          currentWidth = 0;
        }
        currentLine.push({ text, fontName: seg.fontName, fontStyle: seg.fontStyle, fontSize: seg.fontSize });
        currentWidth += w;
      });
    } else {
      if (currentWidth + width > maxWidth && currentLine.length) {
        wrapped.push(currentLine);
        currentLine = [];
        currentWidth = 0;
      }
      currentLine.push(seg);
      currentWidth += width;
    }
  });

  if (currentLine.length) wrapped.push(currentLine);
  return wrapped;
}

function trimToFit(wrappedLines, totalTextHeight, cardH) {
  const verticalPadding = 2;
  const maxTextHeight = cardH - verticalPadding * 2;

  const getBounding = () => {
    const base = totalTextHeight;
    const topExtra = wrappedLines.length ? wrappedLines[0].height / 2 : 0;
    const bottomExtra = wrappedLines.length ? wrappedLines[wrappedLines.length - 1].height / 2 : 0;
    return { base, topExtra, bottomExtra, bounding: base + topExtra + bottomExtra };
  };

  let { base, topExtra, bottomExtra, bounding } = getBounding();
  while (bounding > maxTextHeight && wrappedLines.length) {
    const removed = wrappedLines.pop();
    totalTextHeight -= removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
    ({ base, topExtra, bottomExtra, bounding } = getBounding());
  }

  return { wrappedLines, totalTextHeight, topExtra, bounding };
}

function renderCard(doc, x, y, cardW, cardH, wrappedLines, bounding, topExtra) {
  doc.setLineDash([1, 2], 0);
  doc.rect(x, y, cardW, cardH);
  doc.setLineDash([]);

  const verticalPadding = 2;
  const maxTextHeight = cardH - verticalPadding * 2;

  let currentY = y + verticalPadding + (maxTextHeight - bounding) / 2 + topExtra;

  wrappedLines.forEach(wline => {
    currentY += wline.gapTop || 0;

    let lineWidth = 0;
    wline.segments.forEach(seg => {
      doc.setFont(seg.fontName, seg.fontStyle);
      doc.setFontSize(seg.fontSize);
      lineWidth += doc.getTextWidth(seg.text);
    });

    let cursorX = x + cardW / 2 - lineWidth / 2;
    wline.segments.forEach(seg => {
      doc.setFont(seg.fontName, seg.fontStyle);
      doc.setFontSize(seg.fontSize);
      doc.text(seg.text, cursorX, currentY, { align: 'left' });
      cursorX += doc.getTextWidth(seg.text);
    });

    currentY += wline.height + (wline.gapBottom || 0);
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

  renderCard(doc, x, y, layout.cardW, layout.cardH, trimmed.wrappedLines, trimmed.bounding, trimmed.topExtra);
});

doc.save('flashcards.pdf');