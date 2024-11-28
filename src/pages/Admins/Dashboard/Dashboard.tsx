import { FC } from "react";
import { Helmet } from "react-helmet";

import AdminDashboard from "@components/AdminDashboard/AdminDashboard";
import MainLayout from "@common/Layouts/Main/Layout";

const AdminDashboardPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <MainLayout>
       <AdminDashboard/>
      </MainLayout>
    </>
  );
};

export default AdminDashboardPage;
