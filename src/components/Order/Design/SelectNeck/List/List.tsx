import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { neckSizeStore } from "@constants/order/selectNeck";
import { AppDispatch, RootState } from "@redux/store";
import { neckSizeType } from "@interfaces/order/selectNeck.interface";
import { changeNeckType } from "@redux/slices/order";

import ItemSelectNeck from "./Item/Item";
import s from "./list.module.scss";

const ListSelectNeck: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {type} = useSelector((state:RootState) => state.order.neck)
  const handleSelectNeck = (neckType: neckSizeType) => {
    dispatch(changeNeckType(neckType))
  }
  return (
    <ul className={s.list}>
      {neckSizeStore.map((item) => (
        <ItemSelectNeck handleSelectNeck={handleSelectNeck} key={item} size={item} isActive={type === item}/>
      ))}
    </ul>
  );
};

export default ListSelectNeck;
