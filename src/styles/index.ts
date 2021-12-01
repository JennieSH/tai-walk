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
      box-sizing: border-box;
    }

    a {
      text-decoration: none;
    }

    input {
      outline: none;
      box-sizing: border-box;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .container {
      flex: 1 1 auto;
      width: 100%;
      margin: 0 auto;
      padding: 0 1rem;
      box-sizing: border-box;

      @media (min-width: ${theme.screens.sm}) {
        max-width: 640px;
      }

      @media (min-width: ${theme.screens.md}) {
        max-width: 768px;
      }

      @media (min-width: ${theme.screens.lg}) {
        max-width: 1024px;
      }

      @media (min-width: ${theme.screens.xl}) {
        max-width: 1280px;
      }

      @media (min-width: ${theme.screens["2xl"]}) {
        max-width: 1536px;
      }
    }
  `;
};

const globalStyle = generateGlobalStyle(theme);

export { theme, globalStyle };
