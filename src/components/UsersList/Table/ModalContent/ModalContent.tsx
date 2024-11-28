import { FC } from "react";
import { useDispatch } from "react-redux";

import { manufacturerType } from "@interfaces/bll/adminOrders.interface";
import { manufacturerStore } from "@constants/admin/orders/manufacturer";
import { AppDispatch } from "@redux/store";
import { changeManufacturerInAdmin } from "@redux/slices/dashboard";

import s from "./modalContent.module.scss";

interface IChangeManufacturer {
  id: string;
  handleClose: () => void;
}
const ChangeManufacturerModal: FC<IChangeManufacturer> = ({
  id,
  handleClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  type manufacturerTypeWithNone = manufacturerType | "None";
  const manufacturerStoreWithNone: manufacturerTypeWithNone[] = [
    ...manufacturerStore,
    "None",
  ];
  const handleChangeManufactory = (manufacturer: string) => {
    dispatch(changeManufacturerInAdmin({ id, manufacturer }));
    handleClose()
  };
  return (
    <div className={s.content}>
      <h3>Change admin manufacturer</h3>
      <ul className={s.content_list}>
        {manufacturerStoreWithNone.map((manufacturer) => (
          <li className={s.content_list_item}>
            <button
              onClick={() => handleChangeManufactory(manufacturer)}
              className={s.content_list_item_button}
            >
              {manufacturer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeManufacturerModal;
