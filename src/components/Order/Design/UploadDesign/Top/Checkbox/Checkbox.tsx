import { FC } from "react";

import { IUploadType } from "@interfaces/order/uploadTypes.interface";
import { StitchingType } from "@interfaces/order/design.interface";

import s from "./checkbox.module.scss";

interface ICheckBox extends IUploadType {
  isActive: boolean;
  handleChange: (arg0: StitchingType) => void;
}

const CheckboxUploadDesign: FC<ICheckBox> = ({ name, isActive, handleChange }) => {
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <input
          onChange={() => handleChange(name)}
          className={s.item_label_input}
          checked={isActive}
          type="checkbox"
        />
        <p className={s.item_label_text}>{name}</p>
      </label>
    </li>
  );
};

export default CheckboxUploadDesign;
