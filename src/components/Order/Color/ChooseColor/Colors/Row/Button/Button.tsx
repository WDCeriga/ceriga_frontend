import classNames from "classnames";
import { FC } from "react";

import { colorType } from "@interfaces/order/colors.interface";
import { colorHexType } from "@interfaces/bll/order.interface";
import { getColorName } from "@services/colorsName";

import s from "./button.module.scss";

interface ColorButtonProps {
  colorItem: colorType | colorHexType;
  colorIsActive: boolean;
  onEvent: (arg0: colorHexType) => void;
}

const ColorButton: FC<ColorButtonProps> = ({
  colorItem,
  colorIsActive,
  onEvent,
}) => {
  const buttonStyle =
    typeof colorItem !== "object"
      ? { background: colorItem }
      : { background: colorItem.value, border: "1px solid #606060" };

  const buttonClassnames = classNames(
    s.item_button,
    colorIsActive && s.item_button__active
  );

  const handleClick = () => {
    if (typeof colorItem === "string") {
      onEvent(colorItem);
    } else {
      onEvent(colorItem.value);
    }
  };
  const color = typeof colorItem === "string" ? colorItem : colorItem.value;
  return (
    <li className={s.item}>
      <div className={s.item_placeholder}>
        <p className={s.item_placeholder_name}>{getColorName(color)}</p>
        <p className={s.item_placeholder_value}>{color}</p>
      </div>

      <button
        onClick={handleClick}
        className={buttonClassnames}
        style={buttonStyle}
      ></button>
    </li>
  );
};

export default ColorButton;
