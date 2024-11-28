import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MyDraftIcon } from "@icons/NavIcons";
import { AppDispatch, RootState } from "@redux/store";
import { setNameOrder } from "@redux/slices/order";

import s from "./info.module.scss";

const InfoLabel: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { name } = useSelector((state: RootState) => state.order);
  const [isEdit, setEdit] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(name || "");

  const handleToggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleSaveNewName = () => {
    setEdit((prev) => !prev);
    dispatch(setNameOrder(newName.length !== 0 ? newName : name ?? ""));
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSaveNewName();
    }
  };
  return (
    <div className={s.label} onClick={!isEdit ? handleToggleEdit : () => {}}>
      {!isEdit ? (
        <p className={s.label_text}>{name}</p>
      ) : (
        <input
          className={s.label_input}
          onChange={handleChangeInput}
          value={newName}
          placeholder="Write name order"
          onKeyDown={handleKeyDown}
        />
      )}
      <button
        onClick={() => (!isEdit ? handleToggleEdit() : handleSaveNewName())}
        className={s.label_button}
      >
        <MyDraftIcon width="16" height="16" color="#fff" />
      </button>
    </div>
  );
};

export default InfoLabel;
