import { FC, useState } from "react";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { materialTypesStore } from "@constants/order/material";

import s from "./selectMaterial.module.scss";

interface ISelectMaterial {
  typeActive: string;
  handleUpdateItem: (item: string) => void;
}

const SelectMaterial: FC<ISelectMaterial> = ({ typeActive, handleUpdateItem }) => {
  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const handleToggleSelect = () => setSelectOpen((prev) => !prev);
  const handleSelectItem = (item: string) => {
    handleToggleSelect();
    handleUpdateItem(item);
  };

  return (
    <div className={s.container}>
      <button onClick={handleToggleSelect} className={s.selected}>
        <p className={s.selected_text}>{typeActive}</p>
        <ArrowVerticalIcon
          type={selectOpen ? "top" : "bottom"}
          width="10"
          height="6"
          color="#111"
        />
      </button>
      {selectOpen && (
        <ul className={s.list}>
          {materialTypesStore.map(item => ( 
            <li key={item} className={s.list_item}>
            <button
              onClick={() => handleSelectItem(item)}
              className={s.list_item_button}
            >
              {item}
            </button>
          </li>
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default SelectMaterial;
