import { FC } from "react";

import { IColorList } from "@interfaces/bll/colors.interface";

import ColorVariant from "./Variant/variant";
import s from "./item.module.scss";

interface IColorItem extends IColorList {
  activeColor: string | null;
}

const ColorItem: FC<IColorItem> = ({ color, types, activeColor }) => {
  return (
    <li className={s.container}>
      <h3 className={s.container_title}>{color}</h3>
      <ul className={s.container_list}>
        {types.map((type, index) => (
          <ColorVariant
            isActiveColor={activeColor === type.hexValue}
            key={index}
            {...type}
          />
        ))}
      </ul>
    </li>
  );
};

export default ColorItem;
