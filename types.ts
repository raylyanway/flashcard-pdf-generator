export type FontWeight = 'light' | 'bold';
export type HorizontalAlign = "left" | "center" | "right";
export type VerticalAlign = "top" | "middle" | "bottom";

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
}

export type Card = Line[];

export interface WrappedLine {
  segments: Segment[];
  height: number;
  gapTop?: number;
  gapBottom?: number;
}
