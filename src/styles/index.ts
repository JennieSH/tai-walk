import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { theme, ThemeType } from "./theme";
import "./fonts.css";
import "./transition.css";

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

    ul {
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
    }

    li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  `;
};

const globalStyle = generateGlobalStyle(theme);

export { theme, globalStyle };
