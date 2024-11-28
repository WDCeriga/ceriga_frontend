import { Typography } from "@mui/material";
import { FC } from "react";

interface IErrorMessage { 
  errorText: string | undefined
}

const ErrorMessage:FC<IErrorMessage> = ({errorText}) => { 
  return ( 
    <Typography sx={{
      padding: "3px",
      background: "#FF0000",
      color: "#FFF",
      borderRadius: "5px"
    }}>
      {errorText}
    </Typography>
  )
}

export default ErrorMessage