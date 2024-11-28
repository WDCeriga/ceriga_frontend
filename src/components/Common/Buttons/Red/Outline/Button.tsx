import s from "./button.module.scss";

import { FC } from "react";

interface IButton {
  text: string;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
  return (
    <button className={s.btn} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
