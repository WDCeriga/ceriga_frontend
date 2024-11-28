import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
        },
      },
    },
  },
});
