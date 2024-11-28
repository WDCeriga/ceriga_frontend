import { FC, useState } from "react";

import { CloseIcon } from "@common/Icons/CommonIcon";

import ButtonUploadDesign from "../../UploadDesign/Button/Button";
import UploadFile from "../../UploadFile/UploadFile";
import ColorsLabel from "./Colors/Colors";
import MaterialsCustomiseLabel from "./Materials/Materials";
import s from "./configuration.module.scss";

interface IConfigurationLabel {
  handleClose: () => void;
}

const ConfigurationLabel: FC<IConfigurationLabel> = ({ handleClose }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleToggleModal = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <section className={s.container}>
      <button onClick={handleClose} className={s.container_btnClose}>
        <CloseIcon width="22" height="22" color="#111" />
      </button>
      <ColorsLabel />
      <MaterialsCustomiseLabel />
      <ButtonUploadDesign
        text="Upload Your Label Design"
        onEvent={handleToggleModal}
      />
      {modalOpen && (
        <UploadFile type="uploadNeck" handleClose={handleToggleModal} />
      )}
    </section>
  );
};

export default ConfigurationLabel;
