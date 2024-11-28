import { FC } from "react";
import { Helmet } from "react-helmet";

import AuthLayout from "@common/AuthLayout/AuthLayout";
import { SignInForm } from "@components/Auth";

const SignInPage: FC = () => {
  return (
    <>
    <Helmet>
      <title>Sign-in</title>
    </Helmet>
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
    </>
  );
};

export default SignInPage;
