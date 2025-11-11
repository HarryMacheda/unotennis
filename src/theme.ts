import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2D48CD", 
    },
    secondary: {
      main: "#F35E20",
    },
    tertiary: {
      main: "#1d8738ff",
    },
    background: {
      default: "#ffffff", 
      paper: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
