import { productType } from "../Product.interface";

export type orderStatusType =
  | "Draft"
  | "Requires action"
  | "Submitted"
  | "Priced"
  | "Accepted"
  | "Processing"
  | "Shipping"
  | "Completed";

export interface IOrderItem {
  id: number;
  productType: productType;
  name: string;
  tracking: string;
  orderData: string;
  orderStatus: orderStatusType;
  subtotal: string;
}
