export type productType =
  | "t-shirt"
  | "hoodie"
  | "sweat_pants"
  | "crewneck"
  | "zip_up_hoodie"
  | "tank_top"
  | "sweatpants"
  | "cuffed_sweatpants";

export interface IProduct {
  id: string;
  name: string;
  type: productType
  category: string;
  sizes: number;
  imgUrl: string;
}
