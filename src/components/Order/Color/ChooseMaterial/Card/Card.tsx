import {
  IMaterialCardComponent,
  materialValue,
} from "@interfaces/order/material.interface";
import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@redux/store";
import { updateMaterial } from "@redux/slices/order";

import CheckBoxMaterial from "./CheckBox/CheckBox";
import s from "./card.module.scss";

const ChooseMaterialCard: FC<IMaterialCardComponent> = ({
  title,
  list,
  values,
  activeMaterial,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClickButton = (color: materialValue) => {
    dispatch(
      updateMaterial({
        name: title,
        value: color,
      })
    );
  };
  const cardClassnames = classNames(
    s.card, 
    activeMaterial.name === title && s.card__active  
  )
  return (
    <li className={cardClassnames}>
      <h3 className={s.card_title}>{title}</h3>
      <div className={s.card_content}>
        <ul className={s.card_content_list}>
          {values.map((item) => (
            <CheckBoxMaterial
              isChecked={
                activeMaterial.name === title && activeMaterial.value === item
              }
              key={item}
              value={item}
              onEvent={handleClickButton}
            />
          ))}
        </ul>
        <img
          className={s.card_content_img}
          src={`/img/materials/${list.img}`}
          alt={title}
        />
      </div>
    </li>
  );
};

export default ChooseMaterialCard;