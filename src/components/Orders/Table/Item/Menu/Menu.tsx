import classNames from "classnames";
import { FC, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { menuOrderStore } from "@constants/orders/menu";
import { AppDispatch } from "@redux/store";
import { deleteOrder, duplicateOrder, editOrder } from "@redux/slices/orders";
import { loadOrder } from "@redux/slices/order";
import { IOrderState } from "@interfaces/bll/order.interface";
import { orderStatusType } from "@interfaces/orders/orders.interface";
import { paymentGenerateApi } from "@api/requests/protected";
import routes from "@routes/index";

import s from "./menu.module.scss";

interface IMenuOrderItem {
  id: number;
  orderStatus: orderStatusType;
  openMenu: boolean;
  handleToggleMenu: () => void;
}

const MenuOrderItem: FC<IMenuOrderItem> = ({
  handleToggleMenu,
  openMenu,
  orderStatus,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const menuRef = useRef<HTMLDivElement>(null);

  const menuClassnames = classNames(s.menu, openMenu && s.menu__open);

  const handleClickMenu = async (name: string) => {
    if (name === "Order again") {
      dispatch(duplicateOrder(id));
    }

    if (name === "Delete") {
      dispatch(deleteOrder(id));
    }
    
    if (name === "Edit") {
      const newData = (await dispatch(editOrder(id))).payload as IOrderState;
      dispatch(loadOrder(newData));
      navigate(routes.order);
    }

    if (name === "View") {
      navigate(`/order-preview/${id}`);
    }

    if (name === "Pay") {
      const data = await paymentGenerateApi(id);
      window.location.href = data.url;
    }
   
    if (name=== "View Delivery information") { 
      alert(id)
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
        {menuOrderStore.map((item) =>
          item === "Pay" && orderStatus !== "Submitted" ? null : (
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
          )
        )}
      </ul>
    </div>
  );
};

export default MenuOrderItem;
