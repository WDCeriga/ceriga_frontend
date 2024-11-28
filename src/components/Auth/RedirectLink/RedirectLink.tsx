import s from "./redirectLink.module.scss";

import { FC } from "react";
import { Link } from "react-router-dom";
import routes from "@routes/index";

interface IRedirectLink {
  type: "signIn" | "signUp";
}

const RedirectLink: FC<IRedirectLink> = ({ type }) => {
  return (
    <div className={s.container}>
      <span className={s.container_text}>
        {type === "signIn"
          ? "Don't have an account?"
          : "Already have an account?"}
      </span>
      <Link
        className={s.container_link}
        to={
          type === "signIn"
            ? `${routes.auth}/${routes.signUp}`
            : `${routes.auth}/${routes.signIn}`
        }
      >
        {type === "signIn" ? "Sign Up" : "Log in"}
      </Link>
    </div>
  );
};

export default RedirectLink;
