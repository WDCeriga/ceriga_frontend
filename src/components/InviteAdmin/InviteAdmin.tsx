import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { IInviteAdminForm } from "@interfaces/InviteAdmin.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchemaInviteAdmin } from "@validation/inviteAdmin";
import { sendAminInviteApi } from "@api/requests/protected";
import ErrorMessage from "@components/Auth/Error/Error";
import notification from "@services/notification";

import s from "./inviteAdmin.module.scss";

interface IInviteAdmin {
  handleClose: () => void;
}

const InviteAdmin: FC<IInviteAdmin> = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInviteAdminForm>({
    resolver: yupResolver(validationSchemaInviteAdmin),
  });
  const onSubmit: SubmitHandler<IInviteAdminForm> = async (data) => {
    try {
      const response = await sendAminInviteApi(data.email);
      if (response.status === 404) {
        notification.error(response.data || "Error: Admin not found");
      } else {
        notification.success(response.data || "Admin invite sent successfully");
        handleClose();
      }
    } catch (error) {
      notification.error("An error occurred while sending the invite");
      console.error(error);
    }
  };
  const firstErrorKey = Object.keys(errors)[0] as keyof IInviteAdminForm;
  const firstErrorMessage = errors[firstErrorKey]?.message;
  return (
    <section className={s.section}>
      <div className={s.section_top}>
        <h3 className={s.section_top_title}>Invite Admin</h3>
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
        <label className={s.section_form_label}>
          <p className={s.section_form_label_text}>Message:</p>
          <textarea
            {...register("message")}
            className={s.section_form_label_textarea}
          ></textarea>
        </label>
        <button type="submit" className={s.section_form_button}>
          Invite
        </button>
      </form>
    </section>
  );
};

export default InviteAdmin;
