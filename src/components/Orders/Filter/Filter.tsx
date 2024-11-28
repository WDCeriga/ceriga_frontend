import { FC } from "react";

import SortOrders from "@common/Sort/Sort";

import FilterList from "./List/List";
import Search from "./Search/Search";
import s from "./filter.module.scss";

const Filter: FC = () => {
  return (
    <div className={s.container}>
      <Search />
      <SortOrders type="forUsers" />
      <FilterList />
    </div>
  );
};

export default Filter;
