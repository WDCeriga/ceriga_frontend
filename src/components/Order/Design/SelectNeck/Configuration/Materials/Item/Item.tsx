import { FC } from "react";

import { materialCustomLabelType } from "@interfaces/order/customLabel.interface";

import s from "./item.module.scss";

interface IItemMaterialNeck {
  material: materialCustomLabelType;
  handleCheck: (arg0:materialCustomLabelType) => void;
  isActive: boolean;
}

const ItemMaterialNeck: FC<IItemMaterialNeck> = ({
  material,
  handleCheck,
  isActive,
}) => {
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <input
          onChange={() => handleCheck(material)}
          className={s.item_label_input}
          checked={isActive}
          type="checkbox"
        />
        <p className={s.item_label_text}>{material}</p>
      </label>
    </li>
  );
};

export default ItemMaterialNeck;
