import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { changeNameInOrderApi } from "@api/requests/protected";
import { AppDispatch } from "@redux/store";
import { changeNameInOrder } from "@redux/slices/orders";
import notification from "@services/notification";

import s from "./changeName.module.scss";

interface IChangeName {
  onClose: () => void;
  orderId: number;
  initialValue: string;
}

const ChangeName: FC<IChangeName> = ({ onClose, initialValue, orderId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState<string>(initialValue);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    onClose();
  };
  const handleSave = async () => {
    try {
      await changeNameInOrderApi(`${orderId}`, value);
      dispatch(changeNameInOrder({ orderId, newName: value }));
      notification.success(`Successfully changed name in order ${orderId}`);
      onClose();
    } catch (e) {
      console.error(e);
      notification.error(`Error with save new name`);
    }
  };
  return (
    <div className={s.container}>
      <input
        value={value}
        onChange={handleChangeValue}
        className={s.container_input}
      />
      <button onClick={handleSave} className={s.container_button}>
        Save
      </button>
      <button onClick={handleClick} className={s.container_button}>
        Cancel
      </button>
    </div>
  );
};

export default ChangeName;
