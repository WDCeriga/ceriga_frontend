import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeActiveFilter } from "@redux/slices/orders";
import { filterListStore } from "@constants/orders/orders";
import { filterType } from "@interfaces/orders/filter.interface";
import { AppDispatch, RootState } from "@redux/store";

import FilterItem from "./Item/Item";
import s from "./list.module.scss";

const FilterList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeFilter } = useSelector((state: RootState) => state.orders);
  const handleChangeFilter: (arg0: filterType) => void = (newItem) => {
    dispatch(changeActiveFilter(newItem));
  };
  return (
    <ul className={s.list}>
      {filterListStore.map((item) => (
        <FilterItem
          key={item.type}
          {...item}
          isActive={activeFilter === item.type}
          onEvent={handleChangeFilter}
        />
      ))}
    </ul>
  );
};
export default FilterList;
