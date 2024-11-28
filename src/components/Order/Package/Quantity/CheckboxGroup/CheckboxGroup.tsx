import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { quantityType } from "@interfaces/order/quantity.interface";
import { changeQuantityType } from "@redux/slices/order";

import s from "./checkboxGroup.module.scss";

const CheckboxGroup: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { type } = useSelector((state: RootState) => state.order.quantity);

  const handleCheckedItem = (newType: quantityType) => {
    dispatch(changeQuantityType(newType));
  };
  return (
    <ul className={s.group}>
      <li className={s.group_item}>
        <label className={s.group_item_label}>
          <input
            className={s.group_item_label_input}
            onChange={() => handleCheckedItem("Bulk")}
            checked={type === "Bulk"}
            type="checkbox"
          />
          <p className={s.group_item_label_text}>Bulk</p>
        </label>
      </li>
      <li className={s.group_item}>
        <label className={s.group_item_label}>
          <input
            className={s.group_item_label_input}
            onChange={() => handleCheckedItem("Sample Selection")}
            checked={type === "Sample Selection"}
            type="checkbox"
          />
          <p className={s.group_item_label_text}>Sample Selection</p>
        </label>
      </li>
    </ul>
  );
};

export default CheckboxGroup;
