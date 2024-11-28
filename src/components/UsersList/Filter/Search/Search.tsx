import { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeUsersSearchValue } from "@redux/slices/dashboard";
import { SearchIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";

import s from "./search.module.scss";

const SearchUsersDashboard: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { search } = useSelector((state: RootState) => state.dashboard);
  const handleUpdateValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUsersSearchValue(e.target.value));
  };
  return (
    <label className={s.search}>
      <input
        placeholder="Quick Search"
        type="text"
        className={s.search_input}
        value={search}
        onChange={handleUpdateValue}
      />
      <button className={s.search_button}>
        <SearchIcon width="24" height="24" />
      </button>
    </label>
  );
};

export default SearchUsersDashboard;
