import classNames from "classnames";
import { FC, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";
import routes from "@routes/index";

import HeaderMenu from "./HeaderMenu/HeaderMenu";
import NotificationInfo from "./Notification/Notification";
import SendMessageButton from "./SendMessageButton/SendMessageButton";
import s from "./userInfo.module.scss";

const UserInfo: FC = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const { name, last_name, photo, role } = useSelector(
    (state: RootState) => state.user
  );

  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const containerClassnames = classNames(
    s.container,
    isOpenMenu && s.container__open
  );

  const correctUrlToImg =
    photo && photo !== null && photo.startsWith("http")
      ? photo
      : `${routes.server.base}/public/uploads/profile/${photo}`;

  return (
    <div className={s.group}>
      <NotificationInfo />
      {role === "superAdmin" && <SendMessageButton />}
      <div className={containerClassnames}>
        <span className={s.container_group} onClick={handleToggleMenu}>
          <img
            crossOrigin="anonymous"
            className={s.container_img}
            src={correctUrlToImg}
            alt={name || "profile"}
            style={{ opacity: isOpenMenu ? "0" : "1" }}
          />
          {!isOpenMenu && (
            <p className={s.container_name}>
              {name} {last_name}
            </p>
          )}
        </span>
        {isOpenMenu && (
          <HeaderMenu
            handleClose={handleToggleMenu}
            name={name || ""}
            last_name={last_name || ""}
            photo={correctUrlToImg}
            role={role || "admin"}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
