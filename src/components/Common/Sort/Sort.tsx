import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { SwitchIcon } from "@common/Icons/NavIcons";
import { setSortAdminOrders } from "@redux/slices/adminOrders";
import { switchSortOrders } from "@redux/slices/orders";

import s from "./sort.module.scss";

interface ISortOrders {
  type: "forAdmins" | "forUsers";
}

const SortOrders: FC<ISortOrders> = ({ type }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { sortType } = useSelector((state: RootState) =>
    type === "forAdmins" ? state.adminOrders : state.orders
  );
  const handleClick = () => {
    const newType =
      sortType === "Oldest First" ? "Newest First" : "Oldest First";
    dispatch(
      type === "forAdmins"
        ? setSortAdminOrders(newType)
        : switchSortOrders(newType)
    );
  };
  return (
    <button className={s.sort} onClick={handleClick}>
      <p className={s.sort_active}>{sortType}</p>
      <SwitchIcon color="#c80f0f" width="15" height="15" />
    </button>
  );
};

export default SortOrders;
