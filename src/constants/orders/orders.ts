import { IFilterItem } from "@interfaces/orders/filter.interface";
import { orderStatusType } from "@interfaces/orders/orders.interface";

export const filterListStore: IFilterItem[] = [
  {
    type: "all",
    text: "All",
  },
  {
    type: "requiresAction",
    text: "Requires action",
  },
  {
    type: "priced",
    text: "Priced",
  },
  {
    type: "accepted",
    text: "Accepted",
  },
  {
    type: "processing",
    text: "Processing",
  },
  {
    type: "shipping",
    text: "Shipping",
  },
  {
    type: "completed",
    text: "Completed",
  },
];

export const orderStatusStore: orderStatusType[] = [
  "Submitted",
  "Requires action",
  "Priced",
  "Accepted",
  "Processing",
  "Shipping",
  "Completed",
];
