import styled from "@emotion/styled";

export const StyledBanner = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px 0 40px 0;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    align-items: center;
    margin: 12px 0 36px 0;
  }

  h1,
  h2 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSize["7xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: 2.5rem;
    letter-spacing: 0.03em;

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize["3xl"]};
      line-height: 1.5rem;
    }
  }

  h3 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color["gary-300"]};
    font-size: ${({ theme }) => theme.fontSize["base"]};
    font-weight: ${({ theme }) => theme.fontWeight.normal};

    span:first-of-type {
      margin: 0 8px 0 4px;
      font-size: ${({ theme }) => theme.fontSize["lg"]};
    }

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.sm};

      span:first-of-type {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }
  }

  .underline {
    border-bottom: 2px solid ${({ theme }) => theme.color["green-50"]};
  }

  .search {
    &-block {
      flex: 1 1 auto;
      position: relative;
      width: 100%;
      max-width: 350px;
      margin-left: 77px;
      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        margin: 0 16px;
      }
    }
    &-bar {
      margin: 10px 0;
    }
  }
`;
