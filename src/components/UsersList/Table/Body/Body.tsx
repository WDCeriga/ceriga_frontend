import { FC, useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
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

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsersList());
    }
  }, [dispatch, users]);

  const sortedUsers = useMemo(() => {
    const roleOrder: Record<string, number> = {
      superAdmin: 1,
      admin: 2,
      user: 3,
    };

    return users.slice().sort((a, b) => {
      return (
        roleOrder[a.role as keyof typeof roleOrder] -
        roleOrder[b.role as keyof typeof roleOrder]
      );
    });
  }, [users]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, sortedUsers]);

  const handleToggleRoleChanger = useCallback(
    (idChanger: string) =>
      setIsOpenRoleChanger((prev) => (prev === idChanger ? "" : idChanger)),
    []
  );

  return (
    <tbody className={s.body}>
      {paginatedUsers.map((user, index) => (
        <tr className={s.body_row} key={index}>
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
            ) : (
              ""
            )}
          </td>
          <td className={`${s.body_row_text} ${s.email}`}>{user.email}</td>
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
