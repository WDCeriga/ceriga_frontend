import { FC, MouseEvent, ReactNode } from "react";

import s from "./layout.module.scss";

interface IModalLayout {
  handleClose: () => void;
  children: ReactNode;
}

const ModalLayout: FC<IModalLayout> = ({ children, handleClose }) => {
  const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest(`.ModalContent`)) {
      return;
    }
    handleClose();
  };

  return (
    <div className={s.modal} onClick={handleClickOutside}>
      <div className="ModalContent">{children}</div>
    </div>
  );
};

export default ModalLayout;
