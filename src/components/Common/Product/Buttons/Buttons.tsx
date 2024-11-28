import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "@redux/store";
import { openModal } from "@redux/slices/ui";
import { createNewOrder, resetOrderState } from "@redux/slices/order";
import { resetColors } from "@redux/slices/colors";
import routes from "@routes/index";

import Button from "./Button/Button";
import s from "./buttons.module.scss";

interface IButtons {
  size: "small" | "default";
  idProduct: string;
  category: string;
}

const Buttons: FC<IButtons> = ({ size, idProduct, category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleOpenInformation = () => {
    dispatch(openModal({ productId: idProduct }));
  };
  const handleCreateNewOrder = () => {
    dispatch(resetOrderState());
    dispatch(resetColors())
    dispatch(createNewOrder({ productType: category }));
    navigate(routes.order);
  };
  const groupClasses = classNames(
    s.group,
    size === "default" && s.group__default
  );
  return (
    <div className={groupClasses}>
      <Button
        handleClick={handleOpenInformation}
        size={size}
        text="Information"
      />
      <Button handleClick={handleCreateNewOrder} size={size} text="Customize" />
    </div>
  );
};

export default Buttons;
