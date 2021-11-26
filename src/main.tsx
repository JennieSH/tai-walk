import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// style
import { ThemeProvider, Global } from "@emotion/react";
import { theme, globalStyle } from "@/styles";
// svg
import "virtual:svg-icons-register";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
