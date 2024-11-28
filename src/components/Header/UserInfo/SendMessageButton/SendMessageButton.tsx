import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SendIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { toggleOpenMessageSender } from "@redux/slices/messageSender";
import ModalLayout from "@common/Layouts/Modal/Layout";
import SendMessage from "@components/SendMessage/SendMessage";

import s from "./sendMessageButton.module.scss";

const SendMessageButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen } = useSelector((state: RootState) => state.messageSender);
  const handleToggleModal = () => {
    dispatch(toggleOpenMessageSender());
  };
  return (
    <>
      <button onClick={handleToggleModal} className={s.button}>
        <SendIcon />
      </button>
      {isOpen && (
        <ModalLayout handleClose={handleToggleModal}>
          <SendMessage handleClose={handleToggleModal} />
        </ModalLayout>
      )}
    </>
  );
};
export default SendMessageButton;
