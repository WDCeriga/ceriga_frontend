import { FC } from "react";

//import Order from "@components/Order/Order";
import Order from "@components/Order/Order";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const OrderPage: FC = () => {
  return (
    <WithoutSidebarLayout background="#FFF" isInfoLabel={true} title="Order">
      <Order />
    </WithoutSidebarLayout>
  );
};

export default OrderPage;
