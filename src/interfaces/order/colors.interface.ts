import { colorHexType } from "../bll/order.interface";

export type colorType =
  | colorHexType
  | {
      value: colorHexType;
      type: "border";
    };

export interface IColors {
  name: string;
  list: colorType[];
}
