import { Loading } from "notiflix";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaResetPassword } from "@validation/auth";
import { IResetPassword } from "@interfaces/Auth.interfaces";
import { checkForgetPassApi } from "@api/requests/auth";
import notification from "@services/notification";
import routes from "@routes/index";

import InputDefault from "../Form/Inputs/Default/InputDefault";
import InputDescription from "../Form/Inputs/Description/InputDescription";
import ButtonSend from "../ButtonSend/ButtonSend";
import ErrorMessage from "../Error/Error";
import FormLayout from "../Form/FormLayout";
import Line from "../Line/Line";
import Title from "../Title/Title";

const ResetCode: FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("resetCode");
  const { userId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaResetPassword),
  });
  const onSubmit: SubmitHandler<IResetPassword> = async (data) => {
    Loading.standard();
    try {
      await checkForgetPassApi({
        userId: userId || "",
        code: data.code,
        password: data.password,
      });
      Loading.remove();
      setStatus("success");
      setTimeout(() => {
        navigate(routes.auth);
      }, 1000);
    } catch (err) {
      Loading.remove();
      notification.error("Check code for reset password");
    }
  };
  const firstErrorKey = Object.keys(errors)[0] as keyof IResetPassword;
  const firstErrorMessage = errors[firstErrorKey]?.message;
  if (status === "success") {
    return (
      <div>
        <h2>Success!</h2>
        <p>Password has been update!</p>
      </div>
    );
  }
  return (
    <>
      <Title title="resetCode" />
      <FormLayout handleSubmit={handleSubmit(onSubmit)}>
        <InputDescription mode="top" description="Enter code for reset">
          <ErrorMessage text={firstErrorMessage} />
          <InputDefault
            register={{ ...register("code") }}
            label=""
            placeholder="xxxxxx"
          />
          <InputDefault
            register={{ ...register("password") }}
            label=""
            type="password"
            placeholder="Write your password"
          />
          <InputDefault
            register={{ ...register("rePassword") }}
            label=""
            type="password"
            placeholder="Repeat your password"
          />
        </InputDescription>
        <ButtonSend marginT="24px" />
      </FormLayout>
      <Line />
    </>
  );
};

export default ResetCode;
