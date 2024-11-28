import { FC } from "react";

import WithoutSidebarLayout from "../../components/Common/Layouts/WithoutSidebar/Layout";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

const ChangePasswordPage:FC = () => { 
  return( 
    <WithoutSidebarLayout title="Change password">
      <ChangePassword/>
    </WithoutSidebarLayout>
  )
}

export default ChangePasswordPage