import { FC } from "react";

import FinalPreviewLayout from "@components/Order/Common/Layout/Layout";
import ItemFinal from "@components/Order/Common/Item/Item";

interface IFinalPackage {
  title: string;
  onEvent: () => void;
  packageType: boolean | null;
  description: string;
  packageItems: string[];
}

const FinalPackage: FC<IFinalPackage> = ({
  title,
  packageType,
  description,
  onEvent,
  packageItems
}) => {
  return (
    <FinalPreviewLayout title={title} onEvent={onEvent}>
      <ItemFinal
        title="Package type"
        value={packageType ? "Package" : "Unpackage"}
      />
      {description.length !== 0 && (
        <ItemFinal title="Description" value={description} />
      )}
      {packageItems && packageItems.length > 0 && (
        <ItemFinal title="Upload Package" type="array" array={packageItems} />
      )}
    </FinalPreviewLayout>
  );
};

export default FinalPackage;
