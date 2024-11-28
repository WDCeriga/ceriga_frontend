import { FC, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { updateColorDescription } from "@redux/slices/order";

import Colors from "./Colors/Colors";
import SelectColorStyle from "./Select/select";
import TextareaColors from "./Textarea/Textarea";
import s from "./chooseColor.module.scss";

interface IChooseColor {
  closeEvent: () => void;
}

const ChooseColor: FC<IChooseColor> = ({ closeEvent }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { description } = useSelector((state: RootState) => state.order.color);

  const [descriptionValue, setDescriptionValue] = useState<string>(description);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleCloseWithSaveDescription = () => {
    dispatch(updateColorDescription(descriptionValue));
    closeEvent();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        dispatch(updateColorDescription(descriptionValue));
        closeEvent();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeEvent, descriptionValue, dispatch]);

  const handleChangeDescription = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionValue(event.currentTarget.value);
  };

  return (
    <div ref={containerRef} className={s.container}>
      <div className={s.container_top}>
        <h3 className={s.container_top_title}>Color Selection</h3>
        <button
          onClick={handleCloseWithSaveDescription}
          className={s.container_top_btn}
        >
          <CloseIcon width="22" height="22" color="#000" />
        </button>
      </div>
      <SelectColorStyle />
      <Colors />
      <TextareaColors
        value={descriptionValue}
        onChange={handleChangeDescription}
      />
    </div>
  );
};

export default ChooseColor;
