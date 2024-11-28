import { FC, useState } from "react";
import { RgbaColorPicker } from "react-colorful";

import { IRgba } from "../../../interfaces/Rgba.interface";
import { rgbaToHex } from "../../../services/colorConverter";
import s from "./colorPicker.module.scss";

import "./style.scss"

const ColorPicker: FC = () => {
  const [color, setColor] = useState<IRgba>({ r: 200, g: 150, b: 35, a: 0.5 });
  const handleChangeColor = (newColor:IRgba) => { 
    console.log(rgbaToHex(newColor))
    setColor(newColor)
  }
  return (
    <div className={s.picker}>
      <RgbaColorPicker color={color} onChange={handleChangeColor} />

    </div>
  );
};

/*
const ColorPicker: FC = () => {
  const [color, setColor] = useState<string>("#FFFFFF");
  const [opacity, setOpacity] = useState<number>(1);
  const rgbaColor = `${color}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")}`;
  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpacity(Number(event.target.value));
    console.log(rgbaColor)
  };

  console.log(rgbaColor);

  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <div style={{ marginTop: "10px" }}>
        <label>
          Opacity:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
          />
        </label>
      </div>
      <div style={{ marginTop: "10px" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: rgbaColor,
            border: "1px solid #000",
          }}
        />
      </div>
    </div>
  );
};
*/
export default ColorPicker;
