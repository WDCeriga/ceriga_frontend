import { ICustomizeItem } from "@interfaces/order/customizeLabel.interface";
import { colorCustomLabelType } from "@interfaces/order/customLabel.interface";

export const customizeLabelStore: ICustomizeItem[] = [
  {
    id: "allOverFade",
    name: "All-over fade",
  },
  {
    id: "circularFade",
    name: "Circular fade",
  },
  {
    id: "fadeTop_bottom",
    name: "Fade Top-bottom",
  },
  {
    id: "shoulderFade",
    name: "Shoulder fade",
  },
  {
    id: "noFading",
    name: "No Fading",
  },
];

export const colorsLabelsStore: colorCustomLabelType[] = [
  "#272626",
  "#5A5858",
  "#8D8B8B",
  "#A2A0A0",
  "#B3B2B2",
  "#D9D8D8",
  "#F1F1F1",
  "#F8F8F8",
];
