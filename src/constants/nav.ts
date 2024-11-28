import { INavInfo } from "@interfaces/Nav.interfaces";
import routes from "@routes/index";

export const navStore: INavInfo[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    link: "/",
  },
  {
    id: "catalog",
    title: "Catalog",
    link: routes.catalog,
    isSublist: true,
  },
  {
    id: "my draft",
    title: "My draft",
    link: routes.drafts,
  },
  {
    id: "orders",
    title: "Orders",
    link: routes.orders,
  },
];

export const navStoreAdmin: INavInfo[] = [
  {
    id: "dashboardAdmin",
    title: "Admin dashboard",
    link: routes.adminDashboard,
  },
  {
    id: "ordersAdmin",
    title: "Orders list",
    link: routes.adminOrders,
  },
  {
    id: "statistics",
    title: "Statistics",
    link: routes.statistics,
  },
  {
    id: "changePrice",
    title: "Change price",
    link: routes.changePrice,
  },
];
