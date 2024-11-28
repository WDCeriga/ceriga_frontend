import { FC } from "react";

import { ITableSizeRow } from "@interfaces/order/sizes.interface";

import BodyTableSize from "./Body/Body";
import HeadTableSize from "./Head/Head";
import s from "./table.module.scss";

export interface ISizeTable {
  isPreview?: boolean;
  sizes?: ITableSizeRow[] | null;
}

const SizeTable: FC<ISizeTable> = ({ isPreview, sizes }) => {
  return (
    <table className={s.table}>
      <HeadTableSize />
      <div className={s.table_gap}></div>
      <BodyTableSize isPreview={isPreview} sizes={sizes} />
    </table>
  );
};

export default SizeTable;
