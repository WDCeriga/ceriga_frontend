import { FC } from "react";

import { deliveryType, IDelivery } from "@interfaces/Delivery.interface";
import ErrorMessage from "@components/Auth/Error/Error";

import s from "./input.module.scss";

interface IInputSetting {
  label: string;
  name?: deliveryType; 
  register?: object; 
  type?: string;
  onChange?: (name: keyof IDelivery, value: string) => void;
  initialValue?: string;
  error?: string;
}

const InputForm: FC<IInputSetting> = ({
  label,
  name,
  register = {},
  type = "text",
  onChange,
  initialValue = "",
  error,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && name) {
      onChange(name, e.target.value); 
    }
  };

  return (
    <label className={s.label}>
      <p className={s.label_text}>{label}</p>
      <input
        className={s.label_input}
        {...register}  
        type={type}
        value={initialValue}  
        onChange={handleInputChange} 
      />
      {error && <ErrorMessage text={error} />}
    </label>
  );
};

export default InputForm;