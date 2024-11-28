import { FC } from "react";
import { useSelector } from "react-redux";

import { INeck } from "@interfaces/order/design.interface";
import { RootState } from "@redux/store";

import ItemFinalDesign from "../../../Common/Item/Item";
import FinalPreviewLayout from "../../../Common/Layout/Layout";

interface IFinalNeck {
  title: string;
  neck: INeck;
  onEvent: () => void;
}

const FinalNeck: FC<IFinalNeck> = ({ title, onEvent, neck }) => {
  const { neckDescription } = useSelector((state: RootState) => state.order);
  return (
    <FinalPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinalDesign title="Size" value={neck.type || "none"} />
      <ItemFinalDesign
        title="Materials"
        value={neck.additional.material || "none"}
      />
      <ItemFinalDesign
        title="Design Options"
        value={neck.additional.color ? "Custom Labels" : "Standard"}
      />
      {neck.additional.color.length !== 0 && (
        <ItemFinalDesign
          title="Choose Neck Label Color:"
          type="color"
          value={neck.additional.color}
        />
      )}
      {
        neckDescription && neckDescription.length > 0 && (
          <ItemFinalDesign title="Neck Label Description" value={neckDescription} />
        )
      }
      
    </FinalPreviewLayout>
  );
};

export default FinalNeck;
