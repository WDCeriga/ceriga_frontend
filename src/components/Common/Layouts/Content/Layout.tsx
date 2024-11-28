import classNames from "classnames";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

import s from "./layout.module.scss";

interface ILayout {
  children?: ReactNode;
}

const ContentLayout: FC<ILayout> = ({ children }) => {
  const { isMenuOpen }: { isMenuOpen: boolean } = useSelector(
    (state: RootState) => state.ui
  );
  const layoutClasses = classNames(s.layout, isMenuOpen && s.layout__opened);
  return <main className={layoutClasses}>{children}</main>;
};

export default ContentLayout;
