import { FC } from "react";

import s from "./textarea.module.scss";

interface ITextareaColor {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaColors: FC<ITextareaColor> = ({ value, onChange }) => {
  return (
    <div className={s.content}>
      <h3 className={s.content_title}>Details about colors and dye</h3>
      <textarea
        onChange={onChange}
        className={s.content_textarea}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextareaColors;
