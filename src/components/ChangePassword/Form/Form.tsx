import {
  IChangePassportData,
  IChangePassportResponse,
} from "@interfaces/setting/changePassword.interface";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaChangePassword } from "@validation/changePassword";
import { changePasswordApi } from "@api/requests/protected";
import ButtonForm from "@common/Form/Button/Button";
import ErrorMessage from "@components/Auth/Error/Error";
import InputForm from "@common/Form/Input/Input";
import notification from "@services/notification";
import routes from "@routes/index";
import s from "@common/Form/form.module.scss";

const FormChangePassword: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassportData>({
    resolver: yupResolver(validationSchemaChangePassword),
  });

  const handleRedirectBack = () => {
    navigate(routes.setting);
  };

  const onSubmit = async (values: IChangePassportData) => {
    console.log("Submitting values:", values);
    const data: IChangePassportResponse = await changePasswordApi(values);
    console.log("API response:", data);
    if (data.status === "rejected") {
      notification.error(data.message);
    } else {
      notification.success(data.message);
      setTimeout(handleRedirectBack, 3000);
    }
  };

  const firstErrorKey = Object.keys(errors)[0] as keyof IChangePassportData;
  const firstErrorMessage = errors[firstErrorKey]?.message;

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {firstErrorMessage && <ErrorMessage text={firstErrorMessage} />}
      <div className={s.form_inputs}>
        <InputForm
          type="password"
          register={register("password")}
          label="Write password"
        />
        <InputForm
          type="password"
          register={register("newPassword")}
          label="Write new password"
        />
        <InputForm
          type="password"
          register={register("confirmPassword")}
          label="Confirm new password"
        />
      </div>
      <div className={s.form_buttons}>
        <ButtonForm
          onEvent={handleRedirectBack}
          theme="outline"
          text="Cancel"
        />
        <ButtonForm type="submit" theme="red" text="Save" />
      </div>
    </form>
  );
};

export default FormChangePassword;
