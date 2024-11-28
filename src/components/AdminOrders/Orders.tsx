import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { getAllOrders, getOrderListInAdmin } from "@redux/slices/adminOrders";
import PaginationComponent from "@common/Pagination/Pagination";
import Title from "@common/Title/Title";

import AdminOrderFilter from "./Filter/Filter";
import AdminTableOrders from "./Table/Table";
import s from "./orders.module.scss";

const AdminOrders: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list, sortType } = useSelector(
    (state: RootState) => state.adminOrders
  );

  const { manufacturer, role } = useSelector((state: RootState) => state.user);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (list === null && role !== null) {
      if (role === "admin") {
        dispatch(getOrderListInAdmin(manufacturer || ""));
      } else {
        dispatch(getAllOrders());
      }
    }
  }, [list, role, manufacturer, dispatch]);

  const totalOrders = list?.length || 0;
  const totalPages = Math.ceil(totalOrders / itemsPerPage);
  const sortedOrders = list
    ?.slice()
    .sort((a, b) =>
      sortType === "Oldest First"
        ? new Date(b.orderData).getTime() - new Date(a.orderData).getTime()
        : new Date(a.orderData).getTime() - new Date(b.orderData).getTime()
    );
  const paginatedList =
    sortedOrders?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={s.container}>
      <Title text="Orders" />
      <div className={s.content}>
        <AdminOrderFilter />
        <AdminTableOrders list={paginatedList} />
      </div>
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

export default AdminOrders;
