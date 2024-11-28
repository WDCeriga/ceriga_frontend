import { FC } from "react";
import { Helmet } from "react-helmet";

import MainLayout from "@common/Layouts/Main/Layout";
import Statistics from "@components/Statistics/Statistics";

const StatisticsPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <MainLayout>
        <Statistics/>
      </MainLayout>
    </>
  );
};

export default StatisticsPage;
