import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "@redux/store";
import Button from "@common/Buttons/Red/Button";
import routes from "@routes/index";

import s from "./banner.module.scss";

const Banner: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate(routes.auth);
  };
  const handleGoToCatalog = () => {
    navigate(routes.catalog);
  };
  return (
    <section className={s.banner}>
      <div className={s.banner_wrapper}>
        <h1 className={s.banner_title}>
          Start Customizing your Clothing!
        </h1>
        <p className={s.banner_text}>
          Ceriga simplifies producing clothing by combining a powerful digital platform with
          a fully integrated supply chain. Create unique apparel with ease,
          leveraging top-tier production and unmatched customization options,
          all delivered quickly and transparently.
        </p>
        <Button
          text="Get started"
          handleClick={token ? handleGoToCatalog : handleGetStarted}
        />
      </div>
    </section>
  );
};

export default Banner;
