import { FC } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@redux/store";
import { closeModal } from "@redux/slices/ui";
import { clearOpenProduct } from "@redux/slices/products";

import ModalProduct from "./Product/ModalProduct";
import s from "./modalLayout.module.scss";

const ModalLayout: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleCloseModal = () => {
    dispatch(clearOpenProduct());
    dispatch(closeModal());
  };
  return (
      <section onClick={handleCloseModal} className={s.container}>
        <ModalProduct />
      </section>
  );
};

export default ModalLayout;
