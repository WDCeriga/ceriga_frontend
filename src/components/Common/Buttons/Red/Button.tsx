import s from "./button.module.scss";
import { FC } from "react";

interface IButton {
  text: string;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className={s.btn}>
      {text}
    </button>
  );
};

export default Button;
