import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch } from "@redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaSignIn } from "@validation/auth";
import { ISignInFormValues } from "@interfaces/Auth.interfaces";
import { signIn } from "@redux/slices/auth";
import routes from "@routes/index";

import InputDefault from "../Form/Inputs/Default/InputDefault";
import InputDescription from "../Form/Inputs/Description/InputDescription";
import ButtonSend from "../ButtonSend/ButtonSend";
import ButtonsSocial from "../ButtonsSocial/ButtonsSocial";
import ErrorMessage from "../Error/Error";
import FormLayout from "../Form/FormLayout";
import Line from "../Line/Line";
import RedirectLink from "../RedirectLink/RedirectLink";
import Title from "../Title/Title";
import s from "../common.module.scss";

const SignInForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaSignIn),
  });
  const onSubmit: SubmitHandler<ISignInFormValues> = (data) => {
    dispatch(signIn(data));
  };

  const firstErrorKey = Object.keys(errors)[0] as keyof ISignInFormValues;
  const firstErrorMessage = errors[firstErrorKey]?.message;

  return (
    <>
      <Title title="signIn" />
      <ButtonsSocial />
      <Line />
      <ErrorMessage text={firstErrorMessage} />
      <FormLayout handleSubmit={handleSubmit(onSubmit)}>
        <InputDescription
          mode="bottom"
          description="Use an organization email to easily collaborate with
          teammates"
        >
          <InputDefault
            register={{ ...register("email") }}
            type="email"
            label="Email"
            placeholder="Enter your email address..."
          />
        </InputDescription>
        <InputDefault
          register={{ ...register("password") }}
          marginT="16px"
          type="password"
          label="Password"
        />
        <Link className={s.link} to={`${routes.auth}/${routes.resetPassword}`}>
          Forgot your password?
        </Link>
        <ButtonSend marginT="24px" />
      </FormLayout>

      <RedirectLink type="signIn" />
    </>
  );
};

export default SignInForm;
