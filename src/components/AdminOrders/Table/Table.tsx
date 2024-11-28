import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { IAdminOrder } from "@interfaces/bll/adminOrders.interface";
import { RootState } from "@redux/store";

import AdminHeadTableOrders from "./Head/Head";
import AdminOrderItem from "./Item/Item";
import s from "./table.module.scss";

interface IAdminTableOrders {
  list: IAdminOrder[];
}

const AdminTableOrders: FC<IAdminTableOrders> = ({ list }) => {
  const { search, isSearch } = useSelector(
    (state: RootState) => state.adminOrders
  );
  const [menuOpenId, setMenuOpen] = useState<string>("");
  const [openManufactory, setOpenManufactory] = useState<string>("");
  const [menuStatus, setMenuStatus] = useState("");

  const handleToggleMenu = (id: string) => {
    setMenuOpen((prev) => (id === prev ? "" : id));
    setOpenManufactory("");
    setMenuStatus("");
  };
  const handleChangeManufactory = (id: string) => {
    setOpenManufactory((prev) => (id === prev ? "" : id));
    setMenuOpen("");
    setMenuStatus("");
  };

  const handleChangeMenuStatus = (id: string) => {
    setMenuStatus(id);
    setOpenManufactory("");
    setMenuOpen("");
  };

  const listOrders: IAdminOrder[] = isSearch
    ? list.filter((item) => item.id.startsWith(search))
    : list;
  return (
    <table className={s.table}>
      <AdminHeadTableOrders />
      <tbody className={s.table_body}>
        {listOrders.map((order) => (
          <AdminOrderItem
            key={order.id}
            {...order}
            menuOpenId={menuOpenId}
            openManufactory={openManufactory}
            handleToggleMenu={() => handleToggleMenu(order.id)}
            handleChangeManufactory={handleChangeManufactory}
            handleChangeMenuStatus={handleChangeMenuStatus}
            menuStatus={menuStatus}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AdminTableOrders;