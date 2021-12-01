import styled from "@emotion/styled";

export const StyledCategory = styled.section`
  h2 {
    font-size: ${({ theme }) => theme.fontSize["5xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    @media (max-width: ${({ theme }) => theme.screens.md}) {
      font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
  }

  h3 {
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  .category {
    &-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 16px;
      grid-row-gap: 12px;

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 124px;
      width: 100%;
      border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 100%;
      }
    }
  }
`;
