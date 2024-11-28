import { FC } from "react";
import { useSelector } from "react-redux";

import { navStore, navStoreAdmin } from "@constants/nav";
import { RootState } from "@redux/store";
import { INavInfo } from "@interfaces/Nav.interfaces";

import s from "./nav.module.scss";
import NavItem from "./NavItem";

interface INav {
  isMenuOpen: boolean;
}

const Nav: FC<INav> = ({ isMenuOpen }) => {
  const {role} = useSelector((state:RootState) => (state.user))
  const listNavigation:INavInfo[] = role === "superAdmin" ? navStoreAdmin : navStore
  return (
    <nav className={s.nav}>
      <ul className={s.nav_list}>
        {listNavigation.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            title={item.title}
            link={item.link}
            isSublist={item.isSublist}
            isMenuOpen={isMenuOpen}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
