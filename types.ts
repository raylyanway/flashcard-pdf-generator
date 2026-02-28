export type FontWeight = 'light' | 'bold';

export interface Segment {
  text: string;
  fontWeight?: FontWeight;
  fontSize?: number;
  fontName?: string;
}

export interface Line {
  text: string | Segment[];
  fontName?: string;
  fontWeight?: FontWeight;
  fontSize?: number;
  gapTop?: number;
  gapBottom?: number;
}

export type Card = Line[];

export interface WrappedLine {
  segments: Segment[];
  height: number;
  gapTop?: number;
  gapBottom?: number;
}
