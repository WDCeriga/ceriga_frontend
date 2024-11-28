import { ChangeEvent, FC, ReactNode } from "react";

import { editShippingField } from "@interfaces/bll/editShipping.interface";

import s from "./item.module.scss";

interface ITrackingForm {
  field: editShippingField;
  label: string;
  value: string | null;
  children?: ReactNode;
  handleChange: (field: editShippingField, value: string) => void;
}

const TrackingForm: FC<ITrackingForm> = ({
  label,
  field,
  children,
  value,
  handleChange,
}) => {
  const handleChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(field, e.target.value);
  };
  return (
    <div className={s.container}>
      <label className={s.label}>
        <h3 className={s.label_text}>{label}s</h3>
        <input
          onChange={handleChangeField}
          className={s.label_input}
          value={value || ""}
          type="text"
        />
      </label>
      {children}
    </div>
  );
};

export default TrackingForm;
