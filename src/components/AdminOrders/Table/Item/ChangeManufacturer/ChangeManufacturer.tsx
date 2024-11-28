import { FC, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { manufacturerType } from "@interfaces/bll/adminOrders.interface";
import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { manufacturerStore } from "@constants/admin/orders/manufacturer";
import { AppDispatch } from "@redux/store";
import { changeManufactory } from "@redux/slices/adminOrders";

import s from "./changeManufacturer.module.scss";

interface IChangeManufacturer {
  id: string;
  isOpenManufactory: boolean;
  handleChangeManufactory: (id: string) => void;
  manufacturer: manufacturerType;
}

const ChangeManufacturer: FC<IChangeManufacturer> = ({
  id,
  manufacturer,
  isOpenManufactory,
  handleChangeManufactory,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeManufacturer, setActiveManufacturer] =
    useState<manufacturerType>(manufacturer);
  const componentRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    handleChangeManufactory(id);
  };

  const handleChangeParam = (item: manufacturerType) => {
    setActiveManufacturer(item);
    dispatch(changeManufactory({ orderId: id, newManufacturer: item }));
    handleOpenMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        handleChangeManufactory(""); // Set isOpenManufactory to false when clicking outside
      }
    };
    if (isOpenManufactory) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenManufactory, handleChangeManufactory]);

  return (
    <div className={s.container} ref={componentRef}>
      <button onClick={handleOpenMenu} className={s.container_button}>
        <p className={s.container_button_text}>{activeManufacturer}</p>
        <ArrowVerticalIcon
          color="#C80F0F"
          width="12"
          height="6"
          type={isOpenManufactory ? "top" : "bottom"}
        />
      </button>
      {isOpenManufactory && (
        <ul className={s.container_list}>
          {manufacturerStore.map(
            (item) =>
              activeManufacturer !== item && (
                <li
                  key={item}
                  className={s.container_list_item}
                  onClick={() => handleChangeParam(item)}
                >
                  <p className={s.container_list_item_text}>{item}</p>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default ChangeManufacturer;
