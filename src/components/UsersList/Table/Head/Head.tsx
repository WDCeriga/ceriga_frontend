import { FC } from "react";

import s from "./head.module.scss";

const HeadUserTable: FC = () => {
  return (
    <thead className={s.header}>
      <tr className={s.header_row}>
        <th className={s.header_row_item}>
          <p className={s.header_row_item_text}>Name</p>
        </th>
        <th className={s.header_row_item}>
          <p className={s.header_row_item_text}>Role</p>
        </th>
        <th className={s.header_row_item}>
          <p className={s.header_row_item_text}>Manufactures</p>
        </th>
        <th className={s.header_row_item}>
          <p className={s.header_row_item_text}>Email</p>
        </th>
        <th className={`${s.header_row_item} ${s.dates}`}>Last Dates</th>
        <th className={s.header_row_item} >
          <p className={s.header_row_item_text} style={{textAlign:"center"}}>Amount of orders</p>
        </th>
      </tr>
    </thead>
  );
};

export default HeadUserTable;
