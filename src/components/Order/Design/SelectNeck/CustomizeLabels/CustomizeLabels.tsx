import { FC, useState } from "react";

import UploadFile from "../../UploadFile/UploadFile";
import ButtonCustomizeLabel from "./Button/Button";
import CustomizeLabelsTop from "./Top/Top";
import s from "./customizeLabels.module.scss";

interface ICustomizeLabels {
  handleClose: () => void;
}

const CustomizeLabels: FC<ICustomizeLabels> = ({ handleClose }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleToggleModal = () => setModalOpen((prev) => !prev);
  return (
    <section className={s.container}>
      <CustomizeLabelsTop handleClose={handleClose} />
      <h3 className={s.container_title}>Customize care Labels</h3>
      <ButtonCustomizeLabel handleOpenModal={handleToggleModal} />
      {modalOpen && <UploadFile type="uploadLabel" handleClose={handleToggleModal} />}
    </section>
  );
};

export default CustomizeLabels;
