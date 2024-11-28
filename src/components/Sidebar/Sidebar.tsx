import s from "./sidebar.module.scss";

import { FC } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Logo from "@common/Logo/Logo";
import Nav from "./Nav/Nav";

import { RootState } from "@redux/store";

const Sidebar: FC = () => {
  const { isMenuOpen }: { isMenuOpen: boolean } = useSelector(
    (state: RootState) => state.ui
  );
  const menuClasses = classNames(s.menu, isMenuOpen && s.menu__opened);
  return (
    <header className={menuClasses}>
      <Logo isMenuOpen={isMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Sidebar;
