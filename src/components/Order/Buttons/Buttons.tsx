import { FC } from "react";

import ButtonOrder from "./Button/Button";
import s from "./buttons.module.scss";

interface IButtonsOrder {
  onlyNext?: boolean;
  isFinish?: boolean;
  isHaveNext: boolean;
  handlePrevStep?: () => void;
  handleNextStep: () => void;
}

const ButtonsOrder: FC<IButtonsOrder> = ({
  onlyNext = false,
  handlePrevStep,
  handleNextStep,
  isFinish = false,
  isHaveNext = false,
}) => {
  return (
    <section className={s.group}>
      {!onlyNext && handlePrevStep && (
        <ButtonOrder onEvent={handlePrevStep} type="noBg" text="Go back" />
      )}

     
        <ButtonOrder
          isDisabled={!isHaveNext}
          onEvent={handleNextStep}
          type="redBg"
          text={isFinish ? "Finish Design" : "Next Step"}
        />
      
    </section>
  );
};

export default ButtonsOrder;
