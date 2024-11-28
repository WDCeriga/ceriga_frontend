import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { localGetItem } from "@services/localStorage";

const PrivateSuperAdminRoutes: FC = () => {
  const token: string | null = localGetItem("token");
  const role: string | null = localGetItem("role");
  return token && role === "superAdmin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateSuperAdminRoutes;
