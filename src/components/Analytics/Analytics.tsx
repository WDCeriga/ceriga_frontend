import { FC, useState } from "react";

import { DataItem, IAnalyticsItem } from "@interfaces/Analytics.interface";
import { createGradient } from "@services/generateGradient";

import s from "./analytics.module.scss";

interface IAnalyticsComponent {
  title: string;
  items: IAnalyticsItem[];
}

const Analytics: FC<IAnalyticsComponent> = ({ title, items }) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const data: DataItem[] = items[activeSection].data;

  const handleSetActive = (id: number) => setActiveSection(id);

  return (
    <section className={s.section}>
      <div className={s.section_left}>
        <div
          className={s.donutChart}
          style={{
            background: `conic-gradient(${createGradient(data)})`,
          }}
        >
          <div className={s.donutChart__innerCircle}></div>
          <h3 className={s.donutChart_text}>{data[0].value}</h3>
        </div>
      </div>
      <div className={s.section_right}>
        <h3 className={s.section_right_title}>{title}</h3>
        <ul className={s.section_right_list}>
          {items.map((item, index) => (
            <li key={item.text} className={s.section_right_list_item}>
              <button
                onClick={() => handleSetActive(index)}
                className={`${s.section_right_list_item_button} ${
                  index === activeSection &&
                  s.section_right_list_item_button__active
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Analytics;
