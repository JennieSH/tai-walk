import styled from "@emotion/styled";

export const StyledSearchList = styled.section`
  margin: 60px 8px 0 8px;

  .search-result {
    display: flex;
    align-items: baseline;

    h2 {
      margin: 0 16px;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      font-size: ${({ theme }) => theme.fontSize["5xl"]};

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        font-size: ${({ theme }) => theme.fontSize["2xl"]};
      }
    }

    span {
      margin: 0 4px;
      color: ${({ theme }) => theme.color["green-300"]};
    }
  }

  .search-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 60px;

    .card-img {
      @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 300px;
      }
    }
  }

  .search-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    span {
      display: block;
      text-align: center;
      line-height: 1.5rem;
    }
  }
`;
