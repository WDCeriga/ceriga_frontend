import s from "./logo.module.scss";

import { FC } from "react";
import { Link } from "react-router-dom";

const LogoHeader: FC = () => {
  return (
    <Link className={s.link} to="/">
      <h2 className={s.text}>
        ceriga<span className={s.text__red}>.</span>
      </h2>
    </Link>
  );
};

export default LogoHeader;
