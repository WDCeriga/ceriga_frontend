import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { IColorType } from "@interfaces/bll/colors.interface";
import { AppDispatch } from "@redux/store";
import { updateColor } from "@redux/slices/order";

import s from "./variant.module.scss";

interface IColorVariant extends IColorType {
  isActiveColor: boolean;
}

const ColorVariant: FC<IColorVariant> = ({ hexValue, path, isActiveColor }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(updateColor({ colorHex: hexValue, path: path }));
  };
  const buttonClassNames = classNames(
    s.container_block,
    isActiveColor && s.container_block__active
  );
  return (
    <li className={s.container}>
      <button
        onClick={handleClick}
        className={buttonClassNames}
        style={{ background: hexValue }}
      ></button>
    </li>
  );
};

export default ColorVariant;
