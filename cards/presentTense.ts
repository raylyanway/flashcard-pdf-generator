import { Card } from '../types';

export const presentTense: Card[] = [
  [
    {
      text: 'Настоящее время: окончание глагола показывает лицо',
      gapBottom: 5,
    },
    { text: 'я работаю' },
    { text: 'лукрЭз' },
    {
      text: [{ text: 'lucr' }, { text: 'ez', fontWeight: 'bold' }],
    },
    {
      text: [
        { text: 'lucr' },
        { text: 'ez', fontWeight: 'bold', fontSize: 20 },
      ],
      gapBottom: 5,
    },

    { text: 'ты работаешь' },
    { text: 'лукрЭзь' },
    {
      text: [{ text: 'lucr' }, { text: 'ezi', fontWeight: 'bold' }],
    },
    {
      text: [
        { text: 'lucr' },
        { text: 'ezi', fontWeight: 'bold', fontSize: 20 },
      ],
    },
  ],

  [
    {
      text: 'Местоимение можно опустить — окончание уже показывает лицо',
      gapBottom: 5,
    },
    { text: 'я читаю книгу' },
    { text: 'читеск картеа' },
    {
      text: [
        { text: 'cit' },
        { text: 'esc', fontWeight: 'bold' },
        { text: ' cartea' },
      ],
    },
    {
      text: [
        { text: 'cit' },
        { text: 'esc', fontWeight: 'bold', fontSize: 20 },
        { text: ' cartea', fontSize: 20 },
      ],
      gapBottom: 5,
    },

    { text: 'иду домой' },
    { text: 'мерг акаса' },
    {
      text: [{ text: 'merg', fontWeight: 'bold' }, { text: ' acasă' }],
    },
    { text: 'merg acasă', fontSize: 20 },
  ],

  [
    {
      text: 'Структура предложения: Подлежащее + глагол + объект',
      gapBottom: 5,
    },
    { text: 'я читаю книгу' },
    { text: 'еу читеск картеа' },
    {
      text: [
        { text: 'eu ' },
        { text: 'citesc', fontWeight: 'bold' },
        { text: ' cartea' },
      ],
    },
    { text: 'eu citesc cartea', fontSize: 20, gapBottom: 5 },

    { text: 'она пьёт воду' },
    { text: 'я беа апэ' },
    {
      text: [
        { text: 'ea ' },
        { text: 'bea', fontWeight: 'bold' },
        { text: ' apă' },
      ],
    },
    { text: 'ea bea apă', fontSize: 20 },
  ],

  [
    {
      text: 'Можно добавить место после глагола',
      gapBottom: 5,
    },
    { text: 'я работаю дома' },
    { text: 'лукрЭз акаса' },
    {
      text: [{ text: 'lucrez', fontWeight: 'bold' }, { text: ' acasă' }],
    },
    { text: 'lucrez acasă', fontSize: 20, gapBottom: 5 },

    { text: 'мы идём в парк' },
    { text: 'мерджем ла парк' },
    {
      text: [{ text: 'mergem', fontWeight: 'bold' }, { text: ' la parc' }],
    },
    { text: 'mergem la parc', fontSize: 20 },
  ],
];
