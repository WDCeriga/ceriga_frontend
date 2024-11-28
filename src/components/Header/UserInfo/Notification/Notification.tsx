import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { NotifyIcon } from "@common/Icons/CommonIcon";
import { RootState } from "@redux/store";
import routes from "@routes/index";

import s from "./notification.module.scss";

const NotificationInfo: FC = () => {

  const { count } = useSelector(
    (state: RootState) => state.user.notification
  );
  
  return (
    <Link to={routes.notification} className={s.button}>
      {count !== 0 && <div className={s.button_count}></div>}
      <NotifyIcon />
    </Link>
  );
};

export default NotificationInfo;
