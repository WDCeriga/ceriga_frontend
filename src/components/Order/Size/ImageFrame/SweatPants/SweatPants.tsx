import{ FC} from "react";

import { IImageFrame } from "../imageFrame.interface";
import styles from "./sweatPants.module.scss";

const {
  pants_1,
  img,
  line,
  arrowhead,
  letter_wrap,
  active_line,
  active_letter,
  active_arrowhead_border,
  arrow_a,
  arrow_a_letter,
  arrow_a_head,
  arrow_b_c,
  arrow_b_c_letter_b,
  arrow_b_c_letter_c,
  arrow_b_c_head,
  arrow_d,
  arrow_d_letter,
  arrow_d_head,
  arrow_e,
  arrow_e_letter,
  arrow_e_head,
  arrow_f,
  arrow_f_letter,
  arrow_f_head,
  arrow_g,
  arrow_g_letter,
  arrow_g_head,
  arrow_h,
  arrow_h_letter,
  arrow_h_head,
} = styles;

const SweatPantsSize:FC<IImageFrame>  =  ({activeChar, handleChangeActiveChar}) => {


  return (
    <div className={pants_1}>
      <img src="/img/productsSize/Sweat Pants.jpg" alt="pants-1" className={img}/>
      <div
        className={`${line} ${arrow_a} ${
          activeChar === "A" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("A")}
      >
        <span
          className={`${letter_wrap} ${arrow_a_letter} ${
            activeChar === "A" ? active_letter : ""
          }`}
        >
          A
        </span>
        <span
          className={`${arrowhead} ${arrow_a_head} ${activeChar === "A" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_b_c} ${
          (activeChar === "B" || activeChar === "C") ? active_line : ""
        }`}
      >
        <span
          className={`${letter_wrap} ${arrow_b_c_letter_b} ${
            activeChar === "B" ? active_letter : ""
          }`}
          onClick={() => handleChangeActiveChar("B")}
        >
          B
        </span>
        <span
          className={`${letter_wrap} ${arrow_b_c_letter_c} ${
            activeChar === "C" ? active_letter : ""
          }`}
          onClick={() => handleChangeActiveChar("C")}
        >
          C
        </span>
        <span
          className={`${arrowhead} ${arrow_b_c_head} ${(activeChar === "B" || activeChar === "C") ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_d} ${
          activeChar === "D" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("D")}
      >
        <span
          className={`${letter_wrap} ${arrow_d_letter} ${
            activeChar === "D" ? active_letter : ""
          }`}
        >
          D
        </span>
        <span
          className={`${arrowhead} ${arrow_d_head} ${activeChar === "D" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_e} ${
          activeChar === "E" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("E")}
      >
        <span
          className={`${letter_wrap} ${arrow_e_letter} ${
            activeChar === "E" ? active_letter : ""
          }`}
        >
          E
        </span>
        <span
          className={`${arrowhead} ${arrow_e_head} ${activeChar === "E" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_f} ${
          activeChar === "F" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("F")}
      >
        <span
          className={`${letter_wrap} ${arrow_f_letter} ${
            activeChar === "F" ? active_letter : ""
          }`}
        >
          F
        </span>
        <span
          className={`${arrowhead} ${arrow_f_head} ${activeChar === "F" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_g} ${
          activeChar === "G" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("G")}
      >
        <span
          className={`${letter_wrap} ${arrow_g_letter} ${
            activeChar === "G" ? active_letter : ""
          }`}
        >
          G
        </span>
        <span
          className={`${arrowhead} ${arrow_g_head} ${activeChar === "G" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
      <div
        className={`${line} ${arrow_h} ${
          activeChar === "H" ? active_line : ""
        }`}
        onClick={() => handleChangeActiveChar("H")}
      >
        <span
          className={`${letter_wrap} ${arrow_h_letter} ${
            activeChar === "H" ? active_letter : ""
          }`}
        >
          H
        </span>
        <span
          className={`${arrowhead} ${arrow_h_head} ${activeChar === "H" ? active_arrowhead_border : ""}`}
        ></span>
      </div>
    </div>
  );
};


export default SweatPantsSize