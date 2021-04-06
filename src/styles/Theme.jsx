import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#121212",
    white: "#eeeeee",
    lightGray: "#2a2a2a",
    lightGrayHighlighted: "#343434",
    darkGray: "#161616",
    darkGrayHighlighted: "#212121",
    red: "#b24035",
    redHighlighted: "#c74035",
    orange: "#ff4d00",
    orangeHighlighted: "#ff7400",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
