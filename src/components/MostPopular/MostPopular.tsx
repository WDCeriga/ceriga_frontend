import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import ModalLayout from "@components/Modal/ModalLayout";
import Title from "@common/Title/Title";
import s from "./mostPopular.module.scss";
import MostPopularSlider from "./MostPopularSlider/MostPopularSlider";

const MostPopular: FC = () => {
  const { isActive }: { isActive: boolean } = useSelector(
    (state: RootState) => state.ui.modal
  );

  return (
    <>
      {isActive && <ModalLayout />}
      <section className={s.container}>
        <Title text="most popular items" />
        <p className={s.container_description}>
          Represent your brand and vision with the highest quality clothing in the
          industry
        </p>
        <MostPopularSlider/>
      </section>
    </>
  );
};

export default MostPopular;
