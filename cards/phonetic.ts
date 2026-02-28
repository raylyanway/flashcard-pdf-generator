// ---- CARD DATA & STYLING ----
// Segment properties (per letter/word):
//   text: string (required)
//   style: 'light' | 'bold' (optional, inherits from line.style)
//   size: number (optional, inherits from line.size)
//   fontName: 'Lexend' | 'Roboto' (optional, auto-detected by language)
//
// Example with mixed styling:
//   [
//    { text: [
//       { text: 'Bold', style: 'bold', size: 20 },
//       { text: ' normal ', size: 16 },
//       { text: 'Large', size: 24 }
//     ],
//    },
//    { text: 'копил', gapBottom: 0, size: 10, style: 'bold' }

import { Card } from '../types';

//   ]
export const cards: Card[] = [
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом' },
    {
      text: [{ text: 'м' }, { text: 'а', fontWeight: 'bold' }, { text: 'ре' }],
    },
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
    {
      text: [{ text: 'коп' }, { text: 'и', fontWeight: 'bold' }, { text: 'л' }],
    },
    {
      text: [
        { text: 'ko' },
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'p' },
        { text: 'i', fontWeight: 'bold' },
        { text: 'l' },
      ],
    },
    { text: 'copil', fontSize: 20 },
    { text: 'ребёнок', fontSize: 20 },
    {
      text: [{ text: 'коп' }, { text: 'и', fontWeight: 'bold' }, { text: 'л' }],
    },
    {
      text: [
        { text: 'ko' },
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'p' },
        { text: 'i', fontWeight: 'bold' },
        { text: 'l' },
      ],
    },
    {
      text: [{ text: 'коп' }, { text: 'и', fontWeight: 'bold' }, { text: 'л' }],
    },
    {
      text: [
        { text: 'ko' },
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'p' },
        { text: 'i', fontWeight: 'bold' },
        { text: 'l' },
      ],
    },
  ],
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом' },
    {
      text: [{ text: 'м' }, { text: 'а', fontWeight: 'bold' }, { text: 'ре' }],
    },
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
    {
      text: [{ text: 'коп' }, { text: 'и', fontWeight: 'bold' }, { text: 'л' }],
    },
    {
      text: [
        { text: 'ko' },
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'p' },
        { text: 'i', fontWeight: 'bold' },
        { text: 'l' },
      ],
    },
    { text: 'copil', fontSize: 20 },
    { text: 'ребёнок', fontSize: 20 },
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
          text: 'Ssssssssssssssssssssssssssssssssssssssssssssssssssssss',
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
