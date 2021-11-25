import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// style
import { ThemeProvider, Global } from "@emotion/react";
import globalStyle from "./styles/index";
import { theme } from "./styles/theme";
import "@/styles/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle(theme)} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
