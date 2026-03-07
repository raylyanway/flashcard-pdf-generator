import { Card } from '../types';

export const phoneticCards: Card[] = [
  [
    { text: 'Символ (ˈ) ставится перед ударным слогом', gapBottom: 5 },
    { text: 'море' },
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
    { text: 'mare', fontSize: 20, gapBottom: 5 },
    { text: 'ребёнок' },
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
  ],
  [
    { text: 'Символ (ˌ) ставится перед ударным слогом', gapBottom: 5 },
    { text: 'автобус' },
    {
      text: [
        { text: 'а', fontWeight: 'bold' },
        { text: 'утоб' },
        { text: 'у', fontWeight: 'bold' },
        { text: 'з' },
      ],
    },
    {
      text: [
        { text: 'ˌa', fontWeight: 'bold' },
        { text: 'w.to' },
        { text: 'ˈ', fontWeight: 'bold' },
        { text: 'b' },
        { text: 'u', fontWeight: 'bold' },
        { text: 'z' },
      ],
    },
    { text: 'autobuz', fontSize: 20, gapBottom: 5 },
    { text: 'Слабое ударение на первый слог и сильное на последний' },
  ],
  [
    { text: 'Символ (.) делит слог', gapBottom: 5 },
    { text: 'дом' },
    { text: 'касэ' },
    {
      text: [
        { text: 'ˈka' },
        { text: '.', fontWeight: 'bold' },
        { text: 'sə' },
      ],
    },
    { text: 'casă', fontSize: 20, gapBottom: 5 },
    { text: 'Символ (ʲ) смягчает согласное', gapBottom: 5 },
    { text: 'деревья' },
    {
      text: [{ text: 'по' }, { text: 'мь', fontWeight: 'bold' }, { text: 'и' }],
    },
    {
      text: [
        { text: 'ˈpo' },
        { text: 'mʲ', fontWeight: 'bold' },
        { text: 'i' },
      ],
    },
    { text: 'pomi', fontSize: 20 },
  ],
  [
    { text: 'Символ (k) это буквы (c,ch) звучит как (к)', gapBottom: 5 },
    { text: 'книга' },
    { text: [{ text: 'к', fontWeight: 'bold' }, { text: 'артэ' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'к', fontWeight: 'bold' },
        { text: 'ar.te' },
      ],
    },
    {
      text: [
        { text: 'c', fontWeight: 'bold', fontSize: 20 },
        { text: 'arte', fontSize: 20 },
      ],
      gapBottom: 5,
    },
    { text: 'химия' },
    { text: [{ text: 'к', fontWeight: 'bold' }, { text: 'имие' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'k', fontWeight: 'bold' },
        { text: 'i.mi.e' },
      ],
    },
    {
      text: [
        { text: 'ch', fontWeight: 'bold', fontSize: 20 },
        { text: 'imie', fontSize: 20 },
      ],
    },
  ],
  [
    {
      text: 'Символ (a) звучит как (а)',
      gapBottom: 5,
    },
    { text: 'кровать' },
    { text: [{ text: 'п' }, { text: 'а', fontWeight: 'bold' }, { text: 'т' }] },
    { text: [{ text: 'p' }, { text: 'a', fontWeight: 'bold' }, { text: 't' }] },
    { text: 'pat', fontSize: 20, gapBottom: 5 },
    {
      text: 'Символ (i) звучит как (и)',
      gapBottom: 5,
    },
    { text: 'мой/мне' },
    { text: [{ text: 'м' }, { text: 'и', fontWeight: 'bold' }] },
    { text: [{ text: 'm' }, { text: 'i', fontWeight: 'bold' }] },
    { text: 'mi', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (f) звучит как (ф)',
      gapBottom: 5,
    },
    { text: 'огонь' },
    { text: [{ text: 'ф', fontWeight: 'bold' }, { text: 'ок' }] },
    { text: [{ text: 'f', fontWeight: 'bold' }, { text: 'ok' }] },
    { text: 'foc', fontSize: 20, gapBottom: 5 },
    {
      text: 'Символ (v) звучит как (в)',
      gapBottom: 5,
    },
    { text: 'вино' },
    { text: [{ text: 'в', fontWeight: 'bold' }, { text: 'ин' }] },
    { text: [{ text: 'v', fontWeight: 'bold' }, { text: 'in' }] },
    { text: 'vin', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (u) звучит как (у)',
      gapBottom: 5,
    },
    { text: 'волк' },
    {
      text: [{ text: 'ль' }, { text: 'у', fontWeight: 'bold' }, { text: 'п' }],
    },
    { text: [{ text: 'l' }, { text: 'u', fontWeight: 'bold' }, { text: 'p' }] },
    { text: 'lup', fontSize: 20, gapBottom: 5 },
    {
      text: 'Символ (s) звучит как (с)',
      gapBottom: 5,
    },
    { text: 'солнце' },
    { text: [{ text: 'с', fontWeight: 'bold' }, { text: 'оаре' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 's', fontWeight: 'bold' },
        { text: 'o̯a.re' },
      ],
    },
    { text: 'soare', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ɨ) это буквы (â,î) звучит как (ы)',
      gapBottom: 5,
    },
    { text: 'ангел' },
    {
      text: [{ text: 'ы', fontWeight: 'bold' }, { text: 'нджер' }],
    },
    {
      text: [
        { text: 'ˈ' },
        { text: 'ɨ', fontWeight: 'bold' },
        { text: 'n.d͡ʒer' },
      ],
    },
    {
      text: [{ text: 'î', fontWeight: 'bold' }, { text: 'nger' }],
      fontSize: 20,
      gapBottom: 5,
    },
    {
      text: 'собака',
    },
    {
      text: [{ text: 'к' }, { text: 'ы', fontWeight: 'bold' }, { text: 'йне' }],
    },
    {
      text: [
        { text: 'ˈk' },
        { text: 'ɨ', fontWeight: 'bold' },
        { text: 'j.ne' },
      ],
    },
    {
      text: [{ text: 'c' }, { text: 'â', fontWeight: 'bold' }, { text: 'ine' }],
      fontSize: 20,
    },
  ],
  [
    {
      text: 'Символы (e̯o) это буквы (eo) звучит как (эо)',
      gapBottom: 5,
    },
    { text: 'теорема' },
    {
      text: [
        { text: 'т' },
        { text: 'эо', fontWeight: 'bold' },
        { text: 'рэма' },
      ],
    },
    {
      text: [
        { text: 't' },
        { text: 'e̯o', fontWeight: 'bold' },
        { text: 'ˈre.ma' },
      ],
    },
    {
      text: 'teorema',
      fontSize: 20,
    },
  ],
];
