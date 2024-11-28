import { FC } from "react";

import { IInvoice } from "@interfaces/Invoice.interface";

import s from "./label.module.scss";

interface ILabelItemInvoice {
  label: string;
  value: string;
  name: string;
  handleUpdate?: (nameField: keyof IInvoice, value: string) => void;
}

const LabelItemInvoice: FC<ILabelItemInvoice> = ({
  label,
  value,
  handleUpdate,
  name,
}) => {
  const handleUpdateInput = (e) => {
    handleUpdate(name as keyof IInvoice, e.target.value);
  };
  return (
    <li className={s.item}>
      <label className={s.item_label}>
        <p className={s.item_label_text}>{label}:</p>
        <input
          onChange={handleUpdateInput}
          type="text"
          value={value}
          className={s.item_label_input}
        />
      </label>
    </li>
  );
};
export default LabelItemInvoice;
