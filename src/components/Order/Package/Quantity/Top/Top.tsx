import { FC } from "react";
import { useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { RootState } from "@redux/store";
import ErrorMessage from "@components/Auth/Error/Error";

import s from "./top.module.scss";

interface ITopQuantity {
  handleClose: () => void;
}

const TopQuantity: FC<ITopQuantity> = ({ handleClose }) => {
  const { quantity, material } = useSelector((state: RootState) => state.order);
  const moq: number = (material.value as number) >= 50 ? 50 : 50;
  return (
    <div className={s.top}>
      <div>
        <h3 className={s.top_title}>Details about packaging</h3>
        {quantity.type === "Bulk" &&
          quantity.list.reduce((sum, item) => sum + item.value, 0) < moq && (
            <ErrorMessage text={`The minimum order quantity is ${moq}.`} />
          )}
      </div>
      <button onClick={handleClose} className={s.top_button}>
        <CloseIcon width="22" height="22" color="#111" />
      </button>
    </div>
  );
};

export default TopQuantity;
