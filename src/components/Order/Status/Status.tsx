import s from "./status.module.scss"

import { FC } from "react";

interface IStatusSteps { 
  step: number;
  text: string
}

const Status:FC = () => { 
  const statusState:IStatusSteps[] = [
    { 
      step: 1,
      text: "Fit Size"
    },
    {
      step: 2,
      text: "Fabric And Colour"
    },
    {
      step: 3, 
      text: "Design"
    },
    {
      step: 4,
      text: "Label"
    },
    {
      step: 5,
      text: "Packaging"
    },
    {
      step: 6,
      text: "Delivery"
    }
  ]
  return ( 
    <section className={s.container}>
      <ul>
        
      </ul>
    </section>
  )
}

export default Status