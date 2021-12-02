import styled from "@emotion/styled";

export const StyledBreadcrumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    padding: 0 4px;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  a {
    margin: 2px 8px;
    color: ${({ theme }) => theme.color.active};

    &::after {
      content: "/";
      position: relative;
      right: -8px;
      color: ${({ theme }) => theme.color["gary-500"]};
    }
  }

  span:last-of-type {
    margin: 2px 0 2px 8px;
    color: ${({ theme }) => theme.color["gary-300"]};
  }
`;
