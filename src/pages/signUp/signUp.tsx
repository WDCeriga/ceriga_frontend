import { FC } from "react";
import { Helmet } from "react-helmet";

import AuthLayout from "@common/AuthLayout/AuthLayout";
import { SignUpForm } from "@components/Auth";

const SignUpPage:FC = () => { 
  return (
    <>
    <Helmet>
      <title>Sign-up</title>
    </Helmet>
    <AuthLayout>
      <SignUpForm/>
    </AuthLayout>
    </>
  )
}

export default SignUpPage