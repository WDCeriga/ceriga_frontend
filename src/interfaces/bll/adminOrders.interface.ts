import { IInvoice } from "@interfaces/Invoice.interface";
import { orderStatusType } from "@interfaces/orders/orders.interface";

export type manufacturerType =
  | "Portugal  manufacturer"
  | "Türkiye manufacturer"
  | "Spain manufacturer";

export type sortType = "Oldest First" | "Newest First"

export interface IAdminOrder {
  id: string;
  userEmail: string;
  productType: string;
  orderData: string;
  orderStatus: orderStatusType;
  manufacturer: manufacturerType;
  subtotal: string;
  invoice: IInvoice

}

export interface IAdminOrdersState {
  list: IAdminOrder[] | null;
  search: string;
  isSearch: boolean;
  invoiceOrder: IInvoice | null;
  totalCount: number | null;
  sortType: sortType
}
