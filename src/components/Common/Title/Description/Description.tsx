import s from "./description.module.scss";

import { FC } from "react";

interface ITitleProps {
  title: string;
  text: string;
}

const TitleWithDescription: FC<ITitleProps> = ({ title, text }) => {
  return (
    <div className={s.container}>
      <h2 className={s.container_title}>{title}</h2>
      <p className={s.container_text}>{text}</p>
    </div>
  );
};

export default TitleWithDescription;
