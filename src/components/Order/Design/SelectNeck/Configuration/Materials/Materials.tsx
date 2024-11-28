import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { materialsNeckStore } from "@constants/order/materialNeck";
import { changeMaterialInNeck } from "@redux/slices/order";
import { materialCustomLabelType } from "@interfaces/order/customLabel.interface";

import ItemMaterialNeck from "./Item/Item";
import s from "./materials.module.scss";

const MaterialsCustomiseLabel: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { material } = useSelector(
    (state: RootState) => state.order.neck.additional
  );
  const handleCheckMaterial = (newMaterial:materialCustomLabelType) => { 
    dispatch(changeMaterialInNeck(newMaterial))
  }
  return (
    <div className={s.material}>
      <h3 className={s.material_title}>Materials:</h3>
      <ul className={s.material_list}>
        {materialsNeckStore.map((item) => (
          <ItemMaterialNeck
            key={item}
            material={item}
            isActive={item === material}
            handleCheck={handleCheckMaterial}
          />
        ))}
      </ul>
    </div>
  );
};

export default MaterialsCustomiseLabel;
