import s from "./select.module.scss";
import { FC, useState, useEffect, useRef } from "react";
import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { selectStyleType } from "@interfaces/order/selectStyle.interface";
import { stylesStore } from "@constants/order/selectStyle";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { updateDeyStyle } from "@redux/slices/order";

const SelectColorStyle: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const active = useSelector((state: RootState) => state.order.dyeStyle) as selectStyleType;

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Active style dispatched:", active);
  }, [active, dispatch]);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const handleSelect = (style: selectStyleType) => {
    console.log("Selected style:", style);
    dispatch(updateDeyStyle(style));
    setMenuIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const listClassnames = classNames(
    s.select_list,
    menuIsOpen && s.select_list__open
  );

  console.log("Rendering with active:", active);

  return (
    <div className={s.select} ref={selectRef}>
      <button className={s.select_btn} onClick={toggleMenu}>
        <p className={s.select_btn_text}>
          {active ? (stylesStore[active]?.text || "Select an option") : "Select an option"}
        </p>
        <div className={s.select_btn_icon}>
          <ArrowVerticalIcon
            type={menuIsOpen ? "top" : "bottom"}
            width="10"
            height="6"
            color="#111111"
          />
        </div>
      </button>

      <ul className={listClassnames}>
        {Object.keys(stylesStore).map((key) => {
          const styleKey = key as selectStyleType;
          return (
            <li key={stylesStore[styleKey].id} className={s.select_list_item}>
              <button
                className={classNames(
                  s.select_list_item_btn,
                  active === styleKey && s.active
                )}
                onClick={() => handleSelect(styleKey)}
              >
                {stylesStore[styleKey].text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectColorStyle;