import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import { ThemeType } from "./theme";

const globalStyle = (theme: ThemeType) => {
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

export default globalStyle;
