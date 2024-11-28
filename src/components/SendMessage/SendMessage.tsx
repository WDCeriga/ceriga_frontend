import { FC } from "react";

import BodySendMessage from "./Body/Body";
import HeaderSendMessage from "./Header/Header";
import s from "./sendMessage.module.scss";

interface ISendMessage { 
  handleClose: () => void;
}

const SendMessage: FC<ISendMessage> = ({handleClose}) => {
  return (
    <section className={s.container}>
      <HeaderSendMessage handleClose={handleClose} />
      <BodySendMessage/>
    </section>
  );
};

export default SendMessage;
