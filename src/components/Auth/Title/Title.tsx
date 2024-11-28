import { FC } from "react";

import { formType } from "../../../interfaces/Auth.interfaces";
import s from "./title.module.scss";

interface ITitle {
  title: formType;
}

const Title: FC<ITitle> = ({ title }) => {
  return (
    <>
      {title === "signIn" && (
        <h2 className={s.title}>
          Log in to your CERIGA<span className={s.title__red}>.</span> account
        </h2>
      )}
      {title === "signUp" && (
        <h2 className={s.title}>
          Register to your CERIGA<span className={s.title__red}>.</span> account
        </h2>
      )}
      {title === "resetEmail" && (
        <h2 className={s.title}>
         Type your email address
        </h2>
      )}
      {title === "resetCode" && (
        <h2 className={s.title}>
         Type the code and new password
        </h2>
      )}
    </>
  );
};

export default Title;
