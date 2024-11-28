import classNames from "classnames";
import { Country, ICountry } from "country-state-city";
import { FC, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { ArrowVerticalIcon } from "@common/Icons/NavIcons";
import { ICountrySelect } from "@interfaces/order/delivery.interface";
import { AppDispatch } from "@redux/store";
import { changeCountryForm } from "@redux/slices/order";

import s from "./select.module.scss";

interface ISelectCountry {
  initialValue: ICountrySelect | null;
}

const SelectLCountry: FC<ISelectCountry> = ({ initialValue }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchInput, setSearchInput] = useState<string>(
    initialValue !== null ? initialValue.name : ""
  );

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (countries.length === 0) {
      setCountries(Country.getAllCountries());
    }
  }, [countries]);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuIsOpen((prev) => !prev);
  };

  const handleSelectCountry = (
    event: React.MouseEvent<HTMLButtonElement>,
    countryCode: string,
    countryName: string
  ) => {
    event.preventDefault();
    const countryCandidate: ICountrySelect = {
      code: countryCode,
      name: countryName,
    };
    dispatch(changeCountryForm(countryCandidate));
    setMenuIsOpen(false);
    setSearchInput(countryName);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
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

  return (
    <div className={s.container}>
      <p className={s.label}>Country*</p>
      <div className={s.select} ref={selectRef}>
        <button className={s.select_btn} onClick={(e) => toggleMenu(e)}>
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search country..."
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
                {filteredCountries.map((country) => (
                  <li key={country.isoCode}>
                    <button
                      className={s.select_list_item_btn}
                      onClick={(event) =>
                        handleSelectCountry(
                          event,
                          country.isoCode,
                          country.name
                        )
                      }
                    >
                      {country.name}
                    </button>
                  </li>
                ))}
                {filteredCountries.length === 0 && (
                  <li className={s.no_results}>No countries found</li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectLCountry;
