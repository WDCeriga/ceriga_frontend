import {
  uploadDesign,
  uploadLabel,
  uploadNeck,
  uploadPackage,
} from "@redux/slices/order";
import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { uploadFileType } from "@interfaces/UploadFile.interface";
import { AppDispatch, RootState } from "@redux/store";
import ModalLayout from "@common/Layouts/Modal/Layout";

import ButtonUploadFile from "./Button/Button";
import Dropzone from "./Dropzone/Dropzone";
import FilesList from "./Files/Files";
import s from "./uploadFile.module.scss";

interface IUploadFile {
  type: uploadFileType;
  handleClose: () => void;
}

const UploadFile: FC<IUploadFile> = ({ handleClose, type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { draftId } = useSelector((state: RootState) => state.order);

  const files = useSelector((state: RootState) => {
    if (type === "uploadDesign") {
      return state.order.designUploads;
    }
    if (type === "uploadLabel") {
      return state.order.labelUploads;
    }
    if (type === "uploadNeck") {
      return state.order.neckUploads;
    }
    if (type === "uploadPackageDesign") {
      return state.order.packageUploads;
    }
  });

  const handleDropFile = useCallback(
    async (acceptedFiles: File[]) => {
      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append("image", file);
      });
      if (type === "uploadDesign" && draftId) {
        await dispatch(uploadDesign({ formData, draftId }));
      }

      if (type === "uploadLabel" && draftId) {
        await dispatch(uploadLabel({ formData, draftId }));
      }

      if (type === "uploadNeck" && draftId) {
        await dispatch(uploadNeck({ formData, draftId }));
      }

      if (type === "uploadPackageDesign" && draftId) {
        await dispatch(uploadPackage({ formData, draftId }));
      }

    },
    [dispatch, draftId, type]
  );

  return (
    <ModalLayout handleClose={handleClose}>
      <div className={s.content}>
        <button onClick={handleClose} className={s.content_buttonClose}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
        <h2 className={s.content_title}>Upload</h2>
        <Dropzone onDrop={handleDropFile} />
        {files && files.length !== 0 && <FilesList files={files} />}
        <ButtonUploadFile handleClose={handleClose} />
      </div>
    </ModalLayout>
  );
};

export default UploadFile;
