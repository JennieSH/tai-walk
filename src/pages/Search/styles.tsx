import styled from "@emotion/styled";

export const StyledSearch = styled.main`
  padding: 60px 0 120px 0;

  .search {
    &-block {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 30px;

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        flex-direction: column;
      }
    }

    &-dropdown {
      flex-basis: 320px;
      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        flex-basis: 100%;
      }
    }

    &-calendar {
      flex-basis: 320px;
      margin-left: 16px;
      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        flex-basis: 100%;
        margin: 8px 0 0;
      }
    }

    &-input {
      margin: 0 16px;

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        margin: 8px 0;
      }
    }

    &-button {
      flex-basis: 320px;
      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        flex-basis: 100%;
      }
    }
  }
`;
