import { FC } from "react";

import EditShipping from "@components/EditShipping/EditShipping";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const EditShippingPage: FC = () => {
  return (
    <WithoutSidebarLayout title="Edit Shiping">
      <EditShipping />
    </WithoutSidebarLayout>
  );
};

export default EditShippingPage;
