import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

import ProductWithColor from "../ProductWithColor/ProductWithColor";

const DefaultImg: FC = () => {
  const { productType, color } = useSelector((state: RootState) => state.order);
  return (
    <ProductWithColor
      color={color.hex || ""}
      product={productType || ""}
      path={color.path}
    />
  );
};

export default DefaultImg;
