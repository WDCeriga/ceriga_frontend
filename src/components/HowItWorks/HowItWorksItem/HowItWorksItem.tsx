import s from "./HowItWorksItem.module.scss";

import { FC } from "react";
import { IlistItem } from "@interfaces/HowItWorks.interfaces";

const HowItWorksItem: FC<IlistItem> = ({ type, url, title, text, step }) => {
  return (
    <li className={s.item}>
      {type === "photo" ? (
        <img
          className={s.item_img}
          width="100%"
          height="220px"
          src={`/img/howItWorks/${url}`}
        />
      ) : (
        <div className={s.item__texts}>
          <div className={s.item_left}>
            <div className={s.item_left_step}>{step}</div>
          </div>
          <div className={s.item_right}>
            <h3 className={s.item_right_title}>{title}</h3>
            <p className={s.item_right_text}>{text}</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default HowItWorksItem;
