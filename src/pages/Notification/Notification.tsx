import { FC } from "react";

import MainLayout from "@common/Layouts/Main/Layout";
import Notification from "@components/Notification/Notification";

const NotificationPage:FC = () => { 
  return ( 
    <MainLayout background="#F9FAF9">
      <Notification/>
    </MainLayout>
  )
}

export default NotificationPage