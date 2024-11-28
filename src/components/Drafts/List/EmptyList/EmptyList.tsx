import s from "./emptyList.module.scss";
import { FC } from "react";

interface IEmptyList {
  marginT: string;
}

const EmptyList: FC<IEmptyList> = ({ marginT }) => {
  return (
    <div className={s.block} style={{ marginTop: marginT }}>
      <p className={s.block_text}>There are no drafts yet</p>
    </div>
  );
};

export default EmptyList;
