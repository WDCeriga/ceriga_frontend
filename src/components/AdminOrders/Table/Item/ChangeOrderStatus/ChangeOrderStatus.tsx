import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { AppDispatch } from "@redux/store";
import { orderStatusStore } from "@constants/orders/orders";
import { orderStatusType } from "@interfaces/orders/orders.interface";
import { changeOrderStatus } from "@redux/slices/orders";
import { IInvoice } from "@interfaces/Invoice.interface";

import s from "./changeOrderStatus.module.scss";

interface IChangeManufacturer {
  id: string;
  isOpen: boolean;
  initialStatus: orderStatusType;
  invoice: IInvoice;
  handleChangeMenuStatus: (id: string) => void;
}

const ChangeOrderStatus: FC<IChangeManufacturer> = ({
  id,
  isOpen,
  invoice,
  initialStatus,
  handleChangeMenuStatus,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeStatus, setActiveStatus] =
    useState<orderStatusType>(initialStatus);

  const handleOpenMenu = () => {
    handleChangeMenuStatus(id);
  };

  const handleChangeParam = (item: orderStatusType) => {
    setActiveStatus(item);
    dispatch(changeOrderStatus({ orderId: Number(id), orderStatus: item }));
    handleOpenMenu();
    handleChangeMenuStatus("");
  };

  return (
    <div className={s.container}>
      <button onClick={handleOpenMenu} className={s.container_button}>
        <p className={s.container_button_text}>{activeStatus}</p>
        <ArrowVerticalIcon
          color="#C80F0F"
          width="12"
          height="6"
          type={isOpen ? "top" : "bottom"}
        />
      </button>
      {isOpen && (
        <ul className={s.container_list}>
          {invoice.status === "not created" ||  invoice.status === "in confirm"
            ? orderStatusStore
                .filter(
                  (item) => item === "Requires action"
                )
                .map((item) => (
                  <li
                    key={item}
                    className={s.container_list_item}
                    onClick={() => handleChangeParam(item)}
                  >
                    <p className={s.container_list_item_text}>{item}</p>
                  </li>
                ))
            : orderStatusStore
                .filter(
                  (item) => item !== "Requires action"
                )
                .map((item) => (
                  <li
                    key={item}
                    className={s.container_list_item}
                    onClick={() => handleChangeParam(item)}
                  >
                    <p className={s.container_list_item_text}>{item}</p>
                  </li>
                ))}
        </ul>
      )}
    </div>
  );
};

export default ChangeOrderStatus;
