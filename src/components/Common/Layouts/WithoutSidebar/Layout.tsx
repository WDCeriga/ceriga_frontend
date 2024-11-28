import classNames from "classnames";
import { FC, ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "@redux/store";
import { getInfo } from "@redux/slices/user";

import BigHeader from "../../../Header/Big/Big";
import s from "./layout.module.scss";

interface ILayout {
  children: ReactNode;
  title: string;
  isInfoLabel?: boolean;
  isImgBg?: boolean;
  position?: "center";
  background?: string;
}

const WithoutSidebarLayout: FC<ILayout> = ({
  title,
  children,
  isImgBg,
  position,
  isInfoLabel,
  background,
}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { role } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token && token !== "error") {
      dispatch(getInfo());
    }
    // if (role === "admin") {
    //   navigate(routes.adminOrders);
    // }
  }, [token, role, navigate, dispatch]);

  const mainClassnames = classNames(s.main, isImgBg && s.main__bg);
  const wrapperClassnames = classNames(
    s.wrapper,
    position === "center" && s.wrapper_center
  );
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <BigHeader isInfoLabel={isInfoLabel} token={token} />
      <main className={mainClassnames} style={{ background }}>
        <div className={wrapperClassnames}>{children}</div>
      </main>
    </>
  );
};

export default WithoutSidebarLayout;
