import {
  materialTitle,
  materialValue,
} from "@interfaces/order/material.interface";
import { FC } from "react";

import FinalPreviewLayout from "@components/Order/Common/Layout/Layout";
import ItemFinalDesign from "@components/Order/Common/Item/Item";

interface IFinalMaterial {
  title: string;
  materialName: materialTitle;
  materialValue: materialValue;
  onEvent: () => void;
}
const FinalMaterial: FC<IFinalMaterial> = ({
  title,
  materialName,
  materialValue,
  onEvent,
}) => {
  return (
    <FinalPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinalDesign title="Material Name" value={materialName} />
      <ItemFinalDesign title="Material GSM" value={`${materialValue}`} />
    </FinalPreviewLayout>
  );
};

export default FinalMaterial;
