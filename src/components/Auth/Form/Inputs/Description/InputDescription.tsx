import s from "./inputDescription.module.scss";
import { FC, ReactNode } from "react";

interface IInputDescription {
  children: ReactNode;
  description: string;
  mode: "top" | "bottom";
}

const InputDescription: FC<IInputDescription> = ({
  children,
  description,
  mode,
}) => {
  return (
    <label className={s.container}>
      {mode === "bottom" && children}
      <p className={s.container_description}>{description}</p>
      {mode === "top" && children}
    </label>
  );
};

export default InputDescription;
