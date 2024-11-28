import { FC, useEffect, useState } from "react";

import { getProductsForPriceApi } from "@api/requests/protected";
import { IProductChangePrice } from "@interfaces/ChangePriceTable";
import ModalLayout from "@common/Layouts/Modal/Layout";

import ChangePriceModal from "./ChangeModal/ChangeModal";
import s from "./table.module.scss";

const TableChangePrice: FC = () => {
  const [data, setData] = useState<IProductChangePrice[]>([]);
  const [productForModal, setProductForModal] =
    useState<IProductChangePrice | null>(null);
  const [modalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
    getProductsForPriceApi().then((res) => setData(res));
  };
  const handleChangePrice = (product: IProductChangePrice) => {
    setProductForModal(product);
    handleToggleModal();
  };
  useEffect(() => {
    getProductsForPriceApi().then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <>
      <table className={s.table}>
        <thead className={s.table_head}>
          <tr className={s.table_head_row}>
            <th className={s.table_head_row_item}>Product Name</th>
            <th className={s.table_head_row_item}>Price</th>
            <th className={s.table_head_row_item}>Bulk Price</th>
            <th className={s.table_head_row_item}></th>
          </tr>
        </thead>
        <tbody className={s.table_body}>
          {data.map((item) => (
            <tr key={item.id} className={s.table_body_row}>
              <td className={s.table_body_row_item}>{item.name}</td>
              <td className={s.table_body_row_item}>{item.startingPrice} $</td>
              <td className={s.table_body_row_item}>{item.bulkPrice} $</td>
              <td className={s.table_body_row_item}>
                <button onClick={() => handleChangePrice(item)}>Change</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen ||
        (productForModal && (
          <ModalLayout handleClose={handleToggleModal}>
            <ChangePriceModal
              product={productForModal}
              handleClose={handleToggleModal}
            />
          </ModalLayout>
        ))}
    </>
  );
};

export default TableChangePrice;
