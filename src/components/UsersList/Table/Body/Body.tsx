import { FC, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { getUsersList } from "@redux/slices/dashboard";
import { formatDateToDDMMYY } from "@services/dataConverter";
import { IUserDashboard } from "@interfaces/bll/dashboard.interface";

import ChangeManufacturer from "./ChangeManufacturer/ChangeManufacturer";
import { FixedSizeList as List } from "react-window";
import s from "./body.module.scss";

interface IBodyUserTable {
  handleToggleModal: (arg0: string) => void;
  currentPage: number;
  itemsPerPage: number;
}

const BodyUsersTable: FC<IBodyUserTable> = ({
  handleToggleModal,
  currentPage,
  itemsPerPage,
}) => {
  const [isOpenRoleChanger, setIsOpenRoleChanger] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  // Get users & loading state from Redux
  const { users, isLoading } = useSelector((state: RootState) => state.dashboard);

  // Fetch paginated users from API
  useEffect(() => {
    dispatch(getUsersList({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const handleToggleRoleChanger = useCallback(
    (idChanger: string) =>
      setIsOpenRoleChanger((prev) => (prev === idChanger ? "" : idChanger)),
    []
  );

  // Skeleton Loader while fetching data
  if (isLoading) {
    return (
      <tbody className={s.body}>
        {[...Array(itemsPerPage)].map((_, i) => (
          <tr key={i} className={s.skeletonRow}>
            <td className={s.skeletonText}>Loading...</td>
            <td className={s.skeletonText}></td>
            <td className={s.skeletonText}></td>
            <td className={s.skeletonText}></td>
            <td className={s.skeletonText}></td>
            <td className={s.skeletonText}></td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <List
      height={400} // Adjust based on layout
      itemCount={users.length}
      itemSize={50} // Adjust row height
      width="100%"
    >
      {({ index, style }) => {
        const user = users[index];
        return (
          <tr style={style} key={user._id} className={s.body_row}>
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
        );
      }}
    </List>
  );
};

export default BodyUsersTable;
