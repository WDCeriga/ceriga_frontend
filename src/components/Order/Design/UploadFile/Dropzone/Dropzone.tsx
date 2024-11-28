import { FC } from "react";
import { useDropzone } from "react-dropzone";

import { UploadFileBigIcon } from "@common/Icons/CommonIcon";

import s from "./dropzone.module.scss";

interface IDropzone {
  onDrop: (arg0: File[]) => void;
}

const Dropzone: FC<IDropzone> = ({onDrop}) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={s.dropzone} {...getRootProps()}>
      <UploadFileBigIcon width="72" height="62" color="#C80F0F" />
      <h3 className={s.dropzone_title}>
        Drag & drop files or{" "}
        <span className={s.dropzone_title__underline}>Browse</span>
      </h3>
      <p className={s.dropzone_description}>
        Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
      </p>
      <input {...getInputProps()} type="file" />
    </div>
  );
};

export default Dropzone;
