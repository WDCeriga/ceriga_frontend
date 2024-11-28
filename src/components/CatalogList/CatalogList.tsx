import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";
import BigTitle from "@common/Title/Big/BigTitle";
import Modal from "@components/Modal/ModalLayout";
import Product from "@common/Product/Product";

import s from "./catalogList.module.scss";

const CatalogList: FC = () => {
  const { isActive }: { isActive: boolean } = useSelector(
    (state: RootState) => state.ui.modal
  );
  const { list } = useSelector((state: RootState) => state.products);
  return (
    <>
      {isActive && <Modal/>}
      <section className={s.container}>
        <div className={s.wrapper}>
          <div className={s.container_list}>
            <BigTitle text="Choose item to design" />
            {list &&
              list.length !== 0 &&
              list.map((item, index) => (
                <Product key={index} {...item} size="small" />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogList;
