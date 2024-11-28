import s from "./howItWorks.module.scss";
import { FC } from "react";
import HowItWorksItem from "./HowItWorksItem/HowItWorksItem";
import { listStorage } from "@constants/howItWorks";

const HowItWorks: FC = () => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>
        how to design <span className={s.title__gradient}>custom</span> clothing
      </h2>
      <ul className={s.list}>
        {listStorage.map((item, index) => (
          <HowItWorksItem key={index} {...item} type={item.type} />
        ))}
      </ul>
    </section>
  );
};

export default HowItWorks;
