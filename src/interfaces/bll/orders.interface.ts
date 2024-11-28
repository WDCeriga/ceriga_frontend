import { filterType } from "../orders/filter.interface";
import { IOrderItem } from "../orders/orders.interface";
import { sortType } from "./adminOrders.interface";

export interface IOrdersState {
  search: string;
  isFilter: boolean;
  activeFilter: filterType;
  selectedOrders: number[];
  ordersList: IOrderItem[];
  sortType: sortType
}
