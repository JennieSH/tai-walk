import styled from "@emotion/styled";

export const StyledInformation = styled.div`
  display: flex;
  margin-top: 60px;
  letter-spacing: 0.05rem;
  line-height: 30px;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
  }

  .block {
    width: 100%;
    padding: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background-color: ${({ theme }) => theme.color["gary-50"]};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      width: auto;
    }

    > div {
      display: flex;
    }

    a {
      color: ${({ theme }) => theme.color.secondary};
      word-break: break-all;
    }
  }

  .title {
    flex: none;
    color: ${({ theme }) => theme.color["gary-500"]};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }

  .map {
    width: 100%;
    height: 200px;
    margin-left: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background-color: ${({ theme }) => theme.color["green-50"]};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      margin: 30px 0 0 0;
    }
  }
`;
