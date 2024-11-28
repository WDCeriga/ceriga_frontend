import {
  IQuantityItem,
  quantityType,
} from "@interfaces/order/quantity.interface";
import { IFading, INeck, IStitching } from "@interfaces/order/design.interface";
import { IDelivery } from "@interfaces/Delivery.interface";
import { ITableSizeRow } from "@interfaces/order/sizes.interface";
import { printingType } from "@interfaces/order/printing.interface";

import { materialTitle, materialValue } from "../order/material.interface";
import { selectStyleType } from "../order/selectStyle.interface";

export type colorHexType = `#${string}`;

export type orderStep =
  | "size"
  | "color"
  | "design"
  | "package"
  | "delivery"
  | "preview";

export interface IMaterial {
  name: materialTitle | null;
  value: materialValue | null;
}

export interface IPackage {
  isPackage: boolean | null;
  description: string;
}

export interface IOrderState {
  draftId: string | null;
  orderId?: string;
  name: string | null;
  orderStep: orderStep | null;
  printing: printingType | "" | null;
  productType: string | null;
  dyeStyle: selectStyleType | null;
  color: {
    hex: string | null;
    path: string | null;
    description: string;
  };
  material: IMaterial;
  stitching: IStitching;
  fading: IFading;
  neck: INeck;
  package: IPackage;
  quantity: {
    type: quantityType | null;
    list: IQuantityItem[];
  };
  delivery: IDelivery;
  designUploads: string[];
  labelUploads: string[];
  neckUploads: string[];
  neckDescription: string;
  packageUploads: string[];
  cost: number;
  createAt: string;
  subtotal: number;
  shipping: number;
  moq: number;
  tableSize: ITableSizeRow[];
  tableType: string | null;
}

export interface ICreateNewOrder {
  productType: string;
}
