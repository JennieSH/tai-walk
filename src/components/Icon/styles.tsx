import styled from "@emotion/styled";
import { StyledIconProps } from "./types";

export const StyledIcon = styled.svg<StyledIconProps>`
  width: ${({ width }) => (width ? width : "1.875rem")};
  height: ${({ height }) => (height ? height : "1.875rem")};
  color: ${({ color }) => color && color};
`;
