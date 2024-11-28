import { FC, ReactNode } from "react";

interface IFormLayout { 
  children: ReactNode,
  handleSubmit: () => void
}

const FormLayout:FC<IFormLayout> = ({children, handleSubmit}) => { 
  return ( 
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}

export default FormLayout