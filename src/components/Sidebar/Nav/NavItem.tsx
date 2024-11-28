import {
  ArrowVerticalIcon,
  CatalogIcon,
  DashboardIcon,
  MyDraftIcon,
  OrdersIcon,
  StatisticsIcon,
  WalletIcon,
} from "@common/Icons/NavIcons";
import classNames from "classnames";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { INavItem } from "@interfaces/Nav.interfaces";
import { PriceIcon } from "@common/Icons/CommonIcon";
import routes from "@routes/index";

import s from "./navItem.module.scss";

const NavItem: FC<INavItem> = ({ title, link, isSublist, id, isMenuOpen }) => {
  const location = useLocation();

  const paths: { [key: string]: string } = {
    dashboard: "/",
    catalog: routes.catalog,
    "my draft": routes.drafts,
    orders: routes.orders,
    statistics: routes.statistics,
    dashboardAdmin: routes.adminDashboard,
    ordersAdmin: routes.adminOrders,
    changePrice: routes.changePrice,
  };

  const isActive: boolean = location.pathname === paths[id];
  const colorIcon = "#fff";

  const iconComponents: { [key: string]: FC } = {
    dashboard: () => (
      <DashboardIcon color={colorIcon} width="24" height="24px" />
    ),
    dashboardAdmin: () => (
      <DashboardIcon color={colorIcon} width="24" height="24px" />
    ),
    statistics: () => (
      <StatisticsIcon color={colorIcon} width="24" height="24px" />
    ),
    catalog: () => <CatalogIcon color={colorIcon} width="24" height="24px" />,
    "my draft": () => (
      <MyDraftIcon color={colorIcon} width="24" height="24px" />
    ),
    orders: () => <OrdersIcon color={colorIcon} width="24" height="24px" />,
    ordersAdmin: () => (
      <OrdersIcon color={colorIcon} width="24" height="24px" />
    ),
    wallet: () => <WalletIcon color={colorIcon} width="24" height="24px" />,
    changePrice: () => <PriceIcon color={colorIcon} width="24" height="24px" />,
  };
  const Icon = iconComponents[id] || null;

  const itemClasses = classNames(
    s.item,
    isMenuOpen && s.item__opened,
    isActive && s.item__active
  );

  const linkClasses = classNames(
    s.item_link,
    isMenuOpen && s.item_link__opened
  );

  const titleClasses = classNames(
    s.item_link_content_title,
    isActive && s.item_link_content_title__active
  );

  return (
    <li className={itemClasses}>
      <Link className={linkClasses} to={link}>
        <div className={s.item_link_content}>
          {Icon && <Icon />}
          {isMenuOpen && <p className={titleClasses}>{title}</p>}
        </div>
      </Link>
      {isSublist && isMenuOpen && (
        <button className={s.item_sublistBtn}>
          <ArrowVerticalIcon
            type="bottom"
            width="14"
            height="8"
            color={colorIcon}
          />
        </button>
      )}
    </li>
  );
};

export default NavItem;
