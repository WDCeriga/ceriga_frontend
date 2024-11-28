import { FC } from "react";
import { Helmet } from "react-helmet";

import ChangePrice from "@components/ChangePrice/ChangePrice";
import MainLayout from "@common/Layouts/Main/Layout";

const ChangePricePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Change Price</title>
      </Helmet>
      <MainLayout>
        <ChangePrice />
      </MainLayout>
    </>
  );
};

export default ChangePricePage;
