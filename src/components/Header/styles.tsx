import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 45px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    justify-content: center;
    border-bottom: none;
  }
`;

const StyledPCMenu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  li {
    padding: 16px 10px;
  }

  a {
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    color: ${({ theme }) => theme.color["gary-300"]};
    border-bottom: 2px solid ${({ theme }) => theme.color.transparent};
    letter-spacing: 0.3rem;

    &:hover {
      color: ${({ theme }) => theme.color.active};
    }

    &.active {
      color: ${({ theme }) => theme.color.primary};
      border-color: ${({ theme }) => theme.color.focus};
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: none;
  }
`;

const StyledBurger = styled.div`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

const StyledMbMenu = styled.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;

  ul {
    margin-left: auto;
    width: 65%;
    min-width: 280px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.white};
    border-bottom-left-radius: 30px;
  }

  li {
    &:nth-of-type(3) {
      border-top: 1px solid ${({ theme }) => theme.color.border};
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 32px 0;
    color: ${({ theme }) => theme.color["gary-300"]};
    text-align: center;
    letter-spacing: 0.3rem;

    &:hover {
      color: ${({ theme }) => theme.color.active};
      background-color: ${({ theme }) => theme.color.border};
    }

    &.active {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  .mb-logo {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px;

    a {
      padding: 7px 0 0 20px;
      width: auto;
      text-align: start;

      &:hover {
        background-color: ${({ theme }) => theme.color.transparent};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;

export { StyledHeader, StyledPCMenu, StyledBurger, StyledMbMenu };
