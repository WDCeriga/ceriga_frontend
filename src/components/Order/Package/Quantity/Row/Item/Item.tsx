import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";

import { IQuantityItem } from "@interfaces/order/quantity.interface";
import { AppDispatch } from "@redux/store";
import { changeQuantityItem } from "@redux/slices/order";

import s from "./item.module.scss";

const ItemRowQuantity: FC<IQuantityItem> = ({ name, value }) => {
  //const [value, setValue] = useState<number>(value)
  const dispatch = useDispatch<AppDispatch>();
  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeQuantityItem({ name, value: Number(e.target.value) }));
  };
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <p className={s.item_label_text}>{name}</p>
        <input
          className={s.item_label_input}
          onChange={handleChangeQuantity}
          type="number"
          value={value}
          min={0}
        />
      </label>
    </li>
  );
};

export default ItemRowQuantity;
