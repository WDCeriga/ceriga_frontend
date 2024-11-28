import { FC, ReactNode } from "react";

import s from "./layout.module.scss";

interface IOrderLayout {
  children: ReactNode;
}

const OrderLayout: FC<IOrderLayout> = ({ children }) => {
  return <section className={s.layout}>{children}</section>;
};

export default OrderLayout;
