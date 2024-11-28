import { FC } from "react";

import s from "./head.module.scss";

const HeadTableOrders: FC = () => {
  return (
    <thead className={s.header}>
      <tr className={s.header_row}>
        <th className={s.header_row_item}>Order</th>
        <th  className={s.header_row_item}>Tracking</th>
        <th className={s.header_row_item}>Order date</th>
        <th className={s.header_row_item}>Order status</th>
        <th className={s.header_row_item}></th>
      </tr>
    </thead>
  );
};

export default HeadTableOrders;
