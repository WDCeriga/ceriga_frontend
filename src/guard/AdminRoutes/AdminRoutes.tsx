import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { localGetItem } from "@services/localStorage";

const PrivateAdminRoutes: FC = () => {
  const token: string | null = localGetItem("token");
  const role: string | null = localGetItem("role");
  return (token && role === "superAdmin") || role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateAdminRoutes;
