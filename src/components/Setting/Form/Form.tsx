import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateSettingInfoApi } from "@api/requests/protected";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaSetting } from "@validation/setting";
import { ISettingForm } from "@interfaces/setting/setting.interface";
import { RootState } from "@redux/store";
import { CloseIcon } from "@common/Icons/CommonIcon";
import ButtonForm from "@components/Common/Form/Button/Button";
import ErrorMessage from "@components/Auth/Error/Error";
import InputForm from "@common/Form/Input/Input";
import notification from "@services/notification";
import routes from "@routes/index";

import s from "../../Common/Form/form.module.scss";

const FormSetting: FC = () => {
  const navigate = useNavigate();
  
  const initialValue: ISettingForm = useSelector((state: RootState) => ({
    company: state.user.company || "",
    email: state.user.email || "",
    address: state.user.address || "",
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISettingForm>({
    resolver: yupResolver(validationSchemaSetting),
    defaultValues: initialValue,
  });

  const onSubmit = async (formValues: ISettingForm) => {
    try {
      await updateSettingInfoApi(formValues);
      notification.success("User information updated");
    } catch (e) {
      notification.error(`An error occurred: ${e}`);
    }
  };


  const firstErrorKey = Object.keys(errors)[0] as keyof ISettingForm;
  const firstErrorMessage = errors[firstErrorKey]?.message;

  const handleRedirectChangePass = () => {
    navigate(routes.changePassword);
  };
  
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(routes.index); 
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form_top}>
        <button onClick={handleClose} className={s.form_top_button}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>

      {firstErrorMessage && <ErrorMessage text={firstErrorMessage} />}

      <div className={s.form_inputs}>
        <InputForm register={register("company")} label="Company Name" error={errors.company?.message} />
        <InputForm register={register("email")} label="Email Address" error={errors.email?.message} />
        <InputForm register={register("address")} label="Saved Address" error={errors.address?.message} />
      </div>

      <div className={s.form_buttons}>
        <ButtonForm
          onEvent={handleRedirectChangePass}
          theme="outline"
          text="Change Password"
        />
        <ButtonForm type="submit" theme="red" text="Save" />
      </div>
    </form>
  );
};

export default FormSetting;