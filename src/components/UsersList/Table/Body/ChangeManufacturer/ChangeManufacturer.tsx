import { FC } from "react";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";

import s from "./changeManufacturer.module.scss";

interface IChangeManufacturer {
  id: string;
  isOpen: string;
  manufacturer: string;
  handleChangeOpen: (arg0: string) => void;
  handleToggleModal: () => void;
}

const ChangeManufacturer: FC<IChangeManufacturer> = ({
  id,
  isOpen,
  manufacturer,
  handleToggleModal,
}) => {
  return (
    <div className={s.container}>
      <button onClick={handleToggleModal} className={s.container_button}>
        <p className={s.container_button_text}>{manufacturer}</p>
        <ArrowVerticalIcon
          color="#C80F0F"
          width="12"
          height="6"
          type={isOpen === id ? "top" : "bottom"}
        />
      </button>
    </div>
  );
};

export default ChangeManufacturer;
