import { FC } from "react";

import Title from "@common/Title/Title";

import FormChangePassword from "./Form/Form";
import s from "./changePassword.module.scss"

const ChangePassword:FC = () => {
  return ( 
    <section className={s.section}>
      <Title text="Change password"/>
      <FormChangePassword/>
    </section>
  )
}

export default ChangePassword