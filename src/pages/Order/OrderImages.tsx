import { FC } from "react";

import ImagesOrderPreview from "@components/Order/ImagesPreview/ImagesPreview";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const OrderImages: FC = () => {
  return (
    <WithoutSidebarLayout
      background="#FFF"
      isInfoLabel={false}
      title="Order images preview"
    >
      <ImagesOrderPreview/>
    </WithoutSidebarLayout>
  );
};

export default OrderImages;
