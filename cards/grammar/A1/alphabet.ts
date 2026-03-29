import { Card } from '../../../types';

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
