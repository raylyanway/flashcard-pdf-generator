import { jsPDF } from 'jspdf';

import lexendLight from './fonts/lexendLight.js';
import lexendBold from './fonts/lexendBold.js';
import robotoLight from './fonts/robotoLight.js';
import robotoBold from './fonts/robotoBold.js';

const doc = new jsPDF({
  unit: 'mm',
  format: 'a4'
});

// ---- REGISTER FONTS ----
doc.addFileToVFS('Lexend-Light.ttf', lexendLight);
doc.addFont('Lexend-Light.ttf', 'Lexend', 'light');

doc.addFileToVFS('Lexend-Bold.ttf', lexendBold);
doc.addFont('Lexend-Bold.ttf', 'Lexend', 'bold');

doc.addFileToVFS('Roboto-Light.ttf', robotoLight);
doc.addFont('Roboto-Light.ttf', 'Roboto', 'light');

doc.addFileToVFS('Roboto-Bold.ttf', robotoBold);
doc.addFont('Roboto-Bold.ttf', 'Roboto', 'bold');

// ---- PAGE SETUP ----
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

// ---- DEFAULT FONT ----
const defaultFont = {
  name: 'Lexend',
  style: 'light',
  size: 14
};

const defaultRuFont = {
  name: 'Roboto',
  style: 'light',
  size: 14
};

// ---- CARD DATA EXAMPLE ----
const cards = [
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом' },
    { text: 'маре' },
    { text: [
      {text: 'ˈ', style: 'bold'},
      {text: 'm'},
      {text: 'a', style: 'bold'},
      {text: 're'}
    ] },
    { text: 'mare', size: 20 },
    { text: 'море', size: 20 },
    { text: 'ударение на первый слог' },
    { text: 'копил' },
    { text: 'koˈpil' },
    { text: 'copil', size: 20 },
    { text: 'ребёнок', size: 20 },
    { text: 'ударение на второй слог' },
    { text: 'copil', size: 20 },
    { text: 'ребёнок', size: 20 },
    { text: 'ударение на второй слог' }
  ],
  [
    { text: 'Apple', style: 'bold', size: 26 },
    { text: '/эпл/', size: 16 },
    { text: '[ˈæpəl]', size: 16 },
    { text: 'яблоко', size: 18 }
  ],
  [
    { text: 'Banana', style: 'bold', size: 26 },
    { text: '/бэнанэ/', size: 16 },
    { text: '[bəˈnænə]', size: 16 },
    { text: 'банан', size: 18 }
  ]
];

// ---- DRAW CARDS ----
cards.forEach((card, i) => {
  const col = i % cols;
  const row = Math.floor(i / cols);

  const x = marginLeft + col * cardW;
  const y = marginTop + row * cardH;

  doc.setLineDash([1, 2], 0);
  doc.rect(x, y, cardW, cardH);
  doc.setLineDash([]);

  // Calculate total height for vertical centering & prepare wrapped lines
  let totalTextHeight = 0;
  const wrappedLines = [];

  card.forEach(line => {
    // build segment list; each segment may override style/name but we keep size uniform
    let segments = [];
    if (Array.isArray(line.text)) {
      segments = line.text.map(piece => {
        const segFontName = /[а-яА-ЯЁё]/.test(piece.text)
          ? defaultRuFont.name
          : defaultFont.name;
        return {
          text: piece.text,
          fontName: piece.fontName || segFontName,
          fontStyle: piece.style || line.style || defaultFont.style,
          fontSize: piece.size || line.size || defaultFont.size
        };
      });
    } else {
      const segFontName = /[а-яА-ЯЁё]/.test(line.text)
        ? defaultRuFont.name
        : defaultFont.name;
      segments = [{
        text: line.text,
        fontName: line.fontName || segFontName,
        fontStyle: line.style || defaultFont.style,
        fontSize: line.size || defaultFont.size
      }];
    }

    // choose a representative size for wrapping (first segment)
    const wrapFontSize = segments[0].fontSize;
    const wrapFontName = segments[0].fontName;
    const wrapFontStyle = segments[0].fontStyle;

    doc.setFont(wrapFontName, wrapFontStyle);
    doc.setFontSize(wrapFontSize);

    // Split text to fit within card width with padding
    const maxWidth = cardW - 4; // 2mm padding on each side
    const fullText = segments.map(s => s.text).join('');
    const textLines = doc.splitTextToSize(fullText, maxWidth);

    // distribute segments across wrapped lines
    let segQueue = segments.map(s => ({...s})); // copy to mutate
    textLines.forEach(textLine => {
      let remaining = textLine;
      const lineSegs = [];
      while (remaining.length && segQueue.length) {
        const head = segQueue[0];
        if (remaining.startsWith(head.text)) {
          // entire segment fits
          lineSegs.push({ ...head });
          remaining = remaining.slice(head.text.length);
          segQueue.shift();
        } else {
          // take partial
          const take = remaining.length;
          lineSegs.push({
            text: head.text.slice(0, take),
            fontName: head.fontName,
            fontStyle: head.fontStyle,
            fontSize: head.fontSize
          });
          head.text = head.text.slice(take);
          remaining = '';
        }
      }

      const dims = doc.getTextDimensions(textLine);
      const lineHeight = dims.h;
      wrappedLines.push({
        segments: lineSegs,
        height: lineHeight
      });
      totalTextHeight += lineHeight;
    });
  });

  // Trim excess lines if the content is taller than the card
  const verticalPadding = 2; // mm above and below
  const maxTextHeight = cardH - verticalPadding * 2;

  // compute additional offsets for bounding box (half of first/last line)
  const getBoundingTotals = () => {
    const base = totalTextHeight;
    const topExtra = wrappedLines.length ? wrappedLines[0].height / 2 : 0;
    const bottomExtra = wrappedLines.length
      ? wrappedLines[wrappedLines.length - 1].height / 2
      : 0;
    return { base, topExtra, bottomExtra, bounding: base + topExtra + bottomExtra };
  };

  let { base, topExtra, bottomExtra, bounding } = getBoundingTotals();
  while (bounding > maxTextHeight && wrappedLines.length) {
    const removed = wrappedLines.pop();
    totalTextHeight -= removed.height;
    ({ base, topExtra, bottomExtra, bounding } = getBoundingTotals());
  }

  // start baseline so that bounding box is centered inside padded area
  let currentY =
    y +
    verticalPadding +
    (maxTextHeight - bounding) / 2 +
    topExtra;

  // Render wrapped (and possibly truncated) lines
  wrappedLines.forEach(wline => {
    // calculate total width of the line from segments
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
      doc.text(seg.text, cursorX, currentY, {
        align: 'left'
      });
      cursorX += doc.getTextWidth(seg.text);
    });

    currentY += wline.height;
  });
});

doc.save('flashcards.pdf');