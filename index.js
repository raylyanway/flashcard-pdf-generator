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
const cardH = printableHeight / rows; // no inter-row gaps

// ---- TEXT SPACING CONFIG ----
const defaultLineGap = 1; // mm gap between text rows inside a card
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

// ---- CARD DATA & STYLING ----
// Segment properties (per letter/word):
//   text: string (required)
//   style: 'light' | 'bold' (optional, inherits from line.style)
//   size: number (optional, inherits from line.size)
//   fontName: 'Lexend' | 'Roboto' (optional, auto-detected by language)
//
// Example with mixed styling:
//   { text: [
//       { text: 'Bold', style: 'bold', size: 20 },
//       { text: ' normal ', size: 16 },
//       { text: 'Large', size: 24 }
//     ] }
//
const cards = [
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом ставится перед ударным слогом ставится перед ударным слогом', gapTop: 15, gapBottom: 30 },
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
    { text: '/эпл/', size: 16, gapBottom: 20 },
    { text: '[ˈæpəl]', size: 16 },
    { text: 'яблоко', size: 18 }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'S', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
  [
    {
      text: [
        { text: 'U', size: 24, style: 'bold' },
        { text: 'mall ', size: 18 },
        { text: 'and ', size: 14 },
        { text: 'LARGE', size: 26, style: 'bold' }
      ]
    }
  ],
];

// ---- DRAW CARDS ----
cards.forEach((card, i) => {
  const col = i % cols;
  const row = Math.floor(i / cols);

  const x = marginLeft + col * cardW;
  
  // Calculate Y position (rows evenly stacked, no extra gaps)
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
      // Split text by character to handle mixed scripts and special symbols
      const chars = line.text.split('');
      const tempSegments = [];
      let currentSeg = null;
      
      chars.forEach(char => {
        const isCyrillic = /[а-яА-ЯЁё]/.test(char);
        const isLatin = /[a-zA-Z]/.test(char);
        // Assign font based on script
        const charFontName = isCyrillic ? defaultRuFont.name : defaultFont.name;
        
        // Start new segment if font changes
        if (!currentSeg || currentSeg.fontName !== charFontName) {
          currentSeg = {
            text: char,
            fontName: charFontName,
            fontStyle: line.style || defaultFont.style,
            fontSize: line.size || defaultFont.size
          };
          tempSegments.push(currentSeg);
        } else {
          currentSeg.text += char;
        }
      });
      
      segments = tempSegments;
    }

    // measure actual width of all segments before wrapping
    let fullText = '';
    const segmentWidths = [];
    segments.forEach(seg => {
      doc.setFont(seg.fontName, seg.fontStyle);
      doc.setFontSize(seg.fontSize);
      const width = doc.getTextWidth(seg.text);
      segmentWidths.push(width);
      fullText += seg.text;
    });

    const maxWidth = cardW - 4; // 2mm padding on each side

    // wrap segments, not text
    let wrappedSegments = [];
    let currentLineWidth = 0;
    let currentLine = [];

    segments.forEach((seg, idx) => {
      const width = segmentWidths[idx];
      if (width > maxWidth) {
        // segment itself is too wide, must split it
        doc.setFont(seg.fontName, seg.fontStyle);
        doc.setFontSize(seg.fontSize);
        const splitSeg = doc.splitTextToSize(seg.text, maxWidth);
        splitSeg.forEach((part, pidx) => {
          const partWidth = doc.getTextWidth(part);
          if (currentLineWidth + partWidth > maxWidth && currentLine.length) {
            wrappedSegments.push([...currentLine]);
            currentLine = [];
            currentLineWidth = 0;
          }
          // Add space before part if it's not the first part of this segment
          const textWithSpace = pidx > 0 ? ' ' + part : part;
          const textWidthWithSpace = doc.getTextWidth(textWithSpace);
          currentLine.push({
            text: textWithSpace,
            fontName: seg.fontName,
            fontStyle: seg.fontStyle,
            fontSize: seg.fontSize
          });
          currentLineWidth += textWidthWithSpace;
        });
      } else {
        // try to fit segment on current line
        if (currentLineWidth + width > maxWidth && currentLine.length) {
          wrappedSegments.push([...currentLine]);
          currentLine = [];
          currentLineWidth = 0;
        }
        currentLine.push(seg);
        currentLineWidth += width;
      }
    });
    if (currentLine.length) {
      wrappedSegments.push(currentLine);
    }

    // convert wrapped segments to wrapped lines
    wrappedSegments.forEach((lineSegs, idx) => {
      // measure the actual height of this line (max height of any segment)
      let lineHeight = 0;
      lineSegs.forEach(seg => {
        doc.setFont(seg.fontName, seg.fontStyle);
        doc.setFontSize(seg.fontSize);
        const dims = doc.getTextDimensions(seg.text);
        lineHeight = Math.max(lineHeight, dims.h);
      });

      // determine gaps before/after this line
      const gapTop = idx === 0 ? (line.gapTop ?? defaultLineGap) : 0;
      const gapBottom = idx === wrappedSegments.length - 1 ? (line.gapBottom ?? defaultLineGap) : 0;

      wrappedLines.push({
        segments: lineSegs,
        height: lineHeight,
        gapTop,
        gapBottom
      });
      totalTextHeight += lineHeight + gapTop + gapBottom;
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
    totalTextHeight -= removed.height + (removed.gapTop || 0) + (removed.gapBottom || 0);
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
    // apply gap before line
    currentY += wline.gapTop || 0;

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

    // advance past line and bottom gap
    currentY += wline.height + (wline.gapBottom || 0);
  });
});

doc.save('flashcards.pdf');