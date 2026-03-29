import { Card } from '../types';

export const alphabet: Card[] = [
  // === Title card ===
  [
    { text: 'Румынский алфавит (Alfabetul românesc)', pinTop: true },
    { text: '' },
    { text: '' },
    { text: '26 букв + 5 диакритик', fontSize: 18 },
    { text: 'ă â î ș ț', fontSize: 22 },
  ],

  // === Vowels ===
  [{ text: 'A a' }, { text: 'а' }, { text: 'a' }, { text: 'a', fontSize: 22 }],
  [
    { text: 'Ă ă (краткое а)' },
    { text: 'э' },
    { text: 'ə' },
    { text: 'ă', fontSize: 22 },
  ],
  [
    { text: 'Â â / Î î (ы)' },
    { text: 'ы' },
    { text: 'ɨ' },
    { text: 'â / î', fontSize: 22 },
  ],
  [{ text: 'E e' }, { text: 'э' }, { text: 'e' }, { text: 'e', fontSize: 22 }],
  [{ text: 'I i' }, { text: 'и' }, { text: 'i' }, { text: 'i', fontSize: 22 }],
  [{ text: 'O o' }, { text: 'о' }, { text: 'o' }, { text: 'o', fontSize: 22 }],
  [{ text: 'U u' }, { text: 'у' }, { text: 'u' }, { text: 'u', fontSize: 22 }],

  // === Consonants ===
  [{ text: 'B b' }, { text: 'б' }, { text: 'b' }, { text: 'b', fontSize: 22 }],
  [
    { text: 'C c (перед a,o,u = к)' },
    { text: 'к' },
    { text: 'k' },
    { text: 'c', fontSize: 22 },
  ],
  [
    { text: 'C c (перед e,i = ч)' },
    { text: 'ч' },
    { text: 't͡ʃ' },
    { text: 'c', fontSize: 22 },
  ],
  [{ text: 'D d' }, { text: 'д' }, { text: 'd' }, { text: 'd', fontSize: 22 }],
  [{ text: 'F f' }, { text: 'ф' }, { text: 'f' }, { text: 'f', fontSize: 22 }],
  [
    { text: 'G g (перед a,o,u = г)' },
    { text: 'г' },
    { text: 'ɡ' },
    { text: 'g', fontSize: 22 },
  ],
  [
    { text: 'G g (перед e,i = дж)' },
    { text: 'дж' },
    { text: 'd͡ʒ' },
    { text: 'g', fontSize: 22 },
  ],
  [{ text: 'H h' }, { text: 'х' }, { text: 'h' }, { text: 'h', fontSize: 22 }],
  [{ text: 'J j' }, { text: 'ж' }, { text: 'ʒ' }, { text: 'j', fontSize: 22 }],
  [
    { text: 'K k (редко, в заимствованиях)' },
    { text: 'к' },
    { text: 'k' },
    { text: 'k', fontSize: 22 },
  ],
  [{ text: 'L l' }, { text: 'л' }, { text: 'l' }, { text: 'l', fontSize: 22 }],
  [{ text: 'M m' }, { text: 'м' }, { text: 'm' }, { text: 'm', fontSize: 22 }],
  [{ text: 'N n' }, { text: 'н' }, { text: 'n' }, { text: 'n', fontSize: 22 }],
  [{ text: 'P p' }, { text: 'п' }, { text: 'p' }, { text: 'p', fontSize: 22 }],
  [
    { text: 'R r (вибрирующее)' },
    { text: 'р' },
    { text: 'r' },
    { text: 'r', fontSize: 22 },
  ],
  [{ text: 'S s' }, { text: 'с' }, { text: 's' }, { text: 's', fontSize: 22 }],
  [{ text: 'Ș ș' }, { text: 'ш' }, { text: 'ʃ' }, { text: 'ș', fontSize: 22 }],
  [{ text: 'T t' }, { text: 'т' }, { text: 't' }, { text: 't', fontSize: 22 }],
  [{ text: 'Ț ț' }, { text: 'ц' }, { text: 't͡s' }, { text: 'ț', fontSize: 22 }],
  [{ text: 'V v' }, { text: 'в' }, { text: 'v' }, { text: 'v', fontSize: 22 }],
  [
    { text: 'W w (только в заимствованиях)' },
    { text: 'в' },
    { text: 'w' },
    { text: 'w', fontSize: 22 },
  ],
  [
    { text: 'X x' },
    { text: 'кс' },
    { text: 'ks' },
    { text: 'x', fontSize: 22 },
  ],
  [
    { text: 'Y y (редко)' },
    { text: 'и' },
    { text: 'i' },
    { text: 'y', fontSize: 22 },
  ],
  [{ text: 'Z z' }, { text: 'з' }, { text: 'z' }, { text: 'z', fontSize: 22 }],

  // === Special combinations & notes ===
  [
    { text: 'CH ch = к' },
    { text: 'к' },
    { text: 'k' },
    { text: 'ch', fontSize: 22 },
  ],
  [
    { text: 'GH gh = г' },
    { text: 'г' },
    { text: 'ɡ' },
    { text: 'gh', fontSize: 22 },
  ],
  [
    { text: 'ă = краткое э (как в «мальчик»)' },
    { text: 'бэят' },
    { text: 'bəˈjat' },
    { text: 'băiat', fontSize: 20 },
  ],
  [
    { text: 'â / î = ы (как в «мы»)' },
    { text: 'рыу' },
    { text: 'rɨw' },
    { text: 'râu', fontSize: 20 },
  ],
  [
    { text: 'ș = ш' },
    { text: 'ша́се' },
    { text: 'ˈʃa.se' },
    { text: 'șase', fontSize: 20 },
  ],
  [
    { text: 'ț = ц' },
    { text: 'ца́рэ' },
    { text: 'ˈt͡sa.rə' },
    { text: 'țară', fontSize: 20 },
  ],
];

export const grammarA1: Card[] = [
  // === SUBJECT PRONOUNS (8 cards) ===
  [{ text: 'Я' }, { text: 'эу' }, { text: 'ew' }, { text: 'eu', fontSize: 20 }],
  [
    { text: 'Ты' },
    { text: 'ту' },
    { text: 'tu' },
    { text: 'tu', fontSize: 20 },
  ],
  [
    { text: 'Он' },
    { text: 'эл' },
    { text: 'jel' },
    { text: 'el', fontSize: 20 },
  ],
  [
    { text: 'Она' },
    { text: 'эа' },
    { text: 'je̯a' },
    { text: 'ea', fontSize: 20 },
  ],
  [
    { text: 'Мы' },
    { text: 'ной' },
    { text: 'noj' },
    { text: 'noi', fontSize: 20 },
  ],
  [
    { text: 'Вы' },
    { text: 'вой' },
    { text: 'voj' },
    { text: 'voi', fontSize: 20 },
  ],
  [
    { text: 'Они (муж./смеш.)' },
    { text: 'эй' },
    { text: 'ej' },
    { text: 'ei', fontSize: 20 },
  ],
  [
    { text: 'Они (жен.)' },
    { text: 'эле' },
    { text: 'ˈe.le' },
    { text: 'ele', fontSize: 20 },
  ],

  // === ГЛАГОЛ "a fi" (to be) – 6 cards ===
  [
    { text: 'Я есть' },
    { text: 'эу сунт' },
    { text: 'ew sunt' },
    { text: 'Eu sunt.', fontSize: 20 },
  ],
  [
    { text: 'Ты есть' },
    { text: 'ту э́шть' },
    { text: 'tu ˈeʃtʲ' },
    { text: 'Tu ești.', fontSize: 20 },
  ],
  [
    { text: 'Он/она есть' },
    { text: 'эл/эа э́сте' },
    { text: 'jel/je̯a ˈes.te' },
    { text: 'El/ea este.', fontSize: 20 },
  ],
  [
    { text: 'Мы есть' },
    { text: 'ной су́нтем' },
    { text: 'noj ˈsun.tem' },
    { text: 'Noi suntem.', fontSize: 20 },
  ],
  [
    { text: 'Вы есть' },
    { text: 'вой сунте́ць' },
    { text: 'voj sunˈte.tsʲ' },
    { text: 'Voi sunteți.', fontSize: 20 },
  ],
  [
    { text: 'Они есть' },
    { text: 'эй/эле сунт' },
    { text: 'ej/e.le sunt' },
    { text: 'Ei/ele sunt.', fontSize: 20 },
  ],

  // === ГЛАГОЛ "a avea" (to have) – 4 cards ===
  [
    { text: 'Я имею' },
    { text: 'эу ам' },
    { text: 'ew am' },
    { text: 'Eu am.', fontSize: 20 },
  ],
  [
    { text: 'Ты имеешь' },
    { text: 'ту ай' },
    { text: 'tu aj' },
    { text: 'Tu ai.', fontSize: 20 },
  ],
  [
    { text: 'Он/она имеет' },
    { text: 'эл/эа а́ре' },
    { text: 'jel/je̯a ˈa.re' },
    { text: 'El/ea are.', fontSize: 20 },
  ],
  [
    { text: 'Мы имеем' },
    { text: 'ной а́вем' },
    { text: 'noj ˈa.vem' },
    { text: 'Noi avem.', fontSize: 20 },
  ],

  // === EXAMPLES (9 new cards - sentences with pronouns + a fi / a avea) ===
  [
    { text: 'Я студент.' },
    { text: 'эу сунт студэ́нт' },
    { text: 'ew sunt stuˈdent' },
    { text: 'Eu sunt student.', fontSize: 20 },
  ],
  [
    { text: 'Ты из России?' },
    { text: 'ту эшть дин Руси́я?' },
    { text: 'tu eʃtʲ din ruˈsi.a' },
    { text: 'Tu ești din Rusia?', fontSize: 20 },
  ],
  [
    { text: 'Он счастлив.' },
    { text: 'эл е́сте феричи́т' },
    { text: 'jel ˈes.te feˈri.t͡ʃit' },
    { text: 'El este fericit.', fontSize: 20 },
  ],
  [
    { text: 'Она говорит по-румынски.' },
    { text: 'эа во́рбеште ромы́нэ' },
    { text: 'je̯a ˈvor.beʃ.te roˈmɨ.nə' },
    { text: 'Ea vorbește română.', fontSize: 20 },
  ],
  [
    { text: 'Мы в Лос-Анджелесе.' },
    { text: 'ной сы́нтем ын Лос Анджелес' },
    { text: 'noj ˈsɨn.tem ɨn los anˈdʒe.les' },
    { text: 'Noi suntem în Los Angeles.', fontSize: 20 },
  ],
  [
    { text: 'У меня двадцать пять лет.' },
    { text: 'эу ам доуэзе́чь ши чи́нчь де ань' },
    { text: 'ew am ˈdo.wə.zet͡ʃ ʃi ˈt͡ʃint͡ʃ de anʲ' },
    { text: 'Eu am douăzeci și cinci de ani.', fontSize: 20 },
  ],
  [
    { text: 'У тебя есть имя?' },
    { text: 'ту ай ну́ме?' },
    { text: 'tu aj ˈnu.me' },
    { text: 'Tu ai nume?', fontSize: 20 },
  ],
  [
    { text: 'У него есть друг.' },
    { text: 'эл а́ре прие́тен' },
    { text: 'jel ˈa.re priˈje.ten' },
    { text: 'El are prieten.', fontSize: 20 },
  ],
  [
    { text: 'У нас есть музыка.' },
    { text: 'ной а́вем му́зика' },
    { text: 'noj ˈa.vem ˈmu.zi.ka' },
    { text: 'Noi avem muzică.', fontSize: 20 },
  ],
];

export const grammarA1Part2: Card[] = [
  // === Rules (11 cards - unchanged) ===
  [
    { text: 'Мужской род' },
    { text: 'маскулин' },
    { text: 'masˈku.lin' },
    { text: 'masculin', fontSize: 20 },
  ],
  [
    { text: 'Женский род' },
    { text: 'феминин' },
    { text: 'fe.miˈnin' },
    { text: 'feminin', fontSize: 20 },
  ],
  [
    { text: 'Средний род' },
    { text: 'неутру' },
    { text: 'neˈu.tru' },
    { text: 'neutru', fontSize: 20 },
  ],
  [
    { text: 'неопр. артикль муж./ср. ед. ч.' },
    { text: 'ун' },
    { text: 'un' },
    { text: 'un', fontSize: 20 },
  ],
  [
    { text: 'неопр. артикль жен. ед. ч.' },
    { text: 'о' },
    { text: 'o' },
    { text: 'o', fontSize: 20 },
  ],
  [
    { text: 'неопр. артикль мн. ч.' },
    { text: 'ниште' },
    { text: 'ˈniʃ.te' },
    { text: 'niște', fontSize: 20 },
  ],
  [
    { text: 'опр. артикль муж./ср. ед. ч.' },
    { text: '-ул / -л' },
    { text: 'ul / l' },
    { text: '-ul / -l', fontSize: 20 },
  ],
  [
    { text: 'опр. артикль жен. ед. ч.' },
    { text: '-а' },
    { text: 'a' },
    { text: '-a', fontSize: 20 },
  ],
  [
    { text: 'мн. ч. муж. часто' },
    { text: '-и' },
    { text: 'ʲ' },
    { text: '-i', fontSize: 20 },
  ],
  [
    { text: 'мн. ч. жен. часто' },
    { text: '-ле' },
    { text: 'le' },
    { text: '-le', fontSize: 20 },
  ],
  [
    { text: 'мн. ч. ср. часто' },
    { text: '-ури' },
    { text: 'urʲ' },
    { text: '-uri', fontSize: 20 },
  ],

  // === Old examples (7 cards) ===
  [
    { text: 'мальчик, студент (муж. род)' },
    { text: 'бэят, студэ́нт' },
    { text: 'bəˈjat, stuˈdent' },
    { text: 'băiat, student', fontSize: 20 },
  ],
  [
    { text: 'девочка, дом (жен. род)' },
    { text: 'фатэ, касэ' },
    { text: 'ˈfa.tə, ˈka.sə' },
    { text: 'fată, casă', fontSize: 20 },
  ],
  [
    { text: 'ручка, имя (ср. род)' },
    { text: 'пикс, ну́ме' },
    { text: 'piks, ˈnu.me' },
    { text: 'pix, nume', fontSize: 20 },
  ],
  [
    { text: 'один мальчик, одна девочка' },
    { text: 'ун бэят, о фатэ' },
    { text: 'un bəˈjat, o ˈfa.tə' },
    { text: 'un băiat, o fată', fontSize: 20 },
  ],
  [
    { text: 'этот мальчик, эта девочка' },
    { text: 'бэятул, фата' },
    { text: 'bəˈja.tul, ˈfa.ta' },
    { text: 'băiatul, fata', fontSize: 20 },
  ],
  [
    { text: 'мальчики, девочки' },
    { text: 'бэе́ць, фе́те' },
    { text: 'bəˈjet͡sʲ, ˈfe.te' },
    { text: 'băieți, fete', fontSize: 20 },
  ],
  [
    { text: 'я не …, у меня нет …' },
    { text: 'эу ну сунт, эу ну ам' },
    { text: 'ew nu sunt, ew nu am' },
    { text: 'Eu nu sunt. Eu nu am.', fontSize: 20 },
  ],

  // === New extra examples (9 cards - to reach 27 total) ===
  [
    { text: 'один студент, один город' },
    { text: 'ун студэ́нт, ун о́раш' },
    { text: 'un stuˈdent, un ˈo.raʃ' },
    { text: 'un student, un oraș', fontSize: 20 },
  ],
  [
    { text: 'одна книга, одна сестра' },
    { text: 'о ка́рте, о со́рэ' },
    { text: 'o ˈkar.te, o ˈso.rə' },
    { text: 'o carte, o soră', fontSize: 20 },
  ],
  [
    { text: 'этот студент, этот дом' },
    { text: 'студэ́нтул, ка́са' },
    { text: 'stuˈden.tul, ˈka.sa' },
    { text: 'studentul, casa', fontSize: 20 },
  ],
  [
    { text: 'эта девушка, эта машина' },
    { text: 'фата, машина' },
    { text: 'ˈfa.ta, maˈʃi.na' },
    { text: 'fata, maşina', fontSize: 20 },
  ],
  [
    { text: 'студенты, друзья' },
    { text: 'студэ́нць, прие́тень' },
    { text: 'stuˈdenʦʲ, priˈe.tenʲ' },
    { text: 'studenți, prieteni', fontSize: 20 },
  ],
  [
    { text: 'девушки, машины' },
    { text: 'фе́те, машинь' },
    { text: 'ˈfe.te, maˈʃinʲ' },
    { text: 'fete, maşini', fontSize: 20 },
  ],
  [
    { text: 'я не студент' },
    { text: 'эу ну сунт студэ́нт' },
    { text: 'ew nu sunt stuˈdent' },
    { text: 'Eu nu sunt student.', fontSize: 20 },
  ],
  [
    { text: 'это не дом' },
    { text: 'аста ну есте касэ' },
    { text: 'ˈas.ta nu ˈjes.te ˈka.sə' },
    { text: 'Asta nu este casă.', fontSize: 20 },
  ],
  [
    { text: 'у меня нет машины' },
    { text: 'эу ну ам машинэ' },
    { text: 'ew nu am maˈʃi.nə' },
    { text: 'Eu nu am maşină.', fontSize: 20 },
  ],
];

export const grammarA1Part3: Card[] = [
  // === Possessive adjectives (rules) ===
  [
    { text: 'мой / моя (муж./жен.)' },
    { text: 'меу / мя' },
    { text: 'mew / mʲa' },
    { text: 'meu / mea', fontSize: 20 },
  ],
  [
    { text: 'твой / твоя' },
    { text: 'тэу / тя' },
    { text: 'təw / tʲa' },
    { text: 'tău / ta', fontSize: 20 },
  ],
  [
    { text: 'его / её / свой (муж./жен.)' },
    { text: 'сэу / са' },
    { text: 'səw / sa' },
    { text: 'său / sa', fontSize: 20 },
  ],
  [
    { text: 'наш / наша' },
    { text: 'ностру / ноастрэ' },
    { text: 'ˈnos.tru / ˈno.as.trə' },
    { text: 'nostru / noastră', fontSize: 20 },
  ],

  // === Negation rules ===
  [
    { text: 'отрицание с глаголом' },
    { text: 'ну + глагол' },
    { text: 'nu' },
    { text: 'nu + verb', fontSize: 20 },
  ],
  [
    { text: 'не есть' },
    { text: 'ну есте' },
    { text: 'nu ˈjes.te' },
    { text: 'nu este', fontSize: 20 },
  ],
  [
    { text: 'у меня нет' },
    { text: 'ну ам' },
    { text: 'nu am' },
    { text: 'nu am', fontSize: 20 },
  ],

  // === Simple questions ===
  [
    { text: 'вопросы да/нет (инверсия)' },
    { text: 'глагол + подлежащее?' },
    { text: '' },
    { text: 'verb + subject?', fontSize: 20 },
  ],
  [
    { text: 'кто?' },
    { text: 'чине?' },
    { text: 'ˈt͡ʃi.ne' },
    { text: 'Cine?', fontSize: 20 },
  ],
  [
    { text: 'что?' },
    { text: 'че?' },
    { text: 't͡ʃe' },
    { text: 'Ce?', fontSize: 20 },
  ],
  [
    { text: 'где?' },
    { text: 'унде?' },
    { text: 'ˈun.de' },
    { text: 'Unde?', fontSize: 20 },
  ],
  [
    { text: 'как?' },
    { text: 'кум?' },
    { text: 'kum' },
    { text: 'Cum?', fontSize: 20 },
  ],

  // === Examples: possessives ===
  [
    { text: 'мой друг' },
    { text: 'прие́тенул меу' },
    { text: 'priˈje.te.nul mew' },
    { text: 'prietenul meu', fontSize: 20 },
  ],
  [
    { text: 'моя сестра' },
    { text: 'со́ра мя' },
    { text: 'ˈso.rə mʲa' },
    { text: 'sora mea', fontSize: 20 },
  ],
  [
    { text: 'твой дом' },
    { text: 'каса та' },
    { text: 'ˈka.sa ta' },
    { text: 'casa ta', fontSize: 20 },
  ],
  [
    { text: 'его имя' },
    { text: 'ну́меле сэу' },
    { text: 'ˈnu.me.le səw' },
    { text: 'numele său', fontSize: 20 },
  ],
  [
    { text: 'наш город' },
    { text: 'о́рашул ностру' },
    { text: 'ˈo.ra.ʃul ˈnos.tru' },
    { text: 'orașul nostru', fontSize: 20 },
  ],

  // === Examples: negation ===
  [
    { text: 'Я не из России.' },
    { text: 'эу ну сунт дин Руси́я' },
    { text: 'ew nu sunt din ruˈsi.a' },
    { text: 'Eu nu sunt din Rusia.', fontSize: 20 },
  ],
  [
    { text: 'Это не студент.' },
    { text: 'аста ну есте студэ́нт' },
    { text: 'ˈas.ta nu ˈjes.te stuˈdent' },
    { text: 'Asta nu este student.', fontSize: 20 },
  ],
  [
    { text: 'У меня нет машины.' },
    { text: 'эу ну ам машинэ' },
    { text: 'ew nu am maˈʃi.nə' },
    { text: 'Eu nu am maşină.', fontSize: 20 },
  ],

  // === Examples: questions ===
  [
    { text: 'Ты студент?' },
    { text: 'ту эшть студэ́нт?' },
    { text: 'tu eʃtʲ stuˈdent' },
    { text: 'Tu ești student?', fontSize: 20 },
  ],
  [
    { text: 'У тебя есть брат?' },
    { text: 'ту ай фра́те?' },
    { text: 'tu aj ˈfra.te' },
    { text: 'Tu ai frate?', fontSize: 20 },
  ],
  [
    { text: 'Кто ты?' },
    { text: 'чине эшть ту?' },
    { text: 'ˈt͡ʃi.ne eʃtʲ tu' },
    { text: 'Cine ești tu?', fontSize: 20 },
  ],
  [
    { text: 'Что это?' },
    { text: 'че аста?' },
    { text: 't͡ʃe ˈas.ta' },
    { text: 'Ce este asta?', fontSize: 20 },
  ],
  [
    { text: 'Где ты живёшь?' },
    { text: 'унде локуи́ешть?' },
    { text: 'ˈun.de loˈkuj.eʃtʲ' },
    { text: 'Unde locuiești?', fontSize: 20 },
  ],
  [
    { text: 'Как тебя зовут?' },
    { text: 'кум те ну́мешть?' },
    { text: 'kum te ˈnu.meʃtʲ' },
    { text: 'Cum te numești?', fontSize: 20 },
  ],
  [
    { text: 'У него есть сестра?' },
    { text: 'эл а́ре со́рэ?' },
    { text: 'jel ˈa.re ˈso.rə' },
    { text: 'El are soră?', fontSize: 20 },
  ],
];
