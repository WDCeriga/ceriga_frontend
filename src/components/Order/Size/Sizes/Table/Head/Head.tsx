import { FC } from "react";

import s from "./head.module.scss"

const HeadTableSize: FC = () => {
  return (
    <thead className={s.head}>
      <tr className={s.row}>
        <th className={s.item}></th>
        <th className={s.item}>XS</th>
        <th className={s.item}>S</th>
        <th className={s.item}>M</th>
        <th className={s.item}>L</th>
        <th className={s.item}>XL</th>
        <th className={s.item}>XXL</th>
      </tr>
    </thead>
  );
};

export default HeadTableSize;
