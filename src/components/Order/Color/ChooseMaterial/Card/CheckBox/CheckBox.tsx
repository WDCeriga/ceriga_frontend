import { FC } from "react";

import { materialValue } from "@interfaces/order/material.interface";

import s from "./checkbox.module.scss";

interface ICheckBoxMaterial {
  isChecked: boolean;
  value: materialValue;
  onEvent: (org0: materialValue) => void;
}

const CheckBoxMaterial: FC<ICheckBoxMaterial> = ({
  value,
  onEvent,
  isChecked,
}) => {
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <input
          checked={isChecked}
          onChange={() => onEvent(value)}
          className={s.item_label_checkbox}
          type="checkbox"
        />
        <p className={s.item_label_text}>{value} GSM</p>
      </label>
    </li>
  );
};

export default CheckBoxMaterial;