import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { getUsersList } from "@redux/slices/dashboard";
import { filterUsersByRole, filterUsersBySearch } from "@services/filterUsers";
import PaginationComponent from "@common/Pagination/Pagination";

import FilterUsersDashboard from "./Filter/Filter";
import TableUsers from "./Table/Table";
import s from "./userList.module.scss";

const UsersList: FC = () => {
  const {search} = useSelector(
    (state: RootState) => state.dashboard
  );
  const { filterByRole } = useSelector((state: RootState) => state.dashboard);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const { users } = useSelector((state: RootState) => state.dashboard);
  const filterUsersStoreByRole = filterUsersByRole(users, filterByRole);
  const filteredUsers = search.length > 0 
    ? filterUsersBySearch(filterUsersStoreByRole, search)
    : filterUsersStoreByRole;
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={s.section}>
      <div>Filters</div>
      <FilterUsersDashboard />
      <TableUsers
        currentPage={currentPage}
        users={filteredUsers}
        itemsPerPage={itemsPerPage}
      />
      <div className={s.pagination}>
        <PaginationComponent
          count={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default UsersList;
