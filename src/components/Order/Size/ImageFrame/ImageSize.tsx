import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@redux/store";
import { changeActiveCharInTableSize } from "@redux/slices/ui";

import CrewneckSize from "./Crewneck/Crewneck";
import HoodiesSize from "./Hoodie/Hoodie";
import SweatPantsSize from "./SweatPants/SweatPants";
import TShirtSize from "./T-shirt/TShirt";
import TankTopSize from "./TankTop/TankTop";
import UncuffedSize from "./Uncuffed/Uncuffed";
import ZipUpHoodieSize from "./ZipUpHoodie/ZipUpHoodie";

interface IImageSize {
  product: string;
}

const ImageSize: FC<IImageSize> = ({ product }) => {
  const dispatch = useDispatch();
  const { activeChar } = useSelector((state: RootState) => state.ui.tableSize);
  const handleChangeActiveChar = (newActive: string) => {
    dispatch(changeActiveCharInTableSize(newActive));
  };
  if (product === "Hoodie") {
    return (
      <HoodiesSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "Sweat Pants") {
    return (
      <SweatPantsSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "Tank Top") {
    return (
      <TankTopSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "Zip Up Hoodie") {
    return (
      <ZipUpHoodieSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "T-shirt") {
    return (
      <TShirtSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "Crewneck") {
    return (
      <CrewneckSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  if (product === "Uncuffed") {
    return (
      <UncuffedSize
        activeChar={activeChar}
        handleChangeActiveChar={handleChangeActiveChar}
      />
    );
  }
  return null;
};

export default ImageSize;
