import { Card } from '../types';

export const selfIntroRulesA1: Card[] = [
  [
    {
      text: 'Конструкция "меня зовут": mă + cheamă',
      gapBottom: 5,
    },
    { text: 'меня зовут Илия' },
    { text: 'мэ кямэ илия' },
    {
      text: [
        { text: 'mă ', fontWeight: 'bold' },
        { text: 'cheamă ', fontWeight: 'bold' },
        { text: 'Ilia' },
      ],
    },
    { text: 'mă cheamă Ilia', fontSize: 20 },
  ],

  [
    {
      text: 'Структура предложения: Подлежащее + глагол',
      gapBottom: 5,
    },
    { text: 'я работаю' },
    { text: 'йеу лукрез' },
    {
      text: [
        { text: 'eu ', fontWeight: 'bold' },
        { text: 'lucrez', fontWeight: 'bold' },
      ],
    },
    { text: 'eu lucrez', fontSize: 20 },
  ],

  [
    {
      text: 'Место: используется предлог "în"',
      gapBottom: 5,
    },
    { text: 'я живу в Америке' },
    { text: 'йеу трэеск ын америка' },
    {
      text: [
        { text: 'eu trăiesc ' },
        { text: 'în', fontWeight: 'bold' },
        { text: ' America' },
      ],
    },
    { text: 'eu trăiesc în America', fontSize: 20 },
  ],

  [
    {
      text: 'Язык после глагола: vorbesc + язык',
      gapBottom: 5,
    },
    { text: 'я говорю по-русски' },
    { text: 'йеу ворбеск руштэ' },
    {
      text: [
        { text: 'eu ' },
        { text: 'vorbesc', fontWeight: 'bold' },
        { text: ' rusă' },
      ],
    },
    { text: 'eu vorbesc rusă', fontSize: 20 },
  ],

  [
    {
      text: 'Если два глагола — используется "să"',
      gapBottom: 5,
    },
    { text: 'я хочу говорить' },
    { text: 'йеу вреау сэ ворбеск' },
    {
      text: [
        { text: 'eu vreau ' },
        { text: 'să', fontWeight: 'bold' },
        { text: ' vorbesc' },
      ],
    },
    { text: 'eu vreau să vorbesc', fontSize: 20 },
  ],
];
