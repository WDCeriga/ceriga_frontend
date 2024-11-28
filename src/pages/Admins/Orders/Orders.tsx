import { FC } from "react";
import { Helmet } from "react-helmet";

import { localGetItem } from "@services/localStorage";
import AdminOrders from "@components/AdminOrders/Orders";
import MainLayout from "@common/Layouts/Main/Layout";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const AdminOrdersPage: FC = () => {
  const role = localGetItem("role");
  if (role === "admin") {
    return (
      <WithoutSidebarLayout background="#FFF" title="Orders list">
        <AdminOrders />
      </WithoutSidebarLayout>
    );
  }
  return (
    <>
      <Helmet>
        <title>Orders list</title>
      </Helmet>
      <MainLayout>
        <AdminOrders />
      </MainLayout>
    </>
  );
};

export default AdminOrdersPage;
