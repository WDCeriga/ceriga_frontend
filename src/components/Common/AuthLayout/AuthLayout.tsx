import s from "./authLayout.module.scss";

import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../../redux/store";
import { tokenType } from "../../../redux/slices/auth";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
  const { token }: { token: tokenType} = useSelector(
    (state: RootState) => state.auth
  );
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <main className={s.main}>
      <div className={s.content}>{children}</div>
    </main>
  );
};

export default AuthLayout;
