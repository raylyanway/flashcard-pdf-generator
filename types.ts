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

export type Card = Line[];

export interface WrappedLine {
  segments: Segment[];
  height: number;
  gapTop?: number;
  gapBottom?: number;
}
