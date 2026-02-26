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
    { text: 'ˈmare' },
    { text: 'mare', size: 20 },
    { text: 'море', size: 20 },
    { text: 'ударение на первый слог' },
    { text: 'копил' },
    { text: 'koˈpil' },
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

  // Calculate total height for vertical centering
  let totalTextHeight = 0;
  card.forEach(line => {
    const fontSize = line.size || defaultFont.size;
    totalTextHeight += fontSize * 0.35;
  });

  let currentY = y + (cardH / 2) - (totalTextHeight / 2);

  // Render lines
  card.forEach(line => {
    const fontName =
      /[а-яА-ЯЁё]/.test(line.text)
        ? defaultRuFont.name
        : defaultFont.name;

    const fontStyle = line.style || defaultFont.style;
    const fontSize = line.size || defaultFont.size;

    doc.setFont(fontName, fontStyle);
    doc.setFontSize(fontSize);

    const centerX = x + cardW / 2;

    doc.text(line.text, centerX, currentY, {
      align: 'center'
    });

    currentY += fontSize * 0.35;
  });
});

doc.save('flashcards.pdf');