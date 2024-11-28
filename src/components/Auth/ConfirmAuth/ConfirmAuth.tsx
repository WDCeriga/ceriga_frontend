import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthLayout from "../../Common/AuthLayout/AuthLayout";

import { getSocialAuth } from "../../../redux/slices/auth";

import { AppDispatch, RootState } from "../../../redux/store";

import routes from "../../../routes";

const ConfirmAuth: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token }: { token: string | undefined | null } = useSelector(
    (state: RootState) => state.auth
  );
  const { id } = useParams();
  if (token) {
    return (
      <Navigate to={token !== "error" ? `${routes.index}` : `${routes.auth}`} />
    );
  } else {
    if (id) {
      dispatch(getSocialAuth({ id }));
    } else {
      return <Navigate to="auth" />;
    }
  }
  return (
    <AuthLayout>
      <h1 style={{ textAlign: "center" }}>Loading...</h1>
    </AuthLayout>
  );
};

export default ConfirmAuth;
