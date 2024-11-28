import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { rolesStore } from "@constants/users/roles";
import { formatRole } from "@services/formatRole";
import { usersRoleWithAllType } from "@interfaces/bll/dashboard.interface";
import { changeFilterUsersByRole } from "@redux/slices/dashboard";

import s from "./byRole.module.scss";

const FilterUsersByRole: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filterByRole } = useSelector((state: RootState) => state.dashboard);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleChangeRole = (newRole: usersRoleWithAllType) => {
    dispatch(changeFilterUsersByRole(newRole));
    handleToggleMenu();
  };
  return (
    <div className={s.filter}>
      <button onClick={handleToggleMenu} className={s.filter_button}>
        <p className={s.filter_button_text}>{formatRole(filterByRole)}</p>
        <ArrowVerticalIcon
          color="#111"
          width="12"
          height="6"
          type={isOpen ? "top" : "bottom"}
        />
      </button>
      {isOpen && (
        <ul className={s.filter_list}>
          {rolesStore.map(
            (role) =>
              role !== filterByRole && (
                <li className={s.filter_list_item}>
                  <button
                    onClick={() => handleChangeRole(role)}
                    className={s.filter_list_item_button}
                  >
                    {formatRole(role)}
                  </button>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default FilterUsersByRole;
