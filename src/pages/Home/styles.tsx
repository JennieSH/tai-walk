import styled from "@emotion/styled";

export const StyledHome = styled.main`
  h2 {
    font-size: ${({ theme }) => theme.fontSize["3xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
  }

  .sub-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .checkout {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.red};

    > span {
      margin-right: 4px;
    }
  }
`;

export const StyledActivityCardList = styled.section`
  margin-top: 20px;

  .card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 12px;

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      grid-template-columns: repeat(1, 1fr);
      grid-row-gap: 16px;
    }
  }
`;

export const StyledCardList = styled.section`
  margin: 20px 0;

  &:last-of-type {
    margin-bottom: 80px;
  }

  .spot-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-y: scroll;
  }
`;
