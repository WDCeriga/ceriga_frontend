import { FC, useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { getUsersList } from "@redux/slices/dashboard";
import { formatDateToDDMMYY } from "@services/dataConverter";
import { IUserDashboard } from "@interfaces/bll/dashboard.interface";

import ChangeManufacturer from "./ChangeManufacturer/ChangeManufacturer";
import s from "./body.module.scss";

interface IBodyUserTable {
  handleToggleModal: (arg0: string) => void;
  currentPage: number;
  itemsPerPage: number;
  users: IUserDashboard[];
}

const BodyUsersTable: FC<IBodyUserTable> = ({
  handleToggleModal,
  currentPage,
  itemsPerPage,
  users,
}) => {
  const [isOpenRoleChanger, setIsOpenRoleChanger] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const isFetchingUsers = useSelector((state: RootState) => state.dashboard.isLoading);

  useEffect(() => {
    if (!isFetchingUsers && users.length === 0) {
      dispatch(getUsersList());
    }
  }, [dispatch, users, isFetchingUsers]);

  // Pagination without sorting
  const paginatedUsers = useMemo(() => {
    if (users.length === 0) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return users.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, users]);

  const handleToggleRoleChanger = useCallback(
    (idChanger: string) =>
      setIsOpenRoleChanger((prev) => (prev === idChanger ? "" : idChanger)),
    []
  );

  return (
    <tbody className={s.body}>
      {paginatedUsers.map((user) => (
        <tr className={s.body_row} key={user._id}>
          <td className={s.body_row_user}>
            <div className={s.body_row_user_group}>
              <p className={s.body_row_user_group_name}>
                {user.name} {user.last_name}
              </p>
              <p className={s.body_row_user_group_company}>{user.company}</p>
            </div>
          </td>
          <td className={s.body_row_text}>
            {(user.role === "superAdmin" && "Super admin") || (
              <span style={{ textTransform: "capitalize" }}>{user.role}</span>
            )}
          </td>
          <td className={s.body_row_role}>
            {user.role === "admin" ? (
              <ChangeManufacturer
                id={user._id}
                manufacturer={user.manufacturer || "None"}
                isOpen={isOpenRoleChanger}
                handleChangeOpen={handleToggleRoleChanger}
                handleToggleModal={() => handleToggleModal(user._id)}
              />
            ) : null}
          </td>
          <td className={s.body_row_text}>{user.email}</td>
          <td className={s.body_row_text} style={{ textAlign: "center" }}>
            {user.lastActive ? formatDateToDDMMYY(user.lastActive) : "No set"}
          </td>
          <td className={s.body_row_text} style={{ textAlign: "center" }}>
            <span className={s.body_row_text_gray}>{user.amountOfOrders}$</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyUsersTable;
