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
import ChooseColor from "./ChooseColor/ChooseColor";
import ChooseMaterial from "./ChooseMaterial/ChooseMaterial";
import ChoosePrinting from "./ChoosePrinting/ChoosePrinting";
import FinalColor from "./FinalColor/FinalColor";
import FinalMaterial from "./FinalMaterial/FinalMaterial";
import FinalPrinting from "./FinalPrinting/FinalPrinting";
import sOrder from "../order.module.scss";
import s from "./color.module.scss";

const OrderColor: FC = () => {
  const { color, material, dyeStyle, printing, quantity } = useSelector(
    (state: RootState) => state.order
  );
  const dispatch = useDispatch<AppDispatch>();
  const [menuState, setMenuState] = useState({
    colorIsOpen: false,
    materialIsOpen: false,
    printingIsOpen: false,
  });

  const handleToggleMenu = (menu: "color" | "material" | "printing") => {
    setMenuState((prevState) => {
      const newState = {
        colorIsOpen: false,
        materialIsOpen: false,
        printingIsOpen: false,
        [`${menu}IsOpen`]: !prevState[`${menu}IsOpen`],
      };
      return newState;
    });
  };

  const handlePrevStep = () => {
    dispatch(changeOrderStep("size"));
  };

  const handleNextStep = () => {
    dispatch(changeOrderStep("design"));
  };

  const RenderMaterial = () => {
    if (menuState.colorIsOpen || menuState.printingIsOpen || quantity.type === "Bulk") {
      return null;
    }

    return (
      <>
        {!menuState.materialIsOpen ? (
          material.name === null || material.value === null ? (
            <ButtonSelect
              onEvent={() => handleToggleMenu("material")}
              text="Choose a fabric"
            />
          ) : (
            <FinalMaterial
              title="Selected fabric"
              materialName={material.name}
              materialValue={material.value}
              onEvent={() => handleToggleMenu("material")}
            />
          )
        ) : (
          <ChooseMaterial closeEvent={() => handleToggleMenu("material")} />
        )}
      </>
    );
  };

  const RenderColor = () => {
    if (material.value === null) {
      return null;
    }
    if (menuState.materialIsOpen || menuState.printingIsOpen) {
      return null;
    }

    return (
      <>
        {menuState.colorIsOpen ? (
          <ChooseColor closeEvent={() => handleToggleMenu("color")} />
        ) : color.hex === null && dyeStyle === null ? (
          <ButtonSelect
            onEvent={() => handleToggleMenu("color")}
            text="Choose a color"
          />
        ) : (
          <FinalColor
            title="Selected color"
            color={color.hex || ""}
            dyeStyle={dyeStyle || ""}
            onEvent={() => handleToggleMenu("color")}
          />
        )}
      </>
    );
  };

  const RenderPrinting = () => {
    if (material.value === null) {
      return null;
    }
    if (menuState.colorIsOpen || menuState.materialIsOpen) {
      return null;
    }

    return (
      <>
        {menuState.printingIsOpen ? (
          <ChoosePrinting onClose={() => handleToggleMenu("printing")} />
        ) : printing === null ? (
          <ButtonSelect
            onEvent={() => handleToggleMenu("printing")}
            text="Choose printing"
          />
        ) : (
          <FinalPrinting
            title="Selected Printing"
            printingValue={printing}
            onEvent={() => handleToggleMenu("printing")}
          />
        )}
      </>
    );
  };

  return (
    <>
      <div className={sOrder.left}>
        <TitleWithDescription
          title={orderDescription.colorAndFabric.title}
          text={orderDescription.colorAndFabric.text}
        />
        <Progress value={20} />
      </div>
      <div className={sOrder.center}>
        <DefaultImg />
      </div>
      <div className={sOrder.right}>
        <div className={s.params}>
          <RenderMaterial />
          <RenderColor />
          <RenderPrinting />
        </div>
        <ButtonsOrder
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          onlyNext={false}
          isHaveNext={
            material.name !== null
          }
        />
      </div>
    </>
  );
};

export default OrderColor;
