import { Card } from '../../../types';

// Gender of nouns (masculine, feminine, neuter)
export const gender: Card[] = [
  [
    { text: 'Род существительных в румынском', gapBottom: 5 },
    { text: 'Мужской (masculine)' },
    { text: 'Женский (feminine)' },
    { text: 'Средний (neuter)' },
  ],

  [
    { text: 'Мужской род (masculine)', gapBottom: 5 },
    { text: 'заканчивается на согласный' },
    { text: 'или -u' },
    { text: 'примеры:' },
    { text: 'băiat, copac, pom' },
  ],

  [
    { text: 'Мужской род', gapBottom: 5 },
    { text: 'мальчик' },
    { text: 'бэят' },
    { text: 'bəˈjat' },
    { text: 'băiat', fontSize: 20, gapBottom: 5 },
    { text: 'дерево' },
    { text: 'копак' },
    { text: 'koˈpak' },
    { text: 'copac', fontSize: 20 },
  ],

  [
    { text: 'Женский род (feminine)', gapBottom: 5 },
    { text: 'заканчивается на -ă или -a' },
    { text: 'примеры:' },
    { text: 'fată, casă, carte' },
  ],

  [
    { text: 'Женский род', gapBottom: 5 },
    { text: 'девочка' },
    { text: 'фатэ' },
    { text: 'ˈfa.tə' },
    { text: 'fată', fontSize: 20, gapBottom: 5 },
    { text: 'дом' },
    { text: 'касэ' },
    { text: 'ˈka.sə' },
    { text: 'casă', fontSize: 20 },
  ],

  [
    { text: 'Средний род (neuter)', gapBottom: 5 },
    { text: 'часто заканчивается на -u' },
    { text: 'в единственном числе как мужской' },
    { text: 'во множественном как женский' },
    { text: 'примеры:' },
    { text: 'scaun, tren, hotel' },
  ],

  [
    { text: 'Средний род', gapBottom: 5 },
    { text: 'стул' },
    { text: 'скаун' },
    { text: 'skaˈun' },
    { text: 'scaun', fontSize: 20, gapBottom: 5 },
    { text: 'поезд' },
    { text: 'трен' },
    { text: 'tren' },
    { text: 'tren', fontSize: 20 },
  ],

  [
    { text: 'Как определить род?', gapBottom: 5 },
    { text: 'Мужской: согласный или -u' },
    { text: 'Женский: -ă / -a' },
    { text: 'Средний: часто -u (но проверяется по множественному)' },
  ],

  [
    { text: 'Важно!', gapBottom: 5 },
    { text: 'Род влияет на артикли и прилагательные' },
    { text: 'un băiat – o fată – un scaun' },
    { text: 'băiatul – fata – scaunul' },
  ],
];
