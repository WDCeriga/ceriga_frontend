import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { materialStore } from "@constants/order/material";
import { RootState } from "@redux/store";
import { clothingGSM } from "@constants/order/material";

import ChooseMaterialCard from "./Card/Card";
import CustomChooseMaterial from "./CustomChooseMaterial/CustomChooseMaterial";
import s from "./chooseMaterial.module.scss";

interface IChooseMaterial {
  closeEvent: () => void;
}

const ChooseMaterial: FC<IChooseMaterial> = ({ closeEvent }) => {
  const [activeTab, setActiveTab] = useState<string>("default"); // Renamed 'switch' to 'activeTab'
  const containerRef = useRef<HTMLDivElement>(null);
  const { material, productType } = useSelector(
    (state: RootState) => state.order
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeEvent();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeEvent]);

  return (
    <div ref={containerRef} className={s.content}><h2
      className={s.container_group_title}
      style={{
        position: "relative",
        textAlign: "left", // Aligns the text to the left
        fontWeight: 400,   // Customizes font weight
        fontSize: "18px",  // Sets the font size
        left: "10px", // Adds spacing below the title
      }}
    >
      Fabric Selection
    </h2>
      <button onClick={closeEvent} className={s.content_btn}>
        <CloseIcon width="22" height="22" color="#000" />
      </button>
      <div className={s.content_switcher}>
        <button
          onClick={() => setActiveTab("default")}
          className={`${s.content_switcher_button} ${activeTab === "default" && s.content_switcher_button_active
            }`}
        >
          Default
        </button>
        <button
          onClick={() => setActiveTab("custom")}
          className={`${s.content_switcher_button} ${activeTab === "custom" && s.content_switcher_button_active
            }`}
        >
          Custom
        </button>
      </div>
      {activeTab === "default" ? (
        <ul className={s.content_list}>
          {materialStore.map((materialInfo) => (
            <ChooseMaterialCard
              key={materialInfo.title}
              {...materialInfo}
              values={productType ? clothingGSM[productType] : []}
              activeMaterial={material}
            />
          ))}
        </ul>
      ) : (
        <CustomChooseMaterial closeEvent={closeEvent} />
      )}
    </div>
  );
};

export default ChooseMaterial;
