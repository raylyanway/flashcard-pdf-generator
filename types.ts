export type FontWeight = 'light' | 'bold' | string;

export interface Segment {
  text: string;
  style?: FontWeight;
  size?: number;
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
