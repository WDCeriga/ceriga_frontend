import { FC, useState } from "react";

import { InviteIcon } from "@common/Icons/CommonIcon";
import InviteAdmin from "@components/InviteAdmin/InviteAdmin";
import ModalLayout from "@common/Layouts/Modal/Layout";
import Title from "@common/Title/Title";
import UsersList from "@components/UsersList/UsersList";

import s from "./adminDashboard.module.scss";

const AdminDashboard: FC = () => {
  const [modalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleToggleModal = () => setIsModalOpen((prev) => !prev);
  return (
    <section className={s.container}>
      <div className={s.container_top}>
        <Title text="Dashboard" />
        <button onClick={handleToggleModal} className={s.container_top_button}>
          <InviteIcon />
          <p className={s.container_top_button_text}>Invite admin</p>
        </button>
      </div>
      <UsersList />
      {modalOpen && (
        <ModalLayout handleClose={handleToggleModal}>
          <InviteAdmin handleClose={handleToggleModal}/>
        </ModalLayout>
      )}
    </section>
  );
};

export default AdminDashboard;
