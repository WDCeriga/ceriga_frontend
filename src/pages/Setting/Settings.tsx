import { FC } from "react";

import Setting from "@components/Setting/Setting";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const SettingPage: FC = () => {
  return (
    <WithoutSidebarLayout  title="Setting">
      <Setting/>
    </WithoutSidebarLayout>
  );
};

export default SettingPage;
