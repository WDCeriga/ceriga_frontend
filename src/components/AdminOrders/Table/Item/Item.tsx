import { FC, useMemo } from "react";
import { useSelector } from "react-redux";

import { MoreIcon } from "@common/Icons/CommonIcon";
import { formatDateToNMDDYY } from "@services/dataConverter";
import { RootState } from "@redux/store";
import { filterListStore } from "@constants/orders/orders";
import { IAdminOrder } from "@interfaces/bll/adminOrders.interface";
import { localGetItem } from "@services/localStorage";
import { IInvoice } from "@interfaces/Invoice.interface";
// import notification from "@services/notification";

import ChangeManufacturer from "./ChangeManufacturer/ChangeManufacturer";
import ChangeOrderStatus from "./ChangeOrderStatus/ChangeOrderStatus";
import MenuOrderItem from "./Menu/Menu";
import s from "./item.module.scss";

interface IAdminOrderComponent extends IAdminOrder {
  menuOpenId: string;
  openManufactory: string;
  menuStatus: string;
  invoice: IInvoice;
  handleToggleMenu: () => void;
  handleChangeManufactory: (id: string) => void;
  handleChangeMenuStatus: (id: string) => void;
}

const AdminOrderItem: FC<IAdminOrderComponent> = ({
  id,
  // userEmail,
  productType,
  orderData,
  orderStatus,
  subtotal,
  manufacturer,
  openManufactory,
  menuStatus,
  invoice,
  handleChangeManufactory,
  handleChangeMenuStatus,
  menuOpenId,
  handleToggleMenu,
}) => {
  const role = localGetItem("role") || "";
  const { activeFilter } = useSelector((state: RootState) => state.orders);

  const itemFilter = useMemo(() => {
    return filterListStore.find((item) => item.type === activeFilter);
  }, [activeFilter]);

  // const handleCopyUserEmail = async () => {
  //   try {
  //     await navigator.clipboard.writeText(userEmail);
  //     notification.success("User Email copied to clipboard!");
  //   } catch (err) {
  //     notification.error("Failed to copy email. Please try again.");
  //     console.error("Clipboard copy failed:", err);
  //   }
  // };

  if (
    itemFilter &&
    itemFilter.type !== "all" &&
    (itemFilter.text as unknown as string) !== orderStatus
  ) {
    return null;
  }

  return (
    <tr className={s.row}>
      <td className={`${s.row_item} ${s.typeProd}`}>
        <div className={s.typeWrap}>
          <div className={s.typeName}>
        {productType}
        </div>
        <span className={s.row_item__gray}>{id}</span>
        </div>
      </td>
      {/* <td className={s.row_item}>
        <div className={s.row_item_container}>
          <span className={s.row_item__green}>{userEmail}</span>
          <button
            onClick={handleCopyUserEmail}
            className={s.row_item_btnCopy}
            aria-label="Copy email"
          >
            <CopyIcon width="24" height="24" />
          </button>
        </div>
      </td> */}
      <td className={s.row_item}>{formatDateToNMDDYY(orderData)}</td>
      <td className={`${s.row_item} ${s.row_item_status}`}>
        {role === "superAdmin" ? (
          orderStatus
        ) : (
          <ChangeOrderStatus
            id={id}
            invoice={invoice}
            initialStatus={orderStatus}
            handleChangeMenuStatus={handleChangeMenuStatus}
            isOpen={menuStatus === id}
          />
        )}
      </td>
      <td className={`${s.row_item} ${s.row_item__price}`}>
        {role === "superAdmin" ? (
          <ChangeManufacturer
            id={id}
            isOpenManufactory={id === openManufactory}
            handleChangeManufactory={handleChangeManufactory}
            manufacturer={manufacturer}
          />
        ) : (
          `${Number(subtotal).toFixed(2)}$`
        )}
      </td>
      <td className={`${s.row_item} ${s.invoice}`}>
        <div className={s.invoice_wrap}>
          <div className={s.invoice_status}>{invoice && invoice.status}</div>
          <div className={s.menuOrder}>
            <MenuOrderItem
              id={id}
              openMenu={id === menuOpenId}
              handleToggleMenu={handleToggleMenu}
            />
            <button
              onClick={handleToggleMenu}
              className={s.row_item_button}
              aria-label="Toggle menu"
            >
              <MoreIcon />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminOrderItem;
