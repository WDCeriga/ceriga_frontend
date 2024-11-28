import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@redux/store";
import { getUsersList } from "@redux/slices/dashboard";
import { formatDateToDDMMYY } from "@services/dataConverter";
import { IUserDashboard } from "@interfaces/bll/dashboard.interface";
// import { MenuIcon } from "@common/Icons/CommonIcon";

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
    dispatch(getUsersList());
  }, [dispatch]);

  const handleToggleRoleChanger = (idChanger: string) =>
    setIsOpenRoleChanger((prev) => (prev === idChanger ? "" : idChanger));

  const sortedUsers = users.slice().sort((a, b) => {
    const roleOrder: Record<string, number> = {
      superAdmin: 1,
      admin: 2,
      user: 3,
    };
    return (
      roleOrder[a.role as keyof typeof roleOrder] -
      roleOrder[b.role as keyof typeof roleOrder]
    );
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  return (
    <tbody className={s.body}>
      {paginatedUsers.map((user, index) => (
        <tr className={s.body_row} key={index}>
          <td className={s.body_row_user}>
            <img
              crossOrigin="anonymous"
              className={s.body_row_user_img}
              src={user.photo ? user.photo : "/img/user.svg"}
              alt={user.name}
            />
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
          <td className={s.body_row_text} style={{textAlign:"center"}}>
            <span className={s.body_row_text_gray}>{user.amountOfOrders}$</span>
            {/* <button className={s.body_row_button}>
              <MenuIcon width="24" height="24" color="#111111" type="close" />
            </button> */}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyUsersTable;
