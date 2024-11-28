import s from "./item.module.scss";

import { FC } from "react";
import classNames from "classnames";

import {
  filterType,
  IFilterItem,
} from "@interfaces/orders/filter.interface";

interface IFilterItemComponent extends IFilterItem {
  isActive: boolean;
  onEvent: (arg0: filterType) => void;
}

const FilterItem: FC<IFilterItemComponent> = ({
  text,
  type,
  isActive,
  onEvent,
}) => {
  const buttonClassnames = classNames(
    s.item_button,
    isActive && s.item_button__active
  );
  return (
    <li className={s.item}>
      <button className={buttonClassnames} onClick={() => onEvent(type)}>
        {text}
      </button>
    </li>
  );
};

export default FilterItem;
