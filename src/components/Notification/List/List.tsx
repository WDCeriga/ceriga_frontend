import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

import ItemNotification from "./Item/Item";
import s from "./list.module.scss";

const ListNotification: FC = () => {
  const {list} = useSelector((state:RootState) => state.user.notification)
  return (
    <ul className={s.list}>
      {list.map((item) => (
        <ItemNotification key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ListNotification;
