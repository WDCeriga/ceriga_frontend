import {
  createGradient,
  getObjectByValueProgress,
} from "@services/generateGradient";
import { FC } from "react";

import { DataItem } from "@interfaces/Analytics.interface";

import s from "./progress.module.scss";

interface IProgress {
  value: number;
}

const Progress: FC<IProgress> = ({ value }) => {
  const data: DataItem[] = [
    getObjectByValueProgress(value) || { value: 100 - value, color: "#C80F0F" },
    {
      value: 100 - value,
      color: "#f5f5f5",
    },
  ];

  return (
    <div
      className={s.donutChart}
      style={{
        background: `conic-gradient(${createGradient(data)})`,
      }}
    >
      <div className={s.donutChart__innerCircle}></div>
      <h3 className={s.donutChart_text}>{value}%</h3>
    </div>
  );
};

export default Progress;
