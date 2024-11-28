import s from "./buttonSend.module.scss"
import { FC } from "react";

interface IButtonSend { 
  marginT?: string
}

const ButtonSend:FC<IButtonSend> = ({marginT}) => { 
  return ( 
    <button style={{marginTop:marginT}} className={s.btn}>
      Continue
    </button>
  )
}

export default ButtonSend