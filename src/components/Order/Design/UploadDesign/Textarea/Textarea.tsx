import { FC } from "react";

import s from "./textarea.module.scss";

interface ITextareaUploadDesign {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaUploadDesign: FC<ITextareaUploadDesign> = ({
  value,
  onChange,
}) => {
  return (
    <label className={s.label}>
      <p className={s.label_text}>Custom stitching</p>
      <textarea
        onChange={onChange}
        className={s.label_textarea}
        placeholder="Enter custom stitching"
        value={value}
      ></textarea>
    </label>
  );
};

export default TextareaUploadDesign;
