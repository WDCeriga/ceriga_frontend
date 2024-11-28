import { FC } from "react";

import s from "./button.module.scss";

interface IButtonUploadFile {
  handleClose: () => void;
}

const ButtonUploadFile: FC<IButtonUploadFile> = ({ handleClose }) => {
  return (
    <button onClick={handleClose} className={s.button}>
      Upload Files
    </button>
  );
};

export default ButtonUploadFile;
