import { FC } from "react";

import s from "./title.module.scss";

interface ITitle {
  text: string;
  styleText?: "capitalize" | "none";
  color?: string;
}

const Title: FC<ITitle> = ({ text, styleText, color }) => {
  return (
    <div className={s.container}>
      <h2
        className={s.container_text}
        style={{ textTransform: styleText, color: color || "#333" }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
