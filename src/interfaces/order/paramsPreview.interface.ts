import { materialValue } from "./material.interface";

export type titleType =
  | "Fabrics"
  | "Colour"
  | "Neck label"
  | "Care label"
  | "Design"
  | "Packaging"
  | "Quantity"

export interface ISubparametersPreviewTable {
  title: string;
  value: string;
}
export interface ILinkPreviewTable {
  url: string;
}

export interface ISubparametersPreviewOrder {
  title: string;
  isLink?: boolean;
  titleStyle?: "default" | "bold";
  value?: string | materialValue;
  link?: string;
  text?: string;
}

export interface IParamPreviewOrder {
  title: titleType;
  paramsType: "list" | "table" | "link"  | "text"
  subparameters: ISubparametersPreviewOrder[] | ISubparametersPreviewTable[] | ILinkPreviewTable | string;
}
