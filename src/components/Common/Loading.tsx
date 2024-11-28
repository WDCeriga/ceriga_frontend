import { Box, Typography } from "@mui/material"
import { FC } from "react"

const Loading:FC= () => { 
  return ( 
    <Box sx={{
      position: "absolute",
      top: "0",
      left: "0",
      zIndex: "1",
      width: "100%",
      height: "100vh",
      background: "#33333360",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Typography sx={{
          color: "#FFF",
          fontSize: "32px"
      }}>Loading...</Typography>
    </Box>
  )
}

export default Loading