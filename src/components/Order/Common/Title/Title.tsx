import { FC } from "react";

import { PlusIcon } from "@common/Icons/CommonIcon";

import s from "./title.module.scss";

interface ITitleFinalDesign {
  title: string;
  onEvent: () => void;
}

const TitleFinalDesign: FC<ITitleFinalDesign> = ({ title,onEvent }) => {
  return (
    <div className={s.container}>
      <h3 className={s.container_title}>{title}</h3>
      <button className={s.container_button} onClick={onEvent}>
        <PlusIcon width="16" height="16" color="#111" />
      </button>
    </div>
  );
};

export default TitleFinalDesign;
