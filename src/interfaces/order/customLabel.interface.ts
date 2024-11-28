export type colorCustomLabelType =
  | "#272626"
  | "#5A5858"
  | "#8D8B8B"
  | "#A2A0A0"
  | "#B3B2B2"
  | "#D9D8D8"
  | "#F1F1F1"
  | "#F8F8F8";

export type materialCustomLabelType = "Woven" | "Cotton" | "Polyester";

export interface ICustomLabel {
  type: materialCustomLabelType;
  color: colorCustomLabelType[];
}
