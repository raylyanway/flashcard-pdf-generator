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
  ],
  [
    { text: 'Символ (ʲ) смягчает согласное', gapBottom: 5 },
    { text: 'плодовые деревья' },
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
  ],
  [
    {
      text: 'Символ (i) звучит как (и)',
      gapBottom: 5,
    },
    { text: 'мне' },
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
  ],
  [
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
  ],
  [
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
      gapBottom: 5,
    },
  ],
  [
    {
      text: 'Символы (o̯a) это буквы (oa) звучит как (оа)',
      gapBottom: 5,
    },
    { text: 'люди' },
    {
      text: [{ text: 'оа', fontWeight: 'bold' }, { text: 'мень' }],
    },
    {
      text: [
        { text: 'ˈ' },
        { text: 'o̯a', fontWeight: 'bold' },
        { text: 'menʲ' },
      ],
    },
    { text: 'oameni', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (e) звучит как (э)',
      gapBottom: 5,
    },
    { text: 'кофе' },
    {
      text: [{ text: 'к' }, { text: 'э', fontWeight: 'bold' }, { text: 'фе' }],
    },
    {
      text: [{ text: 'k' }, { text: 'e', fontWeight: 'bold' }, { text: 'fe' }],
    },
    { text: 'cafe', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (o) звучит как (о)', gapBottom: 5 },
    { text: 'нос' },
    { text: [{ text: 'н' }, { text: 'о', fontWeight: 'bold' }, { text: 'с' }] },
    { text: [{ text: 'n' }, { text: 'o', fontWeight: 'bold' }, { text: 's' }] },
    { text: 'nos', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ə) это буква (ă) звучит как (э)',
      gapBottom: 5,
    },
    { text: 'мальчик' },
    {
      text: [{ text: 'б' }, { text: 'э', fontWeight: 'bold' }, { text: 'ят' }],
    },
    {
      text: [
        { text: 'b' },
        { text: 'ə', fontWeight: 'bold' },
        { text: 'ˈjat' },
      ],
    },
    { text: 'băiat', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (b) звучит как (б)', gapBottom: 5 },
    { text: 'хороший' },
    { text: [{ text: 'б', fontWeight: 'bold' }, { text: 'ун' }] },
    { text: [{ text: 'b', fontWeight: 'bold' }, { text: 'un' }] },
    { text: 'bun', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (d) звучит как (д)',
      gapBottom: 5,
    },
    { text: 'два' },
    { text: [{ text: 'д', fontWeight: 'bold' }, { text: 'ой' }] },
    { text: [{ text: 'd', fontWeight: 'bold' }, { text: 'oj' }] },
    { text: 'doi', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (g) звучит как (г)', gapBottom: 5 },
    { text: 'рот' },
    { text: [{ text: 'г', fontWeight: 'bold' }, { text: 'урэ' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'g', fontWeight: 'bold' },
        { text: 'u.rə' },
      ],
    },
    { text: 'gură', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (h) звучит как (х)',
      gapBottom: 5,
    },
    { text: 'пальто' },
    { text: [{ text: 'х', fontWeight: 'bold' }, { text: 'айнэ' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'h', fontWeight: 'bold' },
        { text: 'ai.nə' },
      ],
    },
    { text: 'haină', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (j) звучит как (й)', gapBottom: 5 },
    { text: 'они' },
    { text: [{ text: 'й', fontWeight: 'bold' }, { text: 'эй' }] },
    { text: [{ text: 'j', fontWeight: 'bold' }, { text: 'ej' }] },
    { text: 'ei', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (l) звучит как (л)',
      gapBottom: 5,
    },
    { text: 'луна' },
    { text: [{ text: 'л', fontWeight: 'bold' }, { text: 'унэ' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'l', fontWeight: 'bold' },
        { text: 'u.nə' },
      ],
    },
    { text: 'lună', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (m) звучит как (м)',
      gapBottom: 5,
    },
    { text: 'мать' },
    {
      text: [
        { text: 'м', fontWeight: 'bold' },
        { text: 'а' },
        { text: 'м', fontWeight: 'bold' },
        { text: 'э' },
      ],
    },
    {
      text: [
        { text: 'm', fontWeight: 'bold' },
        { text: 'a.' },
        { text: 'm', fontWeight: 'bold' },
        { text: 'ə' },
      ],
    },
    { text: 'mamă', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (n) звучит как (н)',
      gapBottom: 5,
    },
    { text: 'облако' },
    { text: [{ text: 'н', fontWeight: 'bold' }, { text: 'ор' }] },
    { text: [{ text: 'n', fontWeight: 'bold' }, { text: 'or' }] },
    { text: 'nor', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (p) звучит как (п)', gapBottom: 5 },
    { text: 'хлеб' },
    { text: [{ text: 'п', fontWeight: 'bold' }, { text: 'ыне' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'p', fontWeight: 'bold' },
        { text: 'ɨ.ne' },
      ],
    },
    { text: 'pâine', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (r) звучит как (р)',
      gapBottom: 5,
    },
    { text: 'река' },
    { text: [{ text: 'р', fontWeight: 'bold' }, { text: 'ыу' }] },
    { text: [{ text: 'r', fontWeight: 'bold' }, { text: 'ɨw' }] },
    { text: 'râu', fontSize: 20, gapBottom: 5 },
  ],
  [
    { text: 'Символ (t) звучит как (т)', gapBottom: 5 },
    { text: 'три' },
    { text: [{ text: 'т', fontWeight: 'bold' }, { text: 'рей' }] },
    { text: [{ text: 't', fontWeight: 'bold' }, { text: 'rej' }] },
    { text: 'trei', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (z) звучит как (з)',
      gapBottom: 5,
    },
    { text: 'день' },
    { text: [{ text: 'з', fontWeight: 'bold' }, { text: 'и' }] },
    { text: [{ text: 'z', fontWeight: 'bold' }, { text: 'i' }] },
    { text: 'zi', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (ʃ) это буква (ș) звучит как (ш)',
      gapBottom: 5,
    },
    { text: 'шесть' },
    { text: [{ text: 'ш', fontWeight: 'bold' }, { text: 'асе' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 'ʃ', fontWeight: 'bold' },
        { text: 'a.se' },
      ],
    },
    { text: 'șase', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ʒ) это буква (j) звучит как (ж)',
      gapBottom: 5,
    },
    { text: 'игра' },
    { text: [{ text: 'ж', fontWeight: 'bold' }, { text: 'ок' }] },
    { text: [{ text: 'ʒ', fontWeight: 'bold' }, { text: 'ok' }] },
    { text: 'joc', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (t͡s) это буква (ț) звучит как (ц)',
      gapBottom: 5,
    },
    { text: 'страна' },
    { text: [{ text: 'ц', fontWeight: 'bold' }, { text: 'арэ' }] },
    {
      text: [
        { text: 'ˈ' },
        { text: 't͡s', fontWeight: 'bold' },
        { text: 'a.rə' },
      ],
    },
    { text: 'țară', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (t͡ʃ) это буква (c) звучит как (ч)',
      gapBottom: 5,
    },
    { text: 'небо' },
    { text: [{ text: 'ч', fontWeight: 'bold' }, { text: 'ер' }] },
    { text: [{ text: 't͡ʃ', fontWeight: 'bold' }, { text: 'er' }] },
    { text: 'cer', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (d͡ʒ) это буква (g) звучит как (дж)',
      gapBottom: 5,
    },
    { text: 'мороз' },
    { text: [{ text: 'дж', fontWeight: 'bold' }, { text: 'ер' }] },
    { text: [{ text: 'd͡ʒ', fontWeight: 'bold' }, { text: 'er' }] },
    { text: 'ger', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ŋ) звучит как (нг)',
      gapBottom: 5,
    },
    { text: 'кемпинг' },
    {
      text: [{ text: 'кампи' }, { text: 'нг', fontWeight: 'bold' }],
    },
    {
      text: [{ text: 'ˈkampi' }, { text: 'ŋ', fontWeight: 'bold' }],
    },
    { text: 'camping', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (ɲ) звучит как (нь)',
      gapBottom: 5,
    },
    { text: 'компаньон' },
    {
      text: [
        { text: 'компа' },
        { text: 'нь', fontWeight: 'bold' },
        { text: 'он' },
      ],
    },
    {
      text: [
        { text: 'kom.pa' },
        { text: 'ɲ', fontWeight: 'bold' },
        { text: 'on' },
      ],
    },
    { text: 'companion', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ɑ̃) это носовой звук (ан)',
      gapBottom: 5,
    },
    { text: 'жанр' },
    {
      text: [{ text: 'ж' }, { text: 'ан', fontWeight: 'bold' }, { text: 'р' }],
    },
    {
      text: [{ text: 'ʒ' }, { text: 'ɑ̃', fontWeight: 'bold' }, { text: 'r' }],
    },
    { text: 'genre', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (ɛ̃) это носовой звук (эн)',
      gapBottom: 5,
    },
    { text: 'тренд' },
    {
      text: [{ text: 'тр' }, { text: 'эн', fontWeight: 'bold' }, { text: 'д' }],
    },
    {
      text: [{ text: 'tr' }, { text: 'ɛ̃', fontWeight: 'bold' }, { text: 'd' }],
    },
    { text: 'trend', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (ø) звучит примерно как (ё)',
      gapBottom: 5,
    },
    { text: 'шофёр' },
    {
      text: [{ text: 'шоф' }, { text: 'ё', fontWeight: 'bold' }, { text: 'р' }],
    },
    {
      text: [{ text: 'ʃof' }, { text: 'ø', fontWeight: 'bold' }, { text: 'r' }],
    },
    { text: 'șofer', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символ (y) звучит как французское (ю)',
      gapBottom: 5,
    },
    { text: 'меню' },
    {
      text: [{ text: 'мен' }, { text: 'ю', fontWeight: 'bold' }],
    },
    {
      text: [{ text: 'men' }, { text: 'y', fontWeight: 'bold' }],
    },
    { text: 'meniu', fontSize: 20 },
  ],
  [
    {
      text: 'Символ (w) звучит как (в)',
      gapBottom: 5,
    },
    { text: 'весна' },
    {
      text: [{ text: 'в', fontWeight: 'bold' }, { text: 'есна' }],
    },
    {
      text: [{ text: 'w', fontWeight: 'bold' }, { text: 'es.na' }],
    },
    { text: 'wesna', fontSize: 20, gapBottom: 5 },
  ],
  [
    {
      text: 'Символы (e̯a) это буквы (ea) звучит как (я)',
      gapBottom: 5,
    },
    { text: 'пьёт' },
    {
      text: [{ text: 'б' }, { text: 'я', fontWeight: 'bold' }],
    },
    {
      text: [{ text: 'b' }, { text: 'e̯a', fontWeight: 'bold' }],
    },
    { text: 'bea', fontSize: 20 },
  ],
];
