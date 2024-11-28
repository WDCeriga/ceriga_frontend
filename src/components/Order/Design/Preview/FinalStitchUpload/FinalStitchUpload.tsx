import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

import ItemFinalDesign from "../../../Common/Item/Item";
import FinalDesignPreviewLayout from "../../../Common/Layout/Layout";

interface IFinalStitchUpload {
  title: string;
  stitching: string;
  onEvent: () => void;
  imagesList: string[];
}

const FinalStitchUpload: FC<IFinalStitchUpload> = ({
  stitching,
  onEvent,
  title,
  imagesList,
}) => {
  const {description} = useSelector((state:RootState) => state.order.stitching)
  return (
    <FinalDesignPreviewLayout onEvent={onEvent} title={title}>
      <ItemFinalDesign title="Stitching" value={stitching} />
      {imagesList && imagesList.length !== 0 && (
        <ItemFinalDesign title="Upload Design" type="array" array={imagesList} />
      )}
      {description.length > 0 && <ItemFinalDesign title="Description" value={description} />}
    </FinalDesignPreviewLayout>
  );
};

export default FinalStitchUpload;
