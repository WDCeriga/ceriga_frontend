import s from "./buttonSelect.module.scss"

import { FC } from "react";

import { PlusIcon } from "../Icons/CommonIcon";

interface IChooseChange {
  text: string;
  onEvent: () => void;
}

const ButtonSelect: FC<IChooseChange> = ({ text,onEvent }) => {
  return (
    <div className={s.container}>
      <button onClick={onEvent} className={s.container_button}>
        <p className={s.container_button_text}>{text}</p>
        <PlusIcon width="16" height="16" color="#111" />
      </button>
    </div>
  );
};

export default ButtonSelect;
