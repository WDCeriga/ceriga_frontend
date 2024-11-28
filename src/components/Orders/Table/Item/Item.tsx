import { FC, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { CopyIcon, MoreIcon } from "@common/Icons/CommonIcon";
import { IOrderItem } from "@interfaces/orders/orders.interface";
import { formatDateToNMDDYY } from "@services/dataConverter";
import { RootState } from "@redux/store";
import { filterListStore } from "@constants/orders/orders";
import { EditIcon } from "@common/Icons/DraftMenu";
import { paymentGenerateApi } from "@api/requests/protected";
import notification from "@services/notification";

import ChangeName from "./ChangeName/ChangeName";
import MenuOrderItem from "./Menu/Menu";
import s from "./item.module.scss";

const OrderItem: FC<IOrderItem> = ({
  id,
  name,
  tracking,
  orderStatus,
  orderData,
}) => {
  const { activeFilter } = useSelector((state: RootState) => state.orders);

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openEditName, setEditName] = useState<boolean>(false);

  const itemFilter = useMemo(() => {
    return filterListStore.find((item) => item.type === activeFilter);
  }, [activeFilter]);

  const handleCopyTracking = async () => {
    try {
      await navigator.clipboard.writeText(tracking);
      notification.success("Tracking number copied to clipboard!");
    } catch (err) {
      notification.error("Failed to copy tracking number. Please try again.");
      console.error("Clipboard copy failed:", err);
    }
  };

  const handleToggleMenu = () => setOpenMenu((prev) => !prev);
  const handleChangeName = () => setEditName((prev) => !prev);

  if (itemFilter && itemFilter.type !== "all") {
    const filterTextMatchesStatus = (itemFilter.text as string) === orderStatus;

    if (!filterTextMatchesStatus) {
      return null;
    }
  }
  
  const handlePay = async (id:number) => { 
    const data = await paymentGenerateApi(id);
    window.location.href = data.url;
  }

  return (
    <tr className={s.row}>
      <td className={s.row_item}>
        <div className={s.row_item_name}>
          {!openEditName ? (
            <>
              <p className={s.row_item_name_text}>{name}</p>
              <button
                onClick={handleChangeName}
                className={s.row_item_name_button}
              >
                <EditIcon width="15" height="15" color="#333" />
              </button>
            </>
          ) : (
            <ChangeName
              onClose={handleChangeName}
              orderId={id}
              initialValue={name}
            />
          )}
        </div>

        <br />
        <span className={s.row_item__gray}>{id}</span>
      </td>
      <td className={s.row_item}>
        <div className={s.row_item_container}>
          <span className={s.row_item__green}>{tracking}</span>
          <button
            onClick={handleCopyTracking}
            className={s.row_item_btnCopy}
            aria-label="Copy tracking number"
          >
            <CopyIcon width="24" height="24" />
          </button>
        </div>
      </td>
      <td className={s.row_item}>{formatDateToNMDDYY(orderData)}</td>
      <td className={s.row_item}>{orderStatus}</td>

      <td className={s.row_item}>
        <div className={s.row_item_line}>
          {orderStatus === "Submitted" && (
            <button onClick={() => handlePay(id)} className={s.row_item_line_button}>Pay</button>
          )}
          <MenuOrderItem
            id={id}
            orderStatus={orderStatus}
            openMenu={openMenu}
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
      </td>
    </tr>
  );
};

export default OrderItem;
