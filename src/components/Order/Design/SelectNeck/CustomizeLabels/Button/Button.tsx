import { FC } from "react";

import { UploadFileIcon } from "@common/Icons/CommonIcon";

import s from "./button.module.scss";

interface IButtonCustomizeLabel { 
  handleOpenModal: () => void
}

const ButtonCustomizeLabel: FC<IButtonCustomizeLabel> = ({handleOpenModal}) => {
  return (
    <div>
      <button onClick={handleOpenModal} className={s.button}>
        <p className={s.button_text}>Upload Design</p>
        <UploadFileIcon width="24" height="24" color="#fff" />
      </button>
    </div>
  );
};

export default ButtonCustomizeLabel;
