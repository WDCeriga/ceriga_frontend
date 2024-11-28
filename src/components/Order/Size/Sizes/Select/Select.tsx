import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { changeTableSize } from "@redux/slices/order";
import { resetValuesToZero } from "@services/tableSizes";
import { AppDispatch, RootState } from "@redux/store";

import { tableSizes } from "../../../../../constants/order/sizeTables/sizes";
import s from "./select.module.scss";

interface SelectSizeProps {
  typeActive: string;
  handleTypeActive: (newType: string) => void;
  productType: string;
}

const SelectSize: FC<SelectSizeProps> = ({
  typeActive,
  handleTypeActive,
  productType,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { tableSize } = useSelector((state: RootState) => state.order);

  const [selectOpen, setSelectOpen] = useState<boolean>(false);

  const handleToggleSelect = () => setSelectOpen((prev) => !prev);
  const sizeOptions =
    productType && tableSizes[productType as keyof typeof tableSizes]?.list
      ? tableSizes[productType as keyof typeof tableSizes].list
      : [];

  const sizeOptionsWithCustom = [...sizeOptions, "Custom"];

  const handleUpdateItem = (item: string) => {
    if (item === "Custom") {
      dispatch(changeTableSize(resetValuesToZero(tableSize)));
      handleTypeActive(item);
    } else {
      handleTypeActive(item);
    }
    handleToggleSelect();
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
          {sizeOptionsWithCustom.map((item: string) =>
            item !== typeActive ? (
              <li key={item} className={s.list_item}>
                <button
                  onClick={() => handleUpdateItem(item)}
                  className={s.list_item_button}
                >
                  {item}
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectSize;
