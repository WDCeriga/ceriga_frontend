import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { changeTableSize, changeTableType } from "@redux/slices/order";

import { tableSizes } from "../../../../constants/order/sizeTables/sizes";
import SelectSize from "./Select/Select";
import SizeTable from "./Table/Table";
import s from "./sizes.module.scss";

interface ISizesSettings {
  handleClose: () => void;
}

const SizesSettings: FC<ISizesSettings> = ({ handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { productType, tableSize, tableType } = useSelector(
    (state: RootState) => state.order
  );

  const firstType =
    productType && tableSizes[productType as keyof typeof tableSizes]
      ? tableSizes[productType as keyof typeof tableSizes].list[0]
      : "";

  const [typeActive, setTypeActive] = useState<string>(
    tableType !== null ? tableType : firstType
  );


  const tableValuesAll =
    productType && productType in tableSizes
      ? tableSizes[productType as keyof typeof tableSizes]
      : [];
  console.log(productType);
  console.log(typeActive)
  if (typeActive !== "Custom") {
    dispatch(changeTableSize(tableValuesAll[typeActive].table));
  }
  // else {
  //   dispatch(changeTableSize(resetValuesToZero(tableSize)));
  // }
  useEffect(() => {
    dispatch(changeTableType(typeActive));
  }, [typeActive, dispatch]);
  useEffect(() => {
    if (tableType !== null) {
      setTypeActive(tableType);
    }
  }, [dispatch, tableType]);
  const handleTypeActive = (newType: string) => {
    setTypeActive(newType);
  };

  return (
    <section className={s.section}>
      <h2
        className={s.container_group_title}
        style={{
          position: "absolute",
          textAlign: "left", // Aligns the text to the left
          fontWeight: 400,   // Customizes font weight
          fontSize: "24px",  // Sets the font size
          left: "14px", // Adds spacing below the title
        }}
      >
        Measurement Table
      </h2>
      <button onClick={handleClose} className={s.section_button}>
        <CloseIcon width="22" height="22" color="#000" />
      </button>
      <SelectSize
        typeActive={typeActive}
        handleTypeActive={handleTypeActive}
        productType={productType || ""}
      />
      <SizeTable sizes={tableSize} />
    </section>
  );
};

export default SizesSettings;
