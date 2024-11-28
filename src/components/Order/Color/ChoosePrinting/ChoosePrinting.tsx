import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { printingStore } from "@constants/order/printing";
import { AppDispatch, RootState } from "@redux/store";
import { printingType } from "@interfaces/order/printing.interface";
import { updatePrinting } from "@redux/slices/order";

import PrintingItem from "./Item/Item";
import s from "./choosePrinting.module.scss";

interface IChoosePrinting {
  onClose: () => void;
}

const ChoosePrinting: FC<IChoosePrinting> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { printing } = useSelector((state: RootState) => state.order);
  const handleChoosePrinting = (value: printingType) => {
    dispatch(updatePrinting(value));
  };
  return (
    <section className={s.container}>
      <div className={s.container_group}>
        <h2 className={s.container_group_title}>Printing settings</h2>
        <button onClick={onClose} className={s.container_group_btn}>
          <CloseIcon width="22" height="22" color="#000" />
        </button>
      </div>
      <ul className={s.container_list}>
        {printingStore.map((item) => (
          <PrintingItem
            key={item.name}
            {...item}
            isActive={printing === item.name}
            handleClick={handleChoosePrinting}
          />
        ))}
      </ul>
    </section>
  );
};

export default ChoosePrinting;
