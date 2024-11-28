import {
  changePackageDescription,
  changePackageStatus,
} from "@redux/slices/order";
import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import ButtonUploadDesign from "@components/Order/Design/UploadDesign/Button/Button";
import UploadFile from "@components/Order/Design/UploadFile/UploadFile";

import s from "./form.module.scss";

interface IPackageDetailsForm {
  handleClose: () => void;
}

const PackageDetailsForm: FC<IPackageDetailsForm> = ({ handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { isPackage, description } = useSelector(
    (state: RootState) => state.order.package
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleToggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  const handleChoosePackage = (value: boolean) => {
    dispatch(changePackageStatus(value));
  };

  const handleUpdatePackageDescription = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(changePackageDescription(e.target.value));
  };

  return (
    <>
    <section className={s.container}>
      <div className={s.container_top}>
        <ul className={s.container_top_list}>
          <li className={s.container_top_list_item}>
            <label className={s.container_top_list_item_label}>
              <input
                className={s.container_top_list_item_label_input}
                type="checkbox"
                checked={isPackage === true}
                onChange={() => handleChoosePackage(true)}
              />
              <p className={s.container_top_list_item_label_text}>Package</p>
            </label>
          </li>
          <li className={s.container_top_list_item}>
            <label className={s.container_top_list_item_label}>
              <input
                className={s.container_top_list_item_label_input}
                type="checkbox"
                checked={isPackage === false}
                onChange={() => handleChoosePackage(false)}
              />
              <p className={s.container_top_list_item_label_text}>Unpackage</p>
            </label>
          </li>
        </ul>
        <button onClick={handleClose} className={s.container_top_closeButton}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>
      <div className={s.container_details}>
        <p className={s.container_details_text}>Details about packaging</p>
        <textarea
          className={s.container_details_textarea}
          onChange={handleUpdatePackageDescription}
          value={description}
        ></textarea>
      </div>
      <ButtonUploadDesign onEvent={handleToggleModal} />
    </section>
    {modalOpen && <UploadFile type="uploadPackageDesign" handleClose={handleToggleModal}/>}
    </>
  );
};

export default PackageDetailsForm;
