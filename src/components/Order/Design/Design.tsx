import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { orderDescription } from "@constants/order/text";
import { AppDispatch, RootState } from "@redux/store";
import { changeOrderStep } from "@redux/slices/order";
import ButtonSelect from "@common/ButtonSelect/ButtonSelect";
import Progress from "@common/Progress/Progress";
import TitleWithDescription from "@common/Title/Description/Description";

import FinalFading from "./Preview/FinalFading/FinalFading";
import FinalNeck from "./Preview/FinalNeck/FinalNeck";
import FinalStitchUpload from "./Preview/FinalStitchUpload/FinalStitchUpload";
import CustomizeLabels from "./SelectNeck/CustomizeLabels/CustomizeLabels";
import ButtonsOrder from "../Buttons/Buttons";
import DefaultImg from "../DefaultImg/DefaultImg";
import FadingImg from "./FadingImg/FadingImg";
import NeckImg from "./NeckImg/NeckImg";
import SelectNeck from "./SelectNeck/SelectNeck";
import StitchingImg from "./StitchingImg/StitchingImg";
import UploadDesign from "./UploadDesign/UploadDesign";
import sOrder from "../order.module.scss";
import s from "./design.module.scss";

const OrderDesign: FC = () => {
 
  const [menuOpen, setMenuOpen] = useState({
    uploadDesign: false,
    customizeLabels: false,
    selectNeck: false,
  });
  const dispatch = useDispatch<AppDispatch>();
  const { stitching, designUploads, labelUploads, fading, neck } = useSelector(
    (state: RootState) => state.order
  );

  const handlePrevStep = () => {
    dispatch(changeOrderStep("color"));
  };

  const handleNextStep = () => {
    dispatch(changeOrderStep("package"));
  };

  const handleToggleMenu = (name: keyof typeof menuOpen) => {
    setMenuOpen((prev) => ({
      uploadDesign: false,
      customizeLabels: false,
      selectNeck: false,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className={sOrder.left}>
        <TitleWithDescription
          title={orderDescription.design.title}
          text={orderDescription.design.text}
        />
        <Progress value={50} />
      </div>
      <div className={sOrder.center}>
        {menuOpen.uploadDesign && stitching.type !== "" ? (
          <StitchingImg />
        ) : menuOpen.customizeLabels && fading.type !== "" &&  fading.type !== "No printing"  ? (
          <FadingImg />
        ) : menuOpen.selectNeck && neck && neck.type?.length !== 0 ? (
          <NeckImg />
        ) : (
          <DefaultImg />
        )}
      </div>
      <div className={sOrder.right}>
        <div className={s.params}>
          {stitching.type.length !== 0 && !menuOpen.uploadDesign ? (
            <FinalStitchUpload
              title="Stitching And Upload Design"
              stitching={stitching.type}
              imagesList={designUploads}
              onEvent={() => handleToggleMenu("uploadDesign")}
            />
          ) : !menuOpen.uploadDesign ? (
            <ButtonSelect
              onEvent={() => handleToggleMenu("uploadDesign")}
              text="Stitching And Upload Design"
            />
          ) : null}

          {menuOpen.uploadDesign && (
            <UploadDesign
              handleClose={() => handleToggleMenu("uploadDesign")}
            />
          )}

          {!menuOpen.customizeLabels && fading.type !== "" ? (
            <FinalFading
              title="Fading And Care label"
              fading={fading.type}
              imagesList={labelUploads}
              onEvent={() => handleToggleMenu("customizeLabels")}
            />
          ) : !menuOpen.customizeLabels ? (
            <ButtonSelect
              onEvent={() => handleToggleMenu("customizeLabels")}
              text="Fading And Care label"
            />
          ) : null}

          {menuOpen.customizeLabels && (
            <CustomizeLabels
              handleClose={() => handleToggleMenu("customizeLabels")}
            />
          )}

          {!menuOpen.selectNeck && neck.type !== "" ? (
            <FinalNeck
              title="Neck Label Customization"
              neck={neck}
              onEvent={() => handleToggleMenu("selectNeck")}
            />
          ) : !menuOpen.selectNeck ? (
            <ButtonSelect
              onEvent={() => handleToggleMenu("selectNeck")}
              text="Neck label Customization"
            />
          ) : null}

          {menuOpen.selectNeck && (
            <SelectNeck handleClose={() => handleToggleMenu("selectNeck")} />
          )}
        </div>
        <ButtonsOrder
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          onlyNext={false}
          isHaveNext = { 
            stitching.type.length !== 0 &&
            neck.type !== ""
          }
        />
      </div>
    </>
  );
};

export default OrderDesign;
