import s from "./row.module.scss";

import { FC } from "react";

import { IColors } from "@interfaces/order/colors.interface";
import ColorButton from "./Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { colorHexType } from "@interfaces/bll/order.interface";
import { AppDispatch, RootState } from "@redux/store";
import { updateColor } from "@redux/slices/order";

const ColorRow: FC<IColors> = ({ name, list }) => {
  const colorActive: colorHexType | null = useSelector(
    (state: RootState) => state.order.color
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleChooseColor = (color: colorHexType) => {
    dispatch(updateColor(color));
  };
  return (
    <li className={s.row}>
      <h3 className={s.row_title}>{name}</h3>
      <ul className={s.row_list}>
        {list.map((colorItem, index) => (
          <ColorButton
            onEvent = {handleChooseColor}
            key={index}
            colorIsActive={colorItem === colorActive}
            colorItem={colorItem}
          />
        ))}
      </ul>
    </li>
  );
};

export default ColorRow;
