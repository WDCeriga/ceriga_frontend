import { FC } from "react";

import s from "./paramSmall.module.scss";

interface IParam {
  name: string;
  value: string;
}

const ParamPreviewSmall: FC<IParam> = ({name,value}) => {
  return (
    <li className={s.param}>
      <h3 className={s.param_name}>{name}</h3>
      <p className={s.param_value}>{value}</p>
    </li>
  );
};

export default ParamPreviewSmall;
