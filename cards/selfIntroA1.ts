import { Card } from '../types';

export const selfIntroA1: Card[] = [
  [
    { text: 'Меня зовут Илия.' },
    { text: 'Мэ нумеск И́лия.' },
    { text: 'mə nuˈmesk iˈli.a' },
    { text: 'Mă numesc Ilia.', fontSize: 20 },
  ],
  [
    { text: 'Мне двадцать пять лет.' },
    { text: 'Эу ам доуэзе́чь ши чи́нчь де ань.' },
    { text: 'ew am ˈdo.wə.zet͡ʃ ʃi ˈt͡ʃint͡ʃ de ˈanʲ' },
    { text: 'Eu am douăzeci și cinci de ani.', fontSize: 20 },
  ],
  [
    { text: 'Я из России.' },
    { text: 'Эу сунт дин Руси́я.' },
    { text: 'ew sunt din ruˈsi.a' },
    { text: 'Eu sunt din Rusia.', fontSize: 20 },
  ],
  [
    { text: 'Я живу в Лос-Анджелесе.' },
    { text: 'Эу локуи́еск ын Лос Анджелес.' },
    { text: 'ew loˈkujesk ɨn los anˈdʒeles' },
    { text: 'Eu locuiesc în Los Angeles.', fontSize: 20 },
  ],
  [
    { text: 'Я студент.' },
    { text: 'Эу сунт студэ́нт.' },
    { text: 'ew sunt stuˈdent' },
    { text: 'Eu sunt student.', fontSize: 20 },
  ],
  [
    { text: 'Я говорю по-румынски.' },
    { text: 'Эу ворбе́ск ромы́нэ.' },
    { text: 'ew vorˈbesk roˈmɨ.nə' },
    { text: 'Eu vorbesc română.', fontSize: 20 },
  ],
  [
    { text: 'Я изучаю румынский.' },
    { text: 'Эу ынвэ́ц ромы́нэ.' },
    { text: 'ew ɨnˈvəts roˈmɨ.nə' },
    { text: 'Eu învăţ română.', fontSize: 20 },
  ],
  [
    { text: 'Я люблю музыку.' },
    { text: 'Эу иубе́ск му́зика.' },
    { text: 'ew juˈbesk ˈmuzi.ka' },
    { text: 'Eu iubesc muzica.', fontSize: 20 },
  ],
  [
    { text: 'Я счастлив.' },
    { text: 'Эу сунт феричи́т.' },
    { text: 'ew sunt feˈri.t͡ʃit' },
    { text: 'Eu sunt fericit.', fontSize: 20 },
  ],
];

export const selfIntroGrammarA1: Card[] = [
  [
    {
      text: [
        { text: 'Mă numesc ' },
        { text: '+ имя', fontWeight: 'bold' },
        {
          text: ' (a se numi – возвратный глагол) Eu sunt + имя – не используется',
        },
      ],
      gapBottom: 5,
    },
    { text: 'Меня зовут Илия.' },
    { text: 'Мэ нумеск И́лия.' },
    { text: 'mə nuˈmesk iˈli.a' },
    { text: 'Mă numesc Ilia.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu am ' },
        { text: '+ число + de ani', fontWeight: 'bold' },
        { text: ' (am = a avea – иметь) de – обязательный предлог' },
      ],
      gapBottom: 5,
    },
    { text: 'Мне двадцать пять лет.' },
    { text: 'Эу ам доуэзе́чь ши чи́нчь де ань.' },
    { text: 'ew am ˈdo.wə.zet͡ʃ ʃi ˈt͡ʃint͡ʃ de ˈanʲ' },
    { text: 'Eu am douăzeci și cinci de ani.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu sunt din ' },
        { text: '+ страна', fontWeight: 'bold' },
        { text: ' (din = из)' },
      ],
      gapBottom: 5,
    },
    { text: 'Я из России.' },
    { text: 'Эу сунт дин Руси́я.' },
    { text: 'ew sunt din ruˈsi.a' },
    { text: 'Eu sunt din Rusia.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu locuiesc în ' },
        { text: '+ город / страна', fontWeight: 'bold' },
        { text: ' (în = в) a locui – жить' },
      ],
      gapBottom: 5,
    },
    { text: 'Я живу в Лос-Анджелесе.' },
    { text: 'Эу локуи́еск ын Лос Анджелес.' },
    { text: 'ew loˈkujesk ɨn los anˈdʒeles' },
    { text: 'Eu locuiesc în Los Angeles.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu sunt ' },
        { text: '+ профессия / национальность', fontWeight: 'bold' },
        { text: ' (без артикля)' },
      ],
      gapBottom: 5,
    },
    { text: 'Я студент.' },
    { text: 'Эу сунт студэ́нт.' },
    { text: 'ew sunt stuˈdent' },
    { text: 'Eu sunt student.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu vorbesc ' },
        { text: '+ язык (без артикля)', fontWeight: 'bold' },
        { text: ' a vorbi – говорить' },
      ],
      gapBottom: 5,
    },
    { text: 'Я говорю по-румынски.' },
    { text: 'Эу ворбе́ск ромы́нэ.' },
    { text: 'ew vorˈbesk roˈmɨ.nə' },
    { text: 'Eu vorbesc română.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu învăţ ' },
        { text: '+ что изучаю', fontWeight: 'bold' },
        { text: ' (прямой объект) a învăța – учить' },
      ],
      gapBottom: 5,
    },
    { text: 'Я изучаю румынский.' },
    { text: 'Эу ынвэ́ц ромы́нэ.' },
    { text: 'ew ɨnˈvəts roˈmɨ.nə' },
    { text: 'Eu învăţ română.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu iubesc ' },
        { text: '+ что нравится', fontWeight: 'bold' },
        { text: ' (прямой объект) a iubi – любить' },
      ],
      gapBottom: 5,
    },
    { text: 'Я люблю музыку.' },
    { text: 'Эу иубе́ск му́зика.' },
    { text: 'ew juˈbesk ˈmuzi.ka' },
    { text: 'Eu iubesc muzica.', fontSize: 20 },
  ],
  [
    {
      text: [
        { text: 'Eu sunt ' },
        { text: '+ прилагательное', fontWeight: 'bold' },
        { text: ' (fericit м.р. / fericită ж.р.)' },
      ],
      gapBottom: 5,
    },
    { text: 'Я счастлив.' },
    { text: 'Эу сунт феричи́т.' },
    { text: 'ew sunt feˈri.t͡ʃit' },
    { text: 'Eu sunt fericit.', fontSize: 20 },
  ],
];

export const selfIntroWordsA1: Card[] = [
  [
    { text: 'студент' },
    { text: 'студэ́нт' },
    { text: 'stuˈdent' },
    { text: 'student', fontSize: 20 },
  ],
  [
    { text: 'годы' },
    { text: 'ань' },
    { text: 'anʲ' },
    { text: 'ani', fontSize: 20 },
  ],
  [
    { text: 'из' },
    { text: 'дин' },
    { text: 'din' },
    { text: 'din', fontSize: 20 },
  ],
  [
    { text: 'живу' },
    { text: 'локуи́еск' },
    { text: 'loˈkujesk' },
    { text: 'locuiesc', fontSize: 20 },
  ],
  [
    { text: 'говорю' },
    { text: 'ворбе́ск' },
    { text: 'vorˈbesk' },
    { text: 'vorbesc', fontSize: 20 },
  ],
  [
    { text: 'изучаю' },
    { text: 'ынвэ́ц' },
    { text: 'ɨnˈvəts' },
    { text: 'învăţ', fontSize: 20 },
  ],
  [
    { text: 'люблю' },
    { text: 'иубе́ск' },
    { text: 'juˈbesk' },
    { text: 'iubesc', fontSize: 20 },
  ],
  [
    { text: 'музыка' },
    { text: 'му́зика' },
    { text: 'ˈmuzi.ka' },
    { text: 'muzica', fontSize: 20 },
  ],
  [
    { text: 'счастлив' },
    { text: 'феричи́т' },
    { text: 'feˈri.t͡ʃit' },
    { text: 'fericit', fontSize: 20 },
  ],
];
