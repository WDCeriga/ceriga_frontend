import s from "./line.module.scss"

import { FC } from "react";

const Line:FC = () => { 
  return ( 
    <hr className={s.line}/>
  )
}

export default Line