import { FC, useState } from "react";

import ModalLayout from "@common/Layouts/Modal/Layout";

import AddSubAdminForm from "./Form/Form";
import s from "./addSubAdmin.module.scss";

const AddSubAdmin: FC = () => {
  const [isOpenInviteAdmin, setIsOpenInviteAdmin] = useState<boolean>(false);
  const toggleOpenInviteAdmin = () => {
    setIsOpenInviteAdmin((prev) => !prev);
  };
  return (
    <div className={s.container}>
      <button onClick={toggleOpenInviteAdmin} className={s.button}>Invite Sub Admin</button>
      {isOpenInviteAdmin && (
        <ModalLayout handleClose={toggleOpenInviteAdmin}>
          <AddSubAdminForm handleClose={toggleOpenInviteAdmin} />
        </ModalLayout>
      )}
    </div>
  );
};

export default AddSubAdmin;
