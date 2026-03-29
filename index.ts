import * as cards from './cards';
import renderCards from './utils';

const { numbersA1, colorsA1, ...rest } = cards;
const A1 = { ...numbersA1, ...colorsA1 };

renderCards({ A1, ...rest });
