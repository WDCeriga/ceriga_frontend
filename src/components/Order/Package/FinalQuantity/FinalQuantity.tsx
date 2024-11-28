import { FC } from "react";

import { IQuantityItem, quantityType } from "@interfaces/order/quantity.interface";
import FinalPreviewLayout from "@components/Order/Common/Layout/Layout";
import ItemFinal from "@components/Order/Common/Item/Item";

interface IFinalQuantity {
  title: string;
  onEvent: () => void;
  quantityType: quantityType | null;
  quantityList: IQuantityItem[];
}

const FinalQuantity: FC<IFinalQuantity> = ({
  title,
  onEvent,
  quantityType,
  quantityList,
}) => {
  const quantityTotal = quantityList.reduce((sum, item) => sum + item.value, 0);
  return (
    <FinalPreviewLayout title={title} onEvent={onEvent}>
      <ItemFinal title="Quantity type" value={`${quantityType}`} />
      <ItemFinal title="Total quantity" value={quantityTotal.toString()} />
    </FinalPreviewLayout>
  );
};

export default FinalQuantity;
