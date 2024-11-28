import { productType } from "./Product.interface";

export interface IDraftCard {
  id: string;
  name: string;
  productType: productType;
  createAt: string;
  color: {
    hex: string;
    path: string;
  };
}

export interface DraftItem {
  _id: string;
  name: string;
  productType: productType;
  createAt: string;
  color: {
    hex: string;
    path: string;
  };
}

export interface FormattedDraftItem extends Omit<DraftItem, "createAt"> {
  id: string;
  createAt: string;
}
