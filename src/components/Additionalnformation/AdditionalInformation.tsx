import { FC, useState } from "react";

import { additionalStore as initialStore } from "@constants/additionalInfo";
import Title from "@common/Title/Title";

import AddInfoSlider from "./AddInfoSlider/AddInfoSlider";
import s from "./additionalInformation.module.scss";

const Additionalnformation: FC = () => {
  const [additionalStore] = useState(initialStore);

  return (
    <section className={s.container}>
      <div className={s.wrapper}>
        <Title color="#FFF" text="Additional Information" />
      </div>
      <AddInfoSlider items={additionalStore}/>
    </section>
  );
};

export default Additionalnformation;
