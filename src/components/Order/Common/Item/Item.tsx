import { FC } from "react";

import s from "./item.module.scss";

interface IItemFinal {
  title: string;
  value?: string;
  type?: string;
  array?: string[];
}

const ItemFinal: FC<IItemFinal> = ({ title, value, type, array }) => {
  return (
    <div className={s.container}>
      <h3 className={s.container_title}>{title}</h3>
      {type === "color" && value && (
        <div className={s.container_color} style={{ background: value }}></div>
      )}
      {type === "array" &&
        array &&
        array.map((item) => (
          <p key={item} className={s.container_text}>
            {item}
          </p>
        ))}
      {!type && <p className={s.container_text}>{value}</p>}
    </div>
  );
};

export default ItemFinal;
