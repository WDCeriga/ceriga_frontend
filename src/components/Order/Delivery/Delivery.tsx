import { FC, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { orderDescription } from "@constants/order/text";
import { AppDispatch, RootState } from "@redux/store";
import { changeOrderStep } from "@redux/slices/order";
import Progress from "@common/Progress/Progress";
import TitleWithDescription from "@common/Title/Description/Description";
import validationSchemaDelivery from "@validation/delivery";

import ButtonsOrder from "../Buttons/Buttons";
import DeliveryForm from "./Form/Form";
import sOrder from "../order.module.scss";
import s from "./delivery.module.scss";

const OrderDelivery: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { delivery } = useSelector((state: RootState) => state.order);

  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});
  const [isTryContinue, setIsTryContinue] = useState<boolean>(false);

  const handlePrevStep = () => {
    dispatch(changeOrderStep("package"));
  };

  const validateDeliveryData = useCallback(
    async (deliveryData: typeof delivery) => {
      try {
        await validationSchemaDelivery.validate(deliveryData, {
          abortEarly: false,
        });
        setValidationErrors({});
        return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        const errors: Record<string, string> = {};
        if (err.inner) {
          err.inner.forEach((error: Yup.ValidationError) => {
            if (error.path) {
              errors[error.path] = error.message;
            }
          });
        }
        setValidationErrors(errors);
        return false;
      }
    },
    []
  );
  useEffect(() => {
    const checkValidation = async () => {
      await validateDeliveryData(delivery);
    };
    if (isTryContinue) {
      checkValidation();
    }
  }, [delivery, validateDeliveryData, isTryContinue]);
  const handleNextStep = async () => {
    setIsTryContinue(true);
    const isValid = await validateDeliveryData(delivery);
    if (isValid) {
      dispatch(changeOrderStep("preview"));
    } else {
      console.log(delivery)
      console.log("Invalid delivery data");
    }
  };

  return (
    <>
      <div className={sOrder.left}>
        <TitleWithDescription
          title={orderDescription.delivery.title}
          text={orderDescription.delivery.text}
        />
        <Progress value={90} />
      </div>
      <div className={s.form}>
        <DeliveryForm delivery={delivery} validationErrors={validationErrors} />
      </div>
      <div className={sOrder.right}>
        <div></div>
        <ButtonsOrder
          isHaveNext={true}
          onlyNext={false}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      </div>
    </>
  );
};

export default OrderDelivery;
