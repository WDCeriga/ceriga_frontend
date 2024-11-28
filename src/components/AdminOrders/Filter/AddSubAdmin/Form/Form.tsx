import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { IInviteAdminForm } from "@interfaces/InviteAdmin.interface";
import { validationSchemaInviteAdmin } from "@validation/inviteAdmin";
import { CloseIcon } from "@common/Icons/CommonIcon";
import { inviteSubAdminByEmail } from "@api/requests/protected";
import ErrorMessage from "@components/Auth/Error/Error";
import notification from "@services/notification";

import s from "./form.module.scss";

interface IAddSubAdminForm {
  handleClose: () => void;
}

const AddSubAdminForm: FC<IAddSubAdminForm> = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInviteAdminForm>({
    resolver: yupResolver(validationSchemaInviteAdmin),
  });
  const onSubmit: SubmitHandler<IInviteAdminForm> = async ({ email }) => {
      const res = await inviteSubAdminByEmail(email);
      if (res.status === 200) {
        notification.success("Subadmin invited successfully.");
        handleClose();
      } else {
        notification.error("Failed to invite subadmin.");
      }
  
  };
  const firstErrorKey = Object.keys(errors)[0] as keyof IInviteAdminForm;
  const firstErrorMessage = errors[firstErrorKey]?.message;
  return (
    <section className={s.section}>
      <div className={s.section_top}>
        <h3 className={s.section_top_title}>Invite SubAdmin</h3>
        <button onClick={handleClose} className={s.section_top_button}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>
      {firstErrorMessage && <ErrorMessage text={firstErrorMessage} />}
      <form onSubmit={handleSubmit(onSubmit)} className={s.section_form}>
        <label className={s.section_form_label}>
          <p className={s.section_form_label_text}>Email:</p>
          <input
            {...register("email")}
            className={s.section_form_label_input}
          />
        </label>
        <button type="submit" className={s.section_form_button}>
          Invite
        </button>
      </form>
    </section>
  );
};

export default AddSubAdminForm;
