import { FC } from "react";

import Title from "@common/Title/Title";

import ListNotification from "./List/List";
import s from "./notification.module.scss"

const Notification: FC = () => {
  return (
    <section className={s.container}>
      <Title text="Notification" styleText="capitalize"/>
      <ListNotification/>
     
    </section>
  );
};

export default Notification;
