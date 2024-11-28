import s from "./logo.module.scss";

import { FC } from "react";
import classNames from "classnames";

import { MenuIcon } from "../Icons/CommonIcon";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { toggleMenu } from "@redux/slices/ui";

interface ILogo {
  isMenuOpen: boolean;
}
const Logo: FC<ILogo> = ({ isMenuOpen }) => {
  const dispatch = useDispatch<AppDispatch>();

  const logoClasses = classNames(s.logo, isMenuOpen && s.logo__opened);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  if (!isMenuOpen) {
    return (
      <button onClick={handleToggleMenu} className={s.btn}>
        <MenuIcon width="24px" height="24px" color="#FFF" type="close" />
      </button>
    );
  }

  return (
    <div className={logoClasses}>
      <>
        <h3 className={s.logo_text}>
          CERIGA<span className={s.logo_text_red}>.</span>
        </h3>
        <button onClick={handleToggleMenu} className={s.logo_menu}>
          <MenuIcon width="24px" height="24px" color="#FFF" type="open" />
        </button>
      </>
    </div>
  );
};

export default Logo;
