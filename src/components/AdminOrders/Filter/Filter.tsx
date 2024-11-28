import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";
import SortAdminOrders from "@common/Sort/Sort";

import AddSubAdmin from "./AddSubAdmin/AddSubAdmin";
import FilterList from "./List/List";
import Search from "./Search/Search";
import s from "./filter.module.scss";

const AdminOrderFilter: FC = () => {
  const { role } = useSelector((state: RootState) => state.user);
  return (
    <div className={s.container}>
      <Search />
      <SortAdminOrders type="forAdmins" />
      <div className={s.filterWrap}>
        <FilterList />
        {role === "admin" && <AddSubAdmin />}
      </div>
    </div>
  );
};

export default AdminOrderFilter;
