import { FadingType } from "./design.interface";

export type customizeType =
  | "allOverFade"
  | "circularFade"
  | "fadeTop_bottom"
  | "shoulderFade"
  | "noPrinting"
  | "noFading";

export interface ICustomizeItem {
  id: customizeType;
  name: FadingType;
}
