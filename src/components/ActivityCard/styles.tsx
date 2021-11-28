import styled from "@emotion/styled";

export const StyledActivityCard = styled.div`
  display: flex;
  height: 160px;
  color: ${({ theme }) => theme.color["gary-300"]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  overflow: hidden;

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
      flex: none;
      width: 160px;
      overflow: hidden;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease-in;
      }
    }

    &-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 30px;
    }

    &-title {
      height: 100%;
      margin: 8px 0;
      color: ${({ theme }) => theme.color["gary-500"]};
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.bold};

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      > div {
        display: flex;
        align-items: center;
      }

      span {
        margin: 0 4px;
      }

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        margin-top: 0;

        > div:last-of-type {
          display: none;
        }
      }
    }

    &-more {
      color: ${({ theme }) => theme.color.primary};
      font-weight: ${({ theme }) => theme.fontWeight.medium};

      &:hover {
        color: ${({ theme }) => theme.color.active};
      }
    }
  }
`;
