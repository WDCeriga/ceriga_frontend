import { IMaterial } from "../bll/order.interface";

export type ClothingGSMOptions = {
  [key: string]: number[];
};

export type materialTitle =
  | "Wool"
  | "100% Cotton"
  | "Fleece 100% cotton"
  | "French terry 100% cotton";

export type materialImage =
  | "100PercentCotton.jpeg"
  | "fleece.jpeg"
  | "frenchTerry.jpeg"
  | "wool.jpeg";

export type materialValue = number;

export interface IMaterialItem {
  img: materialImage;
  materialsValue?: materialValue[];
}

export interface IMaterialCard {
  title: materialTitle;
  list: IMaterialItem;
}

export interface IMaterialCardComponent extends IMaterialCard {
  activeMaterial: IMaterial;
  values: number[];
}
