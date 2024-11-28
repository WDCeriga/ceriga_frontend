import { FC } from "react";

import { printingType } from "@interfaces/order/printing.interface";
import FinalPreviewLayout from "@components/Order/Common/Layout/Layout";
import ItemFinal from "@components/Order/Common/Item/Item";

interface IFinalPrinting {
  title: string;
  printingValue: printingType | "";
  onEvent: () => void;
}

const FinalPrinting: FC<IFinalPrinting> = ({
  title,
  printingValue,
  onEvent,
}) => {
  return (
    <FinalPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinal title="Printing" value={printingValue} />
    </FinalPreviewLayout>
  );
};

export default FinalPrinting;
