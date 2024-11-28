import classNames from "classnames";
import { FC, useState } from "react";

import { IProduct } from "@interfaces/bll/products.interface";
import routes from "@routes/index";

import Buttons from "./Buttons/Buttons";
import s from "./product.module.scss";

interface IProductCard extends IProduct {
  size?: "small" | "default";
}

const Product: FC<IProductCard> = ({
  _id,
  name,
  images,
  size,
  categories,
  fits,
}) => {
  const imgSrc = `${routes.server.base}${
    images && images[0] ? images[0] : routes.server.products.defaultImg
  }`;
  const [isMouseOver, setMouseOver] = useState<boolean>(false);
  const contentClasses = classNames(
    s.content,
    size === "small" && s.content__small
  );
  const imageClasses = classNames(
    s.content_img,
    size === "small" && s.content_img__small
  );
  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };
  return (
    <div
      className={contentClasses}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={s.content_top}>
        <div className={s.content_top_category}>
          <p className={s.content_top_category_text}>
            {categories && categories[0]}
          </p>
        </div>
        <h3 className={s.content_top_name}>{name}</h3>
      </div>
      <div className={s.content_size}>
        {fits && fits.length !== 0 ? fits.length : 1} styles
      </div>
      <img
        crossOrigin="anonymous"
        className={imageClasses}
        src={imgSrc}
        alt={name}
      />
      {isMouseOver && <Buttons category={categories[0]} idProduct={_id} size={size || "default"} />}
    </div>
  );
};

export default Product;
