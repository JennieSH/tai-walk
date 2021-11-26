import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { theme, ThemeType } from "./theme";
import "./fonts.css";

const generateGlobalStyle = (theme: ThemeType) => {
  return css`
    ${emotionNormalize}
    html,
    body {
      padding: 0;
      margin: 0;
      background: ${theme.color.white};
      min-height: 100%;
      font-family: ${theme.fontFamily["noto-sans"]}, Helvetica, Arial, sans-serif;
    }
  `;
};

const globalStyle = generateGlobalStyle(theme);

export { theme, globalStyle };
