import { FC } from "react";

import { ICustomizeItem } from "@interfaces/order/customizeLabel.interface";
import { FadingType } from "@interfaces/order/design.interface";

import s from "./checkbox.module.scss";

interface ICheckBox extends ICustomizeItem {
  isActive: boolean;
  handleChange: (arg0: FadingType) => void;
}

const CheckBoxCustomizeLabel: FC<ICheckBox> = ({
  name,
  isActive,
  handleChange,
}) => {
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <input
          onChange={() => handleChange(name)}
          className={s.item_label_checkbox}
          checked={isActive}
          type="checkbox"
        />
        <p className={s.item_label_text}>{name}</p>
      </label>
    </li>
  );
};

export default CheckBoxCustomizeLabel;
