import { FC } from "react";

import FinalPreviewLayout from "@components/Order/Common/Layout/Layout";
import ItemFinalDesign from "@components/Order/Common/Item/Item";

interface IFinalColor {
  title: string;
  color: string;
  dyeStyle: string;
  onEvent: () => void;
}
const FinalColor: FC<IFinalColor> = ({ title, onEvent, color, dyeStyle }) => {
  return (
    <FinalPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinalDesign title="Coloring style" value={dyeStyle} />
      <ItemFinalDesign title="Color" type="color" value={color} />
    </FinalPreviewLayout>
  );
};

export default FinalColor;
