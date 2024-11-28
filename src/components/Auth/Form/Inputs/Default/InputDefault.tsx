import s from "./inputDefault.module.scss";
import { FC } from "react";
import { IInput } from "@interfaces/Auth.interfaces";

const InputDefault: FC<IInput> = ({
  label,
  type = "text",
  placeholder,
  marginT,
  register,
}) => {
  return (
    <label className={s.container} style={{ marginTop: marginT }}>
      <p className={s.container_label}>{label}</p>
      <input
        {...register}
        className={s.container_input}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputDefault;
