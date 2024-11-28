import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";
import DefaultImg from "@components/Order/DefaultImg/DefaultImg";

const NeckImg: FC = () => {
  const { neck, productType } = useSelector((state: RootState) => state.order);

  if (neck.noLabels) {
    return <DefaultImg/>
  }
  return (
    <img
      src={`/img/neck/${productType}/${neck.type}.png`}
      alt={`${productType} - ${neck.type}`}
      width="500px"
      height="500px"
    />
  );
};

export default NeckImg;
