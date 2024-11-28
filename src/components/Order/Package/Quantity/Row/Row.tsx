import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

import ItemRowQuantity from "./Item/Item";
import s from "./row.module.scss";

const RowQuantity: FC = () => {
  const { list } = useSelector((state: RootState) => state.order.quantity);
  
  return (
    <ul className={s.list}>
      {list.map((quantityItem) => (
        <ItemRowQuantity key={quantityItem.name} {...quantityItem} />
      ))}
    </ul>
  );
};

export default RowQuantity;
