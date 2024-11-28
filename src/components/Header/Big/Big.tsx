import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { tokenType } from "@redux/slices/auth";
import Button from "@common/Buttons/Red/Outline/Button";
import routes from "@routes/index";

import LogoHeader from "../Logo/Logo";
import UserInfo from "../UserInfo/UserInfo";
import InfoLabel from "./Info/Info";
import s from "./big.module.scss";

interface IBigHeader {
  token: tokenType;
  isInfoLabel?: boolean;
}

const BigHeader: FC<IBigHeader> = ({ token, isInfoLabel }) => {
  const navigate = useNavigate();

  const handleGetStart = () => {
    navigate(routes.auth);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <LogoHeader />
        {isInfoLabel ? <InfoLabel /> : <div></div>}
        {token ? (
          <UserInfo />
        ) : (
          <Button handleClick={handleGetStart} text="Get started" />
        )}
      </div>
    </header>
  );
};

export default BigHeader;
