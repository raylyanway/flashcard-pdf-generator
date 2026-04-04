import { Card } from '../../../types';

// Definite and indefinite articles (un/o, -ul/-a)
export const articles: Card[] = [
  [
    { text: 'Неопределённый артикль', gapBottom: 5 },
    { text: 'мужской род' },
    { text: 'ун' },
    { text: 'женский род' },
    { text: 'о' },
  ],

  [
    { text: 'Неопределённый артикль', gapBottom: 5 },
    { text: 'один мальчик' },
    { text: 'ун бэят' },
    { text: 'un bəˈjat' },
    { text: 'un băiat', fontSize: 20 },
  ],

  [
    { text: 'Неопределённый артикль', gapBottom: 5 },
    { text: 'одна девочка' },
    { text: 'о фатэ' },
    { text: 'o ˈfa.tə' },
    { text: 'o fată', fontSize: 20 },
  ],

  [
    { text: 'Определённый артикль', gapBottom: 5 },
    { text: 'присоединяется в конце слова' },
    { text: 'мужской род → -ул' },
    { text: 'женский род → -а' },
  ],

  [
    { text: 'Определённый артикль (мужской род)', gapBottom: 5 },
    { text: 'мальчик → the boy' },
    { text: 'бэятул' },
    { text: 'bəˈja.tul' },
    { text: 'băiatul', fontSize: 20 },
  ],

  [
    { text: 'Определённый артикль (женский род)', gapBottom: 5 },
    { text: 'девочка → the girl' },
    { text: 'фата' },
    { text: 'ˈfa.ta' },
    { text: 'fata', fontSize: 20 },
  ],

  [
    { text: 'Неопределённый → Определённый', gapBottom: 5 },
    { text: 'ун бэят → бэятул' },
    { text: 'о фатэ → фата' },
  ],

  [
    { text: 'Примеры', gapBottom: 5 },
    { text: 'один дом' },
    { text: 'ун касэ' },
    { text: 'un ˈka.sə' },
    { text: 'un casă', fontSize: 20, gapBottom: 5 },

    { text: 'дом (определённый)' },
    { text: 'каса' },
    { text: 'ˈka.sa' },
    { text: 'casa', fontSize: 20 },
  ],

  [
    { text: 'Примеры', gapBottom: 5 },
    { text: 'одна книга' },
    { text: 'о карте' },
    { text: 'o ˈkar.te' },
    { text: 'o carte', fontSize: 20, gapBottom: 5 },

    { text: 'книга (определённая)' },
    { text: 'картя' },
    { text: 'ˈkar.te.a' },
    { text: 'cartea', fontSize: 20 },
  ],

  [
    { text: 'Важно!', gapBottom: 5 },
    { text: 'В румынском артикль стоит после существительного' },
    { text: 'ун бэят – бэятул' },
    { text: 'о фатэ – фата' },
  ],
];
