import { FC } from "react";

import s from "./CheckBox.module.scss";

interface ICheckBox {
  text: string;
  marginT?: string;
  register: object;
}

const CheckBox: FC<ICheckBox> = ({ text, marginT, register }) => {
  return (
    <label className={s.container} style={{ marginTop: marginT }}>
      <input {...register} className={s.container_input} type="checkbox" />
      <p className={s.container_text}>{text}</p>
    </label>
  );
};

export default CheckBox;
