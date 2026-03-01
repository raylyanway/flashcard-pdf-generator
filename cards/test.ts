// ---- CARD DATA & STYLING ----
// Segment properties (per letter/word):
//   text: string (required)
//   fontWeight: 'light' | 'bold' (optional, inherits from line.fontWeight)
//   fontSize: number (optional, inherits from line.fontSize)
//   fontName: 'Lexend' | 'Roboto' (optional, auto-detected by language)
//
// Example with mixed styling:
//   [
//    { text: [
//       { text: 'Bold', fontWeight: 'bold', fontSize: 20 },
//       { text: ' normal ', fontSize: 16 },
//       { text: 'Large', fontSize: 24 }
//     ],
//    },
//    { text: 'копил', gapBottom: 0, fontSize: 10, fontWeight: 'bold' }

import type { Card } from '../types';

export const cards: Card[] = [
  [
    {
      text: 'Символ (ˈˈˈ) ILilIвится перед ударным слогом ставится перед ударным слогом ставится перед ударным слогом',
    },
    {
      text: [
        {
          text: 'Символ (ˈˈˈ) ILilI',
        },
        {
          text: 'в',
          fontWeight: 'bold',
        },
        {
          text: 'и',
          fontWeight: 'bold',
        },
        {
          text: 'тся перед ударным слогом ставится перед ударным слогом ставится перед ударным слогом',
        },
      ],
    },
    { text: 'маре' },
    {
      text: [
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'm' },
        { text: 'a', fontWeight: 'bold' },
        { text: 're' },
      ],
    },
    { text: 'mare', fontSize: 20 },
    { text: 'море', fontSize: 20 },
    { text: 'ударение на первый слог' },
    { text: 'копил', gapBottom: 0, fontSize: 10 },
    { text: 'koˈpil' },
    { text: 'copil' },
    { text: 'ребёнок' },
    { text: 'ударение на второй слог' },
    { text: 'copil', fontSize: 20 },
    { text: 'ребёнок', fontSize: 20 },
    { text: 'ударение на второй слог' },
  ],
  [
    { text: 'Apple', fontWeight: 'bold', fontSize: 26, gapTop: 10 },
    { text: '/эпл/', fontSize: 16, gapBottom: 20 },
    { text: '[ˈæpəl]', fontSize: 16 },
    { text: 'яблоко', fontSize: 18 },
  ],
  [
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
  [
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
      gapTop: 10,
    },
  ],
  [
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
  [
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
      gapBottom: 20,
    },
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
  [
    {
      text: [
        { text: 'S', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
  [
    {
      text: [
        {
          text: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
        },
        {
          text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
      ],
    },
  ],
  [
    {
      text: [
        {
          text: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss1ssssssssssssssssssssssssssssssssssssssssssss2ssssssssssssssss3ssssssssssss4sssssssss',
          fontSize: 24,
          fontWeight: 'bold',
        },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
  [
    {
      text: [
        { text: 'U', fontSize: 24, fontWeight: 'bold' },
        { text: 'mall ', fontSize: 18 },
        { text: 'and ', fontSize: 14 },
        { text: 'LARGE', fontSize: 26, fontWeight: 'bold' },
      ],
    },
  ],
];
