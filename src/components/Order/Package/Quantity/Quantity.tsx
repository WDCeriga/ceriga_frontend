import { FC } from "react";

import CheckboxGroup from "./CheckboxGroup/CheckboxGroup";
import RowQuantity from "./Row/Row";
import TopQuantity from "./Top/Top";
import s from "./quantity.module.scss";

interface IQuantityOrder {
  handleClose: () => void
}

const QuantityOrder: FC<IQuantityOrder> = ({handleClose}) => {
  return (
    <section className={s.container}>
      <TopQuantity handleClose={handleClose}/>
      <CheckboxGroup />
      <RowQuantity />
    </section>
  );
};

export default QuantityOrder;
