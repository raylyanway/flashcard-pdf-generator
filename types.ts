import * as cardModules from './cards';

export type FontWeight = 'light' | 'bold';
export type HorizontalAlign = 'left' | 'middle' | 'right';
export type VerticalAlign = 'top' | 'middle' | 'bottom';

export interface Segment {
  text: string;
  fontWeight?: FontWeight;
  fontSize?: number;
}

export interface Line {
  text: string | Segment[];
  fontWeight?: FontWeight;
  fontSize?: number;
  gapTop?: number;
  gapBottom?: number;
  pinTop?: boolean;
  pinBottom?: boolean;
}

export interface WrappedLine {
  segments: Segment[];
  height: number;
  gapTop?: number;
  gapBottom?: number;
}

export type Card = Line[];
type CardModule = keyof typeof cardModules;
type CardsFromModule = Partial<Record<CardModule, Card[]>>;

export type CardsMap = CardsFromModule & {
  [key: string]: Card[] | undefined;
};

export type CardConfig = Record<string, Record<string, CardModule[]>>;
