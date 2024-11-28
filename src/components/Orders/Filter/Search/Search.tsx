import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { changeSearchValue, setIsFilterActive } from "@redux/slices/orders";

import s from "./search.module.scss";

const Search: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { search } = useSelector((state: RootState) => state.orders);

  const handleChangeInput = (value: string) => {
    // Keep the value as-is without removing spaces
    dispatch(changeSearchValue(value));
  };

  const handleStartSearch = () => {
    dispatch(setIsFilterActive());
  };

  return (
    <label className={s.search}>
      <input
        className={s.search_input}
        onChange={(e) => handleChangeInput(e.target.value)}
        value={search}
        placeholder="Search by Order number"
      />
      <button className={s.search_button} onClick={handleStartSearch}>
        <SearchIcon width="24" height="24" />
      </button>
    </label>
  );
};

export default Search;
