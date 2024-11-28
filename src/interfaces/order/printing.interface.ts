export type printingType =
  | "Direct to Film"
  | "Dye Sublimation"
  | "Embroidery"
  | "Plastisol Transfers"
  | "Screen Printing"
  | "No Printing";

export interface IPrintingItem {
  name: printingType;
  imgPath: string;
}
