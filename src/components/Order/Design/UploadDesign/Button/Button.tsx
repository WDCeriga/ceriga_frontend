import { FC } from "react";

import { UploadFileIcon } from "@common/Icons/CommonIcon";

import s from "./button.module.scss";

interface IButton {
  onEvent: () => void;
  text?: string;
}

const ButtonUploadDesign: FC<IButton> = ({ onEvent, text }) => {
  return (
    <div>
      <button onClick={onEvent} className={s.button}>
        <p className={s.button_text}>{text ? text : "Upload Design"}</p>
        <UploadFileIcon width="24" height="24" color="#fff" />
      </button>
    </div>
  );
};

export default ButtonUploadDesign;
