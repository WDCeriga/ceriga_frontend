import { FC } from "react";

import Title from "@common/Title/Title";

import DraftList from "./List/List";
import s from "./drafts.module.scss";

const Drafts: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.wrapper}>
        <Title text="Drafts" />
        <p className={s.section_description}>
          Designs that have not been finished or have not been submitted.
        </p>
        <DraftList/>
      </div>
    </section>
  );
};

export default Drafts;
