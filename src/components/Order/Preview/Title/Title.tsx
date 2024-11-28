import { FC } from "react";

import { productType } from "@interfaces/Product.interface";

import s from "./title.module.scss";

interface ITitlePreview {
  product: productType | string;
}

const TitlePreview: FC<ITitlePreview> = ({product}) => {
  return (
    <div className={s.container}>
      <h2 className={s.container_text}>
        Clothing Type:<span className={s.container_text__product}>{product}</span>
      </h2>
    </div>
  );
};

export default TitlePreview;
