import s from "./button.module.scss";

import { FC } from "react";
import classNames from "classnames";

interface IButtonSetting {
  text: string;
  theme: "red" | "outline";
  type?: "submit";
  onEvent?: () => void;
}

const ButtonForm: FC<IButtonSetting> = ({ text, theme, type, onEvent }) => {
  const buttonClassnames = classNames(
    s.button,
    theme === "red" && s.button__red,
    theme === "outline" && s.button__outline
  );

  return (
    <button
      className={buttonClassnames}
      onClick={type ? () => {} : onEvent}
      type={type || "button"}
    >
      {text}
    </button>
  );
};

export default ButtonForm;
