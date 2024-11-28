import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { getOrdersList } from "@redux/slices/orders";

import HeadTableOrders from "./Head/Head";
import OrderItem from "./Item/Item";
import s from "./table.module.scss";

const TableOrders: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { ordersList, isFilter, search, sortType } = useSelector(
    (state: RootState) => state.orders
  );
  useEffect(() => {
    dispatch(getOrdersList());
  }, [dispatch]);
  let currentOrdersList;
  if (isFilter) {
    const searchLower = search.toLowerCase();
    currentOrdersList = ordersList.filter((item) => {
      const idString = `${item.id}`.toLowerCase();
      const productTypeString = item.productType
        ? item.productType.toString().toLowerCase()
        : "";
      return (
        idString.startsWith(searchLower) ||
        productTypeString.startsWith(searchLower)
      );
    });
  } else {
    currentOrdersList = ordersList;
  }
  currentOrdersList = currentOrdersList
    ?.slice()
    .sort((a, b) =>
      sortType === "Oldest First"
        ? new Date(b.orderData).getTime() - new Date(a.orderData).getTime()
        : new Date(a.orderData).getTime() - new Date(b.orderData).getTime()
    );
  console.log(currentOrdersList);
  return (
    <table className={s.table}>
      <HeadTableOrders />
      <tbody className={s.table_body}>
        {currentOrdersList.map((order) => (
          <OrderItem key={order.id} {...order} />
        ))}
      </tbody>
    </table>
  );
};

export default TableOrders;
