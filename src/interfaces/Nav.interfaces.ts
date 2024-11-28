export type idNavItem =
  | "dashboard"
  | "catalog"
  | "my draft"
  | "orders"
  | "wallet"
  | "dashboardAdmin"
  | "ordersAdmin"
  | "statistics"
  | "changePrice";

export type titleNavItem =
  | "Dashboard"
  | "Catalog"
  | "My draft"
  | "Orders"
  | "Wallet"
  | "Admin dashboard"
  | "Orders list"
  | "Main page"
  | "Statistics"
  | "Change price";

export interface INavInfo {
  id: idNavItem;
  title: titleNavItem;
  link: string;
  isSublist?: boolean;
}

export interface INavItem extends INavInfo {
  isMenuOpen: boolean;
}
