import { ArrowIcon } from "../Icons/CommonIcon";
import s from "./listBtns.module.scss";
import { FC } from "react";

interface IListBtns {
  handlePrev: () => void;
  handleNext: () => void;
  marginTop?: string;
}

const ListBtns: FC<IListBtns> = ({ handlePrev, handleNext,marginTop }) => {
  return (
    <div className={s.container} style={{marginTop}}>
      <button onClick={handlePrev} className={s.container_btn}>
        <ArrowIcon color="#FFF" width="24px" height="24px" type="left" />
      </button>
      <button onClick={handleNext} className={s.container_btn}>
        <ArrowIcon color="#FFF" width="24px" height="24px" type="right" />
      </button>
    </div>
  );
};

export default ListBtns;
