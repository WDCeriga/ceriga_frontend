import { FC } from "react";
import { Helmet } from "react-helmet";
import MainLayout from "@common/Layouts/Main/Layout";
import Orders from "@components/Orders/Orders";

const OrdersPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <MainLayout>
        <Orders/>
      </MainLayout>
    </>
  );
};

export default OrdersPage;
