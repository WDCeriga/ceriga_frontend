import s from "./button.module.scss";

import { FC } from "react";

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from "../../../Common/Icons/social";

import { socialName } from "../../../../interfaces/SocialAuth.interfaces";
import routes from "../../../../routes";

interface IButton {
  serviceName: socialName;
}

const Button: FC<IButton> = ({ serviceName }) => {
  let Icon: FC = () => null;
  switch (serviceName) {
    case "Google":
      Icon = () => <GoogleIcon width="15px" height="15px" />;
      break;
    case "Facebook":
      Icon = () => <FacebookIcon width="17px" height="16px" />;
      break;
    case "Apple":
      Icon = () => <AppleIcon width="14px" height="16px" />;
      break;
    default:
      Icon = () => null;
  }
  const handleClick = () => {
    window.location.href = `${routes.server.base}${routes.server.authGoogle}`;
  };
  return (
    <button onClick={handleClick} className={s.btn}>
      <Icon />
      <p className={s.btn_text}>Continue with {serviceName}</p>
    </button>
  );
};

export default Button;
