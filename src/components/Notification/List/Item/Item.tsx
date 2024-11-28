import classNames from "classnames";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { INotificationCard } from "@interfaces/Notification.interface";
import { CloseIcon, ErrorIcon } from "@common/Icons/CommonIcon";
import { AppDispatch } from "@redux/store";
import { deleteNotification } from "@redux/slices/user";
import { formatDateToNMDDYY } from "@services/dataConverter";

import s from "./item.module.scss";

const ItemNotification: FC<INotificationCard> = ({
  title,
  product,
  orderId,
  date,
  text,
  id,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenNotification, setOpenNotification] = useState<boolean>(false);

  const itemClassnames = classNames(s.item, isOpenNotification && s.item__open);
  const contentClassnames = classNames(
    s.item_content,
    isOpenNotification && s.item_content__open
  );

  const handleDeleteItem = () => {
    dispatch(deleteNotification(id));
  };

  const handleToggleNotification = () => setOpenNotification((prev) => !prev);

  return (
    <li className={itemClassnames}>
      <div className={s.item_header} onClick={handleToggleNotification}>
        <ErrorIcon width="24" height="24" color="#C80F0F" />
        <div className={s.item_header_center}>
          <h3 className={s.item_header_center_title}>Note</h3>
          <p className={s.item_header_center_description}>{title}</p>
        </div>
        <button onClick={handleDeleteItem} className={s.item_header_close}>
          <CloseIcon width="24" height="24" color="#303030" type="no-border" />
        </button>
      </div>
      <div className={contentClassnames}>
        <div className={s.item_content_top}>
          <div className={s.item_content_top_item}>
            <h3 className={s.item_content_top_item_title}>{product}</h3>
            <p className={s.item_content_top_item_text}>{orderId}</p>
          </div>
          <div className={s.item_content_top_item}>
            <h3 className={s.item_content_top_item_title}>
              {formatDateToNMDDYY(date)}
            </h3>
          </div>
        </div>
        <p className={s.item_content_message}>{text}</p>
      </div>
    </li>
  );
};

export default ItemNotification;
