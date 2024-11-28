import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { changeActiveCharInTableSize } from "@redux/slices/ui";
import { updateTableSizeParam } from "@redux/slices/order";

import { ISizeTable } from "../Table";
import s from "./body.module.scss";

const BodyTableSize: FC<ISizeTable> = ({ isPreview, sizes }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { tableSize } = useSelector((state: RootState) => state.order);
  const { activeChar } = useSelector((state: RootState) => state.ui.tableSize);
  const handleChangeActiveChar = (char: string) => {
    !isPreview && dispatch(changeActiveCharInTableSize(char));
  };
  const handleChangeSize = (
    rowName: string,
    param: string,
    newValue: string
  ) => {
    dispatch(
      updateTableSizeParam({
        rowName: rowName,
        param: param,
        newValue: Number(newValue),
      })
    );
  };
  const currentSizes = isPreview ? sizes : tableSize
  return (
    <tbody className={s.body}>
      {currentSizes!.map((row) => (
        <tr
          onClick={() => handleChangeActiveChar(row.char)}
          className={s.body_row}
          key={row.char}
        >
          <td
            className={`${s.body_row_text} ${
              activeChar === row.char && s.body_row_text__active
            }`}
          >
            <p className={s.body_row_char}>{row.char}</p>
            <p className={s.body_row_name}>{row.name}</p>
          </td>
          {row.list.map((item) => (
            <td className={s.body_row_item} key={item.param}>
              <input
                className={s.body_row_item_input}
                type="number"
                disabled={isPreview}
                value={item.value}
                onChange={(e) =>
                  handleChangeSize(row.name, item.param, e.target.value)
                }
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableSize;
