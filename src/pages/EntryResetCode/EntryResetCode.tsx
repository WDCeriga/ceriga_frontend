import { FC } from "react";
import { Helmet } from "react-helmet";

import AuthLayout from "@common/AuthLayout/AuthLayout";
import ResetCode from "@components/Auth/ResetCode/ResetCode";

const EntryResetCodePage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Reset Code</title>
      </Helmet>
      <AuthLayout>
        <ResetCode />
      </AuthLayout>
    </>
  );
};

export default EntryResetCodePage;
