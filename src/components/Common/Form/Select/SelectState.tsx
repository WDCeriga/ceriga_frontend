import classNames from "classnames";
import { IState, State } from "country-state-city";
import { FC, useEffect, useRef, useState } from "react";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { deliveryType } from "@interfaces/Delivery.interface";
import ErrorMessage from "@components/Auth/Error/Error";

import InputForm from "../Input/Input";
import s from "./select.module.scss";

interface ISelectRegion {
  countryCode: string | undefined;
  initialState: string | undefined;
  error?: string;
  onChange: (arg0: deliveryType, arg1: string) => void;
}

const SelectRegion: FC<ISelectRegion> = ({
  countryCode,
  initialState,
  onChange,
  error,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [states, setStates] = useState<IState[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (countryCode) {
      setStates(State.getStatesOfCountry(countryCode));
      setSelectedState("");
    }
  }, [countryCode]);

  useEffect(() => {
    if (initialState) {
      setSelectedState(initialState);
    }
  }, [initialState]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuIsOpen((prev) => !prev);
  };

  const handleSelectState = (
    event: React.MouseEvent<HTMLButtonElement>,
    state: string
  ) => {
    event.preventDefault();
    setSelectedState(state);
    onChange("state", state);
    setMenuIsOpen(false);
    setSearchInput(state);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
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

  if (states.length === 0) {
    return (
      <InputForm
        onChange={onChange}
        label="State/Province"
        name="state"
        initialValue={initialState}
      />
    );
  }

  return (
    <div className={s.container}>
      <p className={s.label}>State/Province</p>
      <div className={s.select} ref={selectRef}>
        <button className={s.select_btn} onClick={toggleMenu}>
          <input
            type="text"
            value={searchInput || selectedState}
            onChange={handleSearchChange}
            placeholder="Search state..."
            className={s.select_btn_search}
          />
          <div className={s.select_btn_icon}>
            <ArrowVerticalIcon
              type={menuIsOpen ? "top" : "bottom"}
              width="10"
              height="6"
              color="#111111"
            />
          </div>
        </button>
        {menuIsOpen && (
          <div className={listClassnames}>
            <div className={s.select_section}>
              <ul>
                {filteredStates.map((state) => (
                  <li key={state.isoCode}>
                    <button
                      className={s.select_list_item_btn}
                      onClick={(e) => handleSelectState(e, state.name)}
                    >
                      {state.name}
                    </button>
                  </li>
                ))}
                {filteredStates.length === 0 && (
                  <li className={s.no_results}>No states found</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
      {error && <ErrorMessage text={error} />}
    </div>
  );
};

export default SelectRegion;
