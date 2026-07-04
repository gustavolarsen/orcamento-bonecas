import { createTheme } from "@mui/material";
import { palette } from "./palette";

export const theme = createTheme({
  palette: {
    primary: { main: palette.wine },
    secondary: { main: palette.rose },
    background: { default: palette.cream, paper: palette.paper },
    text: { primary: palette.ink, secondary: palette.muted },
  },
  typography: {
    fontFamily: '"Segoe UI", Inter, Arial, sans-serif',
    h1: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Georgia, serif",
      fontWeight: 600,
    },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, boxShadow: "none", padding: "10px 18px" },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
          boxShadow: "0 10px 35px rgba(233,0,70,.06)",
          border: "1px solid #f2d9df",
        },
      },
    },
    MuiTextField: { defaultProps: { variant: "outlined" } },
  },
});
