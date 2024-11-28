import { FC, useState } from "react";

import { IProductChangePrice } from "@interfaces/ChangePriceTable";
import { CloseIcon } from "@common/Icons/CommonIcon";
import { saveNewPriceInProductApi } from "@api/requests/protected";
import notification from "@services/notification";

import s from "./changeModal.module.scss";

interface IChangePriceModal {
  product: IProductChangePrice;
  handleClose: () => void;
}
const ChangePriceModal: FC<IChangePriceModal> = ({ product, handleClose }) => {
  const [form, setForm] = useState({
    startingPrice: product.startingPrice,
    bulkPrice: product.bulkPrice,
  });
  const validatePrice = (value: string) => {
    const price = parseFloat(value);
    return !isNaN(price) && price >= 0;
  };

  const handleChangePrice = (type: string, value: string) => {
    setForm({ ...form, [type]: value });
  };
  const handleSave = () => {
    if (!validatePrice(form.startingPrice) || !validatePrice(form.bulkPrice)) {
      notification.error("Please enter valid prices before saving.");
    } else {
      saveNewPriceInProductApi({ ...product, ...form }).then(() => {
        handleClose();
      });
    }
  };
  return (
    <section className={s.section}>
      <div className={s.section_top}>
        <h3 className={s.section_top_title}>Change price</h3>
        <button onClick={handleClose} className={s.section_top_button}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>

      <div className={s.section_form}>
        <label className={s.section_form_label}>
          <p className={s.section_form_label_text}>Starting Price:</p>
          <input
            className={s.section_form_label_input}
            value={form.startingPrice}
            onChange={(e) => handleChangePrice("startingPrice", e.target.value)}
          />
        </label>
        <label className={s.section_form_label}>
          <p className={s.section_form_label_text}>Bulk Price:</p>
          <input
            className={s.section_form_label_input}
            value={form.bulkPrice}
            onChange={(e) => handleChangePrice("bulkPrice", e.target.value)}
          />
        </label>
        <button onClick={handleSave} className={s.section_form_button}>
          Save
        </button>
      </div>
    </section>
  );
};

export default ChangePriceModal;
