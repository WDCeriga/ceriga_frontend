import {
  getUsersEmail,
  resetDataMessageSender,
  setDataMessageSender,
  toggleOpenMessageSender,
} from "@redux/slices/messageSender";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TrashIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { sendNotificationApi } from "@api/requests/protected";

import s from "./body.module.scss";

const BodySendMessage: FC = () => {
  const { users, data } = useSelector(
    (state: RootState) => state.messageSender
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (users === null) {
      dispatch(getUsersEmail());
    }
  }, [dispatch, users]);
  const handleChangeField = (field: "to" | "message", value: string) => {
    dispatch(setDataMessageSender({ field, value }));
  };
  const handleResetFields = () => {
    dispatch(resetDataMessageSender());
  };
  const handleSendMessage = async () => {
    await sendNotificationApi({ email: data.to, message: data.message });
    dispatch(resetDataMessageSender());
    dispatch(toggleOpenMessageSender());
  };
  const currentUsers =
    users && users.filter((user) => user.startsWith(data.to));
  const isAdded = currentUsers && currentUsers.includes(data.to);
  return (
    <div className={s.body}>
      <label className={s.body_label}>
        <p className={s.body_label_text}>Send to</p>
        <input
          className={s.body_label_input}
          onChange={(e) => handleChangeField("to", e.target.value)}
          value={data.to}
        />
      </label>
      {!isAdded && (
        <ul className={s.body_users}>
          {users &&
            currentUsers &&
            currentUsers.map((user) => {
              return (
                <li className={s.body_users_item}>
                  <button
                    onClick={() => handleChangeField("to", user)}
                    className={s.body_users_item_button}
                  >
                    {user}
                  </button>
                </li>
              );
            })}
        </ul>
      )}
      <label className={s.body_label}>
        <p className={s.body_label_text}>Message</p>
        <textarea
          className={s.body_label_textarea}
          onChange={(e) => handleChangeField("message", e.target.value)}
          value={data.message}
        ></textarea>
      </label>
      <div className={s.body_bottom}>
        <button onClick={handleSendMessage} className={s.body_bottom_button}>
          Send
        </button>
        <button onClick={handleResetFields} className={s.body_bottom_trash}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default BodySendMessage;
