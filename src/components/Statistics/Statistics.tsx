import {
  getAnalyticsForOrder,
  getAnalyticsForRevenue,
  getAnalyticsForUsers,
} from "@redux/slices/analytics";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { setDataAnalyticsForUsers } from "@services/analitycs/users";
import { setDataAnalyticsForOrders } from "@services/analitycs/orders";
import { setDataAnalyticsForRevenue } from "@services/analitycs/revenue";
import Analytics from "@components/Analytics/Analytics";
import Title from "@common/Title/Title";

import s from "./statistics.module.scss";

const Statistics: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, orders, revenue } = useSelector(
    (state: RootState) => state.analytics
  );
  useEffect(() => {
    if (!users.isUpload) {
      dispatch(getAnalyticsForUsers());
    }
  }, [users.isUpload, dispatch]);
  useEffect(() => {
    if (!orders.isUpload) {
      dispatch(getAnalyticsForOrder());
    }
  }, [orders.isUpload, dispatch]);
  useEffect(() => {
    if (!revenue.isUpload) {
      dispatch(getAnalyticsForRevenue());
    }
  });
  return (
    <section className={s.container}>
      <Title text="Statistics" />
      <ul className={s.list}>
        <li className={s.list_item}>
          {users.isUpload && (
            <Analytics title="Users" items={setDataAnalyticsForUsers(users)} />
          )}
        </li>
        <li className={s.list_item}>
          {orders.isUpload && (
            <Analytics
              title="Orders"
              items={setDataAnalyticsForOrders(orders)}
            />
          )}
        </li>
        <li className={s.list_item}>
          {revenue.isUpload && (
            <Analytics
              title="Amount made"
              items={setDataAnalyticsForRevenue(revenue)}
            />
          )}
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
