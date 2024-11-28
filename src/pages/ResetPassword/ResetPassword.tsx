import { FC } from "react";
import { Helmet } from "react-helmet";


import AuthLayout from "@common/AuthLayout/AuthLayout";
import ResetPassword from "@components/Auth/ResetPassword/ResetPassword";

const ResetPasswordPage:FC = () => {
  return ( 
    <>
    <Helmet>
      <title>Reset password</title>
    </Helmet>
    <AuthLayout>
      <ResetPassword/>
    </AuthLayout>
    </>
  )
}

export default ResetPasswordPage