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
//   ]
export const cards = [
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом'},
    { text: [
      {text: 'м'},
      {text: 'а', style: 'bold'},
      {text: 'ре'}
    ] },
    { text: [
      {text: 'ˈ', style: 'bold'},
      {text: 'm'},
      {text: 'a', style: 'bold'},
      {text: 're'}
    ] },
    { text: 'mare', size: 20 },
    { text: 'море', size: 20 },
    { text: [{text: 'коп'}, {text: 'и', style: 'bold'}, {text: 'л'}] },
    { text:  [ { text: 'ko' }, {text: 'ˈ', style: 'bold'}, {text: 'p'}, {text: 'i', style: 'bold'}, {text: 'l'} ] },
    { text: 'copil', size: 20 },
    { text: 'ребёнок', size: 20 },
    { text: [{text: 'коп'}, {text: 'и', style: 'bold'}, {text: 'л'}] },
    { text:  [ { text: 'ko' }, {text: 'ˈ', style: 'bold'}, {text: 'p'}, {text: 'i', style: 'bold'}, {text: 'l'} ] },
    { text: [{text: 'коп'}, {text: 'и', style: 'bold'}, {text: 'л'}] },
    { text:  [ { text: 'ko' }, {text: 'ˈ', style: 'bold'}, {text: 'p'}, {text: 'i', style: 'bold'}, {text: 'l'} ] },
  ],
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом'},
    { text: [
      {text: 'м'},
      {text: 'а', style: 'bold'},
      {text: 'ре'}
    ] },
    { text: [
      {text: 'ˈ', style: 'bold'},
      {text: 'm'},
      {text: 'a', style: 'bold'},
      {text: 're'}
    ] },
    { text: 'mare', size: 20 },
    { text: 'море' },
    { text: [{text: 'коп'}, {text: 'и', style: 'bold'}, {text: 'л'}] },
    { text:  [ { text: 'ko' }, {text: 'ˈ', style: 'bold'}, {text: 'p'}, {text: 'i', style: 'bold'}, {text: 'l'} ] },
    { text: 'copil', size: 20 },
    { text: 'ребёнок'},
  ],
  [
    { text: 'Apple', style: 'bold', size: 26, gapTop: 10 },
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
      ],
      gapTop: 10
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
      ],
      gapBottom: 20
    },
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
        { text: 'Ssssssssssssssssssssssssssssssssssssssssssssssssssssss', size: 24, style: 'bold' },
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