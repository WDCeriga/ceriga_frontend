import classNames from "classnames";
import { FC } from "react";

import s from "./button.module.scss";

interface IButton {
  text: "Information" | "Customize";
  size: "small" | "default";
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, size, handleClick }) => {
  const buttonClasses = classNames(s.btn, size === "small" && s.btn__small);

  return (
    <button onClick={handleClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
