import {
  checkCorrectTableSizes,
  checkOneSizeTableSizes,
  hasValidFilledColumn,
} from "@services/tableSizes";
import classNames from "classnames";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { orderDescription } from "@constants/order/text";
import { AppDispatch, RootState } from "@redux/store";
import { changeOrderStep } from "@redux/slices/order";
import ButtonSelect from "@common/ButtonSelect/ButtonSelect";
import Progress from "@common/Progress/Progress";
import TitleWithDescription from "@common/Title/Description/Description";

import ButtonsOrder from "../Buttons/Buttons";
import DefaultImg from "../DefaultImg/DefaultImg";
import ImageSize from "./ImageFrame/ImageSize";
import SizesSettings from "./Sizes/Sizes";
import sOrder from "../order.module.scss";
import s from "./size.module.scss";

const OrderSize: FC = () => {
  // const [isFieldTable, setFieldTableSize] = useState<boolean>(false);
  const [sizeOpen, setSizeOpen] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();
  const { productType, tableSize } = useSelector(
    (state: RootState) => state.order
  );

  const handleNextStep = () => {
    dispatch(changeOrderStep("color"));
  };
  const handleToggleSize = () => {
    setSizeOpen((prev) => !prev);
  };
  const centerClassname = classNames(sOrder.center, sOrder.center__size);

  return (
    <>
      <div className={sOrder.left}>
        <TitleWithDescription
          title={orderDescription.size.title}
          text={orderDescription.size.text}
        />
        <Progress value={10} />
      </div>
      {!sizeOpen ? (
        <div className={sOrder.center}>
          <DefaultImg />
        </div>
      ) : (
        <div className={centerClassname}>
          <ImageSize product={productType || ""} />
        </div>
      )}

      <div className={sOrder.right}>
        <div className={s.params}>
          {!sizeOpen && (
            <ButtonSelect
              onEvent={handleToggleSize}
              text="Fill in the size chart"
            />
          )}
          {sizeOpen && <SizesSettings handleClose={handleToggleSize} />}
        </div>
        <ButtonsOrder
          onlyNext={true}
          handleNextStep={handleNextStep}
          isHaveNext={
            checkOneSizeTableSizes(tableSize) ||
            hasValidFilledColumn(tableSize) ||
            checkCorrectTableSizes(tableSize)
          }
        />
      </div>
    </>
  );
};

export default OrderSize;
