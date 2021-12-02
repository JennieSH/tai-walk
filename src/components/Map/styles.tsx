import styled from "@emotion/styled";

export const StyledMap = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
  }
`;
