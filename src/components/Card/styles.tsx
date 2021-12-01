import styled from "@emotion/styled";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  color: ${({ theme }) => theme.color["gary-300"]};
  font-size: ${({ theme }) => theme.fontSize.sm};

  :hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  .card {
    &-img {
      width: 280px;
      height: 200px;
      border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
      overflow: hidden;

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 220px;
        height: 160px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in;
      }
    }

    &-title {
      margin: 10px 0 8px 0;
      color: ${({ theme }) => theme.color["gary-500"]};
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: ${({ theme }) => theme.fontWeight.bold};

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    &-spot {
      display: flex;
      align-items: center;

      > span {
        margin-left: 4px;
        color: ${({ theme }) => theme.color["gary-300"]};
      }
    }
  }
`;
