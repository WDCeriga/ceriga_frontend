import { FC } from "react";

import Title from "@common/Title/Title";

import Filter from "./Filter/Filter";
import TableOrders from "./Table/Table";
import s from "./orders.module.scss";

import "./common.scss";

const Orders: FC = () => {
  return (
    <section className={s.container}>
      <div>
        <Title text="Orders" />
      </div>
      <div className={s.wrapper}>
        <Filter />
        <TableOrders />
      </div>
    </section>
  );
};

export default Orders;
