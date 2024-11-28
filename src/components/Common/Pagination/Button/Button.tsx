import { FC } from "react";

import { FullArrowIcon } from "@common/Icons/CommonIcon";

import s from "./Button.module.scss";

interface IPaginationButton {
  type: "prev" | "next";
  onEvent: (type: "prev" | "next") => void;
  disabled?: boolean; 
}

const PaginationButton: FC<IPaginationButton> = ({ type, onEvent, disabled }) => {
  return (
    <button
      onClick={() => !disabled && onEvent(type)} 
      className={`${s.button} ${disabled ? s.disabled : ""}`} 
      disabled={disabled}
    >
      {type === "prev" && (
        <FullArrowIcon type="left" color={disabled ? "#b0b0b0" : "#303030"} size="24" />
      )}
      <p className={s.button_text}>{type === "prev" ? "Previous" : "Next"}</p>
      {type === "next" && (
        <FullArrowIcon type="right" color={disabled ? "#b0b0b0" : "#303030"} size="24" />
      )}
    </button>
  );
};

export default PaginationButton;