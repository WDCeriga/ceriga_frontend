import { FC, ReactNode } from "react";

import TitleFinalDesign from "../Title/Title";
import s from "./layout.module.scss";

interface IFinalPreviewLayout {
  title: string;
  onEvent: () => void;
  children: ReactNode;
}

const FinalPreviewLayout: FC<IFinalPreviewLayout> = ({
  children,
  onEvent,
  title,
}) => {
  return (
    <section className={s.container}>
      <TitleFinalDesign title={title} onEvent={onEvent} />
      {children}
    </section>
  );
};

export default FinalPreviewLayout;