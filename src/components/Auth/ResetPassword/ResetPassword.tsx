import { Loading } from "notiflix";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { IForgotPassword } from "@interfaces/Auth.interfaces";
import { validationSchemaForgotPass } from "@validation/auth";
import { forgotPassApi } from "@api/requests/auth";
import notification from "@services/notification";
import routes from "@routes/index";

import InputDefault from "../Form/Inputs/Default/InputDefault";
import InputDescription from "../Form/Inputs/Description/InputDescription";
import ButtonSend from "../ButtonSend/ButtonSend";
import ErrorMessage from "../Error/Error";
import FormLayout from "../Form/FormLayout";
import Line from "../Line/Line";
import Title from "../Title/Title";
import s from "../common.module.scss";

const ResetPassword: FC = () => {
  const [status, setStatus] = useState<string>("resetPassword");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaForgotPass),
  });
  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      Loading.standard();
      await forgotPassApi(data);
      notification.success(
        "Success! A reset code has been sent to your email."
      );
      Loading.remove();
      setTimeout(() => {
        setStatus("success");
      }, 1000);
    } catch (err) {
      Loading.remove();
      notification.error(
        "Failed to send code for reset password, please try again later."
      );
    }
  };
  const firstErrorKey = Object.keys(errors)[0] as keyof IForgotPassword;
  const firstErrorMessage = errors[firstErrorKey]?.message;
  if (status === "success") {
    return (
      <div>
        <h2>Success!</h2>
        <p>A reset code has been sent to your email.</p>
      </div>
    );
  }
  return (
    <>
      <Title title="resetEmail" />
      <FormLayout handleSubmit={handleSubmit(onSubmit)}>
        <InputDescription mode="top" description="Enter your email address">
          <ErrorMessage text={firstErrorMessage} />
          <InputDefault
            register={{ ...register("email") }}
            label=""
            placeholder="example@gmail.com"
          />
        </InputDescription>
        <Link className={s.link} to={`${routes.auth}`}>
          Move back
        </Link>
        <ButtonSend marginT="24px" />
      </FormLayout>
      <Line />
    </>
  );
};

export default ResetPassword;
