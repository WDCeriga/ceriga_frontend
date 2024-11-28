import { FC } from "react";

import FilterUsersByRole from "./ByRole/ByRole";
import SearchUsersDashboard from "./Search/Search";
import s from "./filter.module.scss";

const FilterUsersDashboard: FC = () => {
  return (
    <div className={s.container}>
      <SearchUsersDashboard />
      <FilterUsersByRole/>
    </div>
  );
};

export default FilterUsersDashboard;
