import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { customizeLabelStore } from "@constants/order/customizeLabel";
import { CloseIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { changeFadingType } from "@redux/slices/order";
import { FadingType } from "@interfaces/order/design.interface";

import CheckBoxCustomizeLabel from "../Checkbox/Checkbox";
import s from "./top.module.scss";

interface ICustomizeLabelsTop {
  handleClose: () => void;
}

const CustomizeLabelsTop: FC<ICustomizeLabelsTop> = ({ handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { type } = useSelector((state: RootState) => state.order.fading);

  const handleChangeItem = (newType: FadingType) => {
    dispatch(changeFadingType(newType));
  };
  return (
    <div className={s.top}>
      <ul className={s.top_list}>
        {customizeLabelStore.map((item) => (
          <CheckBoxCustomizeLabel
            key={item.id}
            {...item}
            isActive={item.name === type}
            handleChange = {handleChangeItem}
          />
        ))}
      </ul>
      <button onClick={handleClose} className={s.top_buttonClose}>
        <CloseIcon width="22" height="22" color="#111" />
      </button>
    </div>
  );
};

export default CustomizeLabelsTop;
