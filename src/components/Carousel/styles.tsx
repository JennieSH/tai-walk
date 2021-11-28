import styled from "@emotion/styled";

export const StyledCarousel = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color["gary-100"]};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  overflow: hidden;
  height: 500px;

  .slide {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity ease-in-out 1s;
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &-title {
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme.color.white};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
  }

  .controller {
    position: absolute;
    top: calc(50% - 8px);
    cursor: pointer;

    &-left {
      left: 12px;
    }
    &-right {
      right: 12px;
    }
  }

  .dot-list {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 32px;
    cursor: pointer;

    li {
      margin: 0 6px;
      width: 16px;
      height: 16px;
      border-radius: ${({ theme }) => theme.borderRadius.full};
      background-color: ${({ theme }) => theme.color["gary-100"]};
      opacity: 80%;

      &.active {
        background-color: ${({ theme }) => theme.color.white};
      }
    }
  }
`;
