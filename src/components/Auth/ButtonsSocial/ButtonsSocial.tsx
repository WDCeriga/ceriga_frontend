import { socialButtons } from "../../../constants/socialAuth";
import Button from "./Button/Button";
import s from "./buttonsSocial.module.scss"

import { FC } from "react";

const ButtonsSocial:FC = () => { 
  return ( 
    <ul className={s.list}>
      {socialButtons.map(item => (
        <li key={item.id}>
          <Button serviceName={item.serviceName}/>
        </li>
      ))}
    </ul>
  )
}

export default ButtonsSocial