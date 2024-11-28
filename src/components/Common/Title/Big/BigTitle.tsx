import s from "./bigTitle.module.scss";
import { FC } from "react";
import Title from "../Title";

interface IBigTitle {
  text: string;
}

const BigTitle: FC<IBigTitle> = ({ text }) => {
  return (
    <div className={s.block}>
      <Title text={text} />
    </div>
  );
};

export default BigTitle;
