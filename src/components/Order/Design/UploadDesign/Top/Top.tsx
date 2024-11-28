import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { uploadsTypeStore } from "@constants/order/uploadTypes";
import { AppDispatch, RootState } from "@redux/store";
import { changeStitchingType } from "@redux/slices/order";
import { StitchingType } from "@interfaces/order/design.interface";

import CheckboxUploadDesign from "./Checkbox/Checkbox";
import s from "./top.module.scss";

interface IUploadDesignTop {
  handleClose: () => void;
}

const UploadDesignTop: FC<IUploadDesignTop> = ({ handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { type } = useSelector((state: RootState) => state.order.stitching);
  const handleChangeActiveType = (newParam: StitchingType) => {
    dispatch(changeStitchingType(newParam));
  };
  return (
    <div className={s.top}>
      <ul className={s.top_list}>
        {uploadsTypeStore.map((item) => (
          <CheckboxUploadDesign
            handleChange={handleChangeActiveType}
            isActive={item.name === type}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
      <button onClick={handleClose} className={s.top_closeButton}>
        <CloseIcon width="22" height="22" color="#111" />
      </button>
    </div>
  );
};

export default UploadDesignTop;
