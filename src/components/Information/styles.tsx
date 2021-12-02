import styled from "@emotion/styled";

export const StyledInformation = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 60px;
  letter-spacing: 0.05rem;
  line-height: 30px;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
  }

  .block {
    width: 100%;
    min-height: 300px;
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

  .position {
    width: 100%;
    margin-left: 30px;

    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      margin: 30px 0 0 0;
    }

    h2 {
      color: ${({ theme }) => theme.color["gary-500"]};
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-left: 30px;
      padding: 30px 0;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.color.primary};
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.md};
      font-weight: ${({ theme }) => theme.fontWeight.bold};

      &:first-of-type {
        margin-left: 0;
      }

      &:hover {
        svg {
          color: ${({ theme }) => theme.color["green-50"]};
          transform: scale(1.05);
        }
      }

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        margin: 12px 0 0 0;

        &:first-of-type {
          margin-top: 0;
        }
      }
    }

    svg {
      color: ${({ theme }) => theme.color.border};
      transition: scale 0.2s ease-in;
    }

    &-info {
      display: flex;

      @media (max-width: ${({ theme }) => theme.screens.lg}) {
        flex-direction: column;
      }
    }
  }
`;
