import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  padding: 20px 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color["gary-100"]};
`;
