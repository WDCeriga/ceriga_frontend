import classNames from "classnames";
import { FC } from "react";

import { colorCustomLabelType } from "@interfaces/order/customLabel.interface";

import s from "./items.module.scss";

interface IItemColorLabel {
  isActive: boolean;
  color: colorCustomLabelType;
  handleChooseColor: (arg0: colorCustomLabelType) => void;
}

const ItemColorLabel: FC<IItemColorLabel> = ({ color, handleChooseColor,isActive }) => {
  const buttonClassnames = classNames( 
    s.color_button,
    isActive && s.color_button__active
  )
  return (
    <li className={s.color}>
      <button
        onClick={() => handleChooseColor(color)}
        className={buttonClassnames}
        style={{ background: color }}
      ></button>
    </li>
  );
};

export default ItemColorLabel;
