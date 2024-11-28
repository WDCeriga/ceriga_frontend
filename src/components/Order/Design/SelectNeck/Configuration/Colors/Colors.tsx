import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { colorsLabelsStore } from "@constants/order/customizeLabel";
import { AppDispatch, RootState } from "@redux/store";
import { colorCustomLabelType } from "@interfaces/order/customLabel.interface";
import { changeColorInNeck } from "@redux/slices/order";

import ItemColorLabel from "./Item/Item";
import s from "./colors.module.scss";

const ColorsLabel: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { color } = useSelector(
    (state: RootState) => state.order.neck.additional
  );
  const handleChangeActiveColor = (newColor: colorCustomLabelType) => {
    dispatch(changeColorInNeck(newColor));
  };
  return (
    <ul className={s.list}>
      {colorsLabelsStore.map((colorItem) => (
        <ItemColorLabel
          key={colorItem}
          color={colorItem}
          isActive={colorItem === color}
          handleChooseColor={handleChangeActiveColor}
        />
      ))}
    </ul>
  );
};

export default ColorsLabel;
