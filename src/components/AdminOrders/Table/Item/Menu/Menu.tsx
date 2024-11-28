import classNames from "classnames";
import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { menuAdminOrderStore } from "@constants/orders/menu";
import { AppDispatch } from "@redux/store";
import { deleteOrderByAdmin } from "@redux/slices/adminOrders";
import { menuAdminOrderType } from "@interfaces/orders/menu.interface";
import routes from "@routes/index";

import s from "./menu.module.scss";

interface IMenuOrderItem {
  id: string;
  openMenu: boolean;
  handleToggleMenu: () => void;
}

const MenuOrderItem: FC<IMenuOrderItem> = ({
  handleToggleMenu,
  openMenu,
  id,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuClassnames = classNames(s.menu, openMenu && s.menu__open);

  const handleClickMenu = async (name: menuAdminOrderType) => {
    switch (name) {
      case "Edit":
        navigate(`${routes.editShipping.url}/${id}`);
        break;

      case "View Invoice":
        navigate(`${routes.adminInvoice.url}/${id}`);
        break;

      case "Remove":
        await dispatch(deleteOrderByAdmin(id));
        break;
      case "View Delivery information": {
        navigate(`${routes.deliveryInfo}/${id}`);
        break;
      }
      default:
        break;
    }

    handleToggleMenu();
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleToggleMenu();
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, handleToggleMenu]);

  return (
    <div ref={menuRef} className={menuClassnames}>
      <ul className={s.menu_list}>
        {menuAdminOrderStore.map((item) => (
          <li key={item} className={s.menu_list_item}>
            <button
              onClick={() => {
                handleClickMenu(item);
              }}
              className={s.menu_list_item_button}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOrderItem;
