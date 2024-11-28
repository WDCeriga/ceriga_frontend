import { FC } from "react";

import ItemFinalDesign from "../../../Common/Item/Item";
import FinalDesignPreviewLayout from "../../../Common/Layout/Layout";

interface IFinalFading {
  title: string;
  fading: string;
  onEvent: () => void;
  imagesList: string[];
}

const FinalFading: FC<IFinalFading> = ({
  onEvent,
  fading,
  title,
  imagesList,
}) => {
  return (
    <FinalDesignPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinalDesign title="Fading" value={fading} />
      {imagesList && imagesList.length !== 0 && (
        <ItemFinalDesign title="Care label" type="array" array={imagesList} />
      )}
    </FinalDesignPreviewLayout>
  );
};

export default FinalFading;
