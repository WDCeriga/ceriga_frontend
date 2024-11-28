import { FC } from "react";

import { ISubparametersPreviewTable } from "@interfaces/order/paramsPreview.interface";

import s from "./table.module.scss";

interface ITableInfo {
  data: ISubparametersPreviewTable[];
}

const TablePreviewOrder: FC<ITableInfo> = ({ data }) => {
  const headers: string[] = data.map((item) => item.title);

  const values: string[] = data.map((item) => item.value);
  return (
    <table className={s.table}>
      <thead className={s.table_head}>
        <tr className={s.table_head_row}>
          {headers.map((header, index) => (
            <th className={s.table_head_row_item} key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className={s.table_body}>
        <tr className={s.table_body_row}>
          {values.map((value, index) => (
            <td className={s.table_body_row_item} key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default TablePreviewOrder;
