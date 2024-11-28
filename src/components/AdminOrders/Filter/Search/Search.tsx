import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeSearchAdminOrder } from "@redux/slices/adminOrders";
import { SearchIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";

import s from "./search.module.scss";

const Search: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { search } = useSelector((state: RootState) => state.adminOrders);

  const handleChangeInput = (value: string) => {
    dispatch(changeSearchAdminOrder(value));
  };

  return (
    <label className={s.search}>
      <input
        className={s.search_input}
        onChange={(e) => handleChangeInput(e.target.value)}
        value={search}
        placeholder="Search by Order number"
      />
      <button className={s.search_button}>
        <SearchIcon width="20" height="20" />
      </button>
    </label>
  );
};

export default Search;
