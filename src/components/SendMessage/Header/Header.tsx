import { FC } from "react";

import { CloseIcon } from "@common/Icons/CommonIcon";

import s from "./header.module.scss";

interface IHeader {
  handleClose: () => void;
}

const HeaderSendMessage: FC<IHeader> = ({ handleClose }) => {
  return (
    <header className={s.header}>
      <h3 className={s.header_title}>New Message</h3>
      <button onClick={handleClose} className={s.header_button}>
        <CloseIcon width="22" height="22" color="#111" />
      </button>
    </header>
  );
};

export default HeaderSendMessage;
