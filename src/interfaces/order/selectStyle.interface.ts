export type selectStyleType = "custom" | "reactive" | "acid_due" | "pigment";

export interface ISelectStyle {
  id: selectStyleType;
  text: string;
}
