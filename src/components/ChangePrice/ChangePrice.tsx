import { FC } from "react";

import Title from "@common/Title/Title";

import TableChangePrice from "./Table/Table";
import s from "./changePrice.module.scss";

const ChangePrice: FC = () => {
  return (
    <section className={s.container}>
      <Title text="Change Price" />
      <TableChangePrice/>
    </section>
  );
};

export default ChangePrice;
