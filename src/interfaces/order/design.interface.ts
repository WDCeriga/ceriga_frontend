import {
  colorCustomLabelType,
  materialCustomLabelType,
} from "./customLabel.interface";
import { neckSizeType } from "./selectNeck.interface";

export type StitchingType = "Standard" | "Raw edge" | "Flatlock" | "Inside-out";
export type FadingType =
  | "All-over fade"
  | "Circular fade"
  | "Fade Top-bottom"
  | "Shoulder fade"
  | "No Fading";

export interface IStitching {
  type: StitchingType | "";
  description: string;
}

export interface IFading {
  type: FadingType | "";
}

export interface INeck {
  noLabels: boolean;
  type: neckSizeType | null | "";
  additional: {
    color: colorCustomLabelType | "";
    material: materialCustomLabelType | "";
  };
}
