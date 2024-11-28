import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { localGetItem } from "../../services/localStorage";
import routes from "../../routes";

const PrivateRoutes:FC = () => { 
  const token:string | null = localGetItem("token")
  return(
    token ? <Outlet/> : <Navigate to={routes.auth}/>
  )
}

export default PrivateRoutes