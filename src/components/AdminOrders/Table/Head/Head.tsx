import { FC } from "react";

import { localGetItem } from "@services/localStorage";

import s from "./head.module.scss";

const AdminHeadTableOrders: FC = () => {
  const role = localGetItem("role") || "";
  return (
    <thead className={s.header}>
      <tr className={s.header_row}>
        <th className={s.header_row_item}>Order</th>
        {/* <th className={`${s.header_row_item} ${s.email}`}>Email</th> */}
        <th className={s.header_row_item}>Order date</th>
        <th className={`${s.header_row_item} ${s.status}`}>Status</th>
        <th className={`${s.header_row_item} ${s.price}`}>
          {role === "Admin" ? "Assign manufacturer" : "Estimation Price"}
        </th>
        <th className={s.header_row_item}>Invoice status</th>
        {/* <th className={s.header_row_item}></th> */}
      </tr>
    </thead>
  );
};

export default AdminHeadTableOrders;
