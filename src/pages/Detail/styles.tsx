import styled from "@emotion/styled";

export const StyledDetail = styled.main`
  display: flex;
  flex-direction: column;
  padding: 60px 16px 100px 16px;
  letter-spacing: 0.05rem;

  h1 {
    color: ${({ theme }) => theme.color["gary-400"]};
    font-size: ${({ theme }) => theme.fontSize["5xl"]};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize["2xl"]};
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 400px;
    margin-top: 30px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius["3xl"]};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .tag {
    width: fit-content;
    margin: 2px 4px;
    padding: 4px 12px;
    color: ${({ theme }) => theme.color["green-300"]};
    font-size: ${({ theme }) => theme.fontSize.base};
    border: 1px solid ${({ theme }) => theme.color["green-300"]};
    border-radius: ${({ theme }) => theme.borderRadius.full};

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    &-list {
      display: flex;
    }
  }

  .description {
    h2 {
      margin-top: 30px;
      color: ${({ theme }) => theme.color["gary-500"]};
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      line-height: 30px;

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        font-size: ${({ theme }) => theme.fontSize.base};
      }
    }
  }

  .recommend {
    margin-top: 60px;

    h2 {
      font-size: ${({ theme }) => theme.fontSize["4xl"]};
      font-weight: ${({ theme }) => theme.fontWeight.light};

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }

    &-link {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.color.red};
    }

    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        align-items: flex-start;
        flex-direction: column;
      }
    }

    &-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 8px;
      overflow-y: scroll;
    }
  }
`;
