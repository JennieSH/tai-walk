import styled from "@emotion/styled";
import { StyledInputProps } from "./types";

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  color: ${({ theme }) => theme.color.secondary};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.color["gary-50"]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;
