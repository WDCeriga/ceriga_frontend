import { FC } from "react";

import { ErrorIcon } from "../../Common/Icons/CommonIcon";
import s from "./error.module.scss";

interface IErrorMessage {
  text: string | undefined;
  withoutIcon?: boolean;
}

const ErrorMessage: FC<IErrorMessage> = ({ text, withoutIcon }) => {
  if (text) {
    return (
      <div className={s.error}>
        {withoutIcon && <ErrorIcon width="16" height="16" color="#C80F0F" />}
        <p className={s.error_message}>{text}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorMessage;
