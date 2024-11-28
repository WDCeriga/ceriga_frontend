import classNames from "classnames";
import { FC } from "react";

import s from "./button.module.scss";

interface IButtonOrder {
  onEvent: () => void;
  text: "Go back" | "Next Step" | "Finish Design";
  type: "noBg" | "redBg";
  isDisabled?: boolean;
}

const ButtonOrder: FC<IButtonOrder> = ({ text, type, onEvent, isDisabled }) => {
  const buttonClasses = classNames(
    s.btn,
    type === "noBg" ? s.btn__noBg : s.btn__redBg,
    isDisabled && s.btn__disabled
  );

  return (
    <div className={s.container}>
      {isDisabled && <p className={s.error}>Please fill in all fields to continue</p>}
      <button disabled={isDisabled} className={buttonClasses} onClick={onEvent}>
        {text}
      </button>
    </div>
  );
};

export default ButtonOrder;