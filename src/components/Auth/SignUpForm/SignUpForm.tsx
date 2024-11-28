import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaSignUp } from "@validation/auth";
import { ISignUpFormValues } from "@interfaces/Auth.interfaces";
import { AppDispatch } from "@redux/store";
import { signUp } from "@redux/slices/auth";
import routes from "@routes/index";

import CheckBox from "../Form/Inputs/CheckBox/CheckBox";
import InputDefault from "../Form/Inputs/Default/InputDefault";
import InputDescription from "../Form/Inputs/Description/InputDescription";
import ButtonSend from "../ButtonSend/ButtonSend";
import ButtonsSocial from "../ButtonsSocial/ButtonsSocial";
import ErrorMessage from "../Error/Error";
import FormLayout from "../Form/FormLayout";
import Line from "../Line/Line";
import RedirectLink from "../RedirectLink/RedirectLink";
import Title from "../Title/Title";
import s from "../common.module.scss"

const SignUpForm: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormValues>({
    resolver: yupResolver(validationSchemaSignUp),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      privacyConfirm: false,
    },
  });

  const onSubmit: SubmitHandler<ISignUpFormValues> = (data) => {
    dispatch(signUp(data));
  };
  const firstErrorKey = Object.keys(errors)[0] as keyof ISignUpFormValues;
  const firstErrorMessage = errors[firstErrorKey]?.message;

  return (
    <>
      <Title title="signUp" />
      <ButtonsSocial />
      <Line />
      <ErrorMessage text={firstErrorMessage} />
      <FormLayout handleSubmit={handleSubmit(onSubmit)}>
        <InputDefault
          register={{ ...register("name") }}
          label="Company/Brand Name"
        />
        <InputDefault
          register={{ ...register("phone") }}
          marginT="8px"
          type="tel"
          label="Phone Number"
        />
        <InputDefault
          register={{ ...register("email") }}
          marginT="8px"
          type="email"
          label="E-mail Address"
        />
        <InputDescription
          mode="bottom"
          description="8 characters minimum, at least 1 numerical character, at least 1 special characters, at least 1 uppercase and 1 lowercase letter*"
        >
          <InputDefault
            register={{ ...register("password") }}
            marginT="8px"
            type="password"
            label="Password"
          />
        </InputDescription>
        <CheckBox
          register={{ ...register("privacyConfirm") }}
          marginT="24px"
          text="Please confirm that you agree to our privacy policy"
        />
        <Link className={s.link} to={`${routes.auth}/${routes.resetPassword}`}>
          Forgot your password?
        </Link>
        <ButtonSend marginT="16px" />
      </FormLayout>
      <RedirectLink type="signUp" />
    </>
  );
};

export default SignUpForm;
