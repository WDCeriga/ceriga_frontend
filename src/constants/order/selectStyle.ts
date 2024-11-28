import {
  ISelectStyle,
  selectStyleType,
} from "@interfaces/order/selectStyle.interface";

export const stylesStore: Record<selectStyleType, ISelectStyle> = {
  custom: {
    id: "custom",
    text: "Custom",
  },
  reactive: {
    id: "reactive",
    text: "Reactive",
  },
  acid_due: {
    id: "acid_due",
    text: "Acid due",
  },
  pigment: {
    id: "pigment",
    text: "Pigment",
  },
};
