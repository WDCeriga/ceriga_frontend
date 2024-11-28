import { productType } from "./Product.interface";

export interface INotificationCard {
  id: string;
  title: string;
  product: productType;
  orderId: string;
  date: string;
  text: string;
}
