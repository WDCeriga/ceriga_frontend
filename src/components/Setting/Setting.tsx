import { FC } from "react";

import Title from "@common/Title/Title";

import FormSetting from "./Form/Form";
import s from "./setting.module.scss";

const Setting: FC = () => {
  return (
    <section className={s.section}>
      <Title text="Settings" />
      <FormSetting/>
    </section>
  );
};

export default Setting;
