import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";
import { tokenType } from "@redux/slices/auth";

import LogoHeader from "./Logo/Logo";
import UserInfo from "./UserInfo/UserInfo";
import s from "./header.module.scss";

const Header: FC = () => {
  const { isMenuOpen }: { isMenuOpen: boolean } = useSelector(
    (state: RootState) => state.ui
  );
  const { token }: { token: tokenType } = useSelector(
    (state: RootState) => state.auth
  );

  const headerClassnames = classNames(s.container, {
    [s.container__open]: isMenuOpen,
  });

  return (
    <header className={headerClassnames}>
      <div className={s.container__logo}>{!isMenuOpen && <LogoHeader />}</div>
      {token ? <UserInfo /> : <></>}
    </header>
  );
};

export default Header;
