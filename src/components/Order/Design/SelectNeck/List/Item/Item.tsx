import {
  Neck4545Icon,
  Neck5018Icon,
  Neck6020Icon,
  Neck6515Icon,
} from "@common/Icons/SelectNeck";
import classNames from "classnames";
import { FC } from "react";

import { neckSizeType } from "@interfaces/order/selectNeck.interface";

import s from "./item.module.scss";

interface IItemSelectNeck {
  size: neckSizeType;
  isActive: boolean;
  handleSelectNeck: (arg0: neckSizeType) => void
}

const ItemSelectNeck: FC<IItemSelectNeck> = ({ size, isActive, handleSelectNeck }) => {
  const iconsComponents: { [key: string]: FC } = {
    Neck50x18: () => <Neck5018Icon />,
    Neck45x45: () => <Neck4545Icon />,
    Neck60x20: () => <Neck6020Icon />,
    Neck65x15: () => <Neck6515Icon />,
  };

  const Icon = iconsComponents[`Neck${size}`] || null;

  const buttonClassnames = classNames(
    s.item_button,
    isActive && s.item_button__active
  );
  return (
    <li className={s.item}>
      <button onClick={() => handleSelectNeck(size)} className={buttonClassnames}>
        <Icon />
        <p className={s.item_button_text}>{size} mm</p>
      </button>
    </li>
  );
};

export default ItemSelectNeck;
