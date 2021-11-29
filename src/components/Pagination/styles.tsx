import styled from "@emotion/styled";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    &-list {
      display: flex;
    }

    &-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      margin: 0 4px;
      color: ${({ theme }) => theme.color["gary-300"]};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.sm};
      background-color: ${({ theme }) => theme.color.white};
      cursor: pointer;

      &.active {
        color: ${({ theme }) => theme.color.active};
        border-color: ${({ theme }) => theme.color.active};
      }
    }

    &-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      margin: 0 8px;
      padding: 0;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.sm};
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.active};

      :hover {
        color: ${({ theme }) => theme.color.white};
        border-color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primary};
      }
    }

    &-btn.disabled {
      cursor: not-allowed;
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.border};

      :hover {
        border-color: ${({ theme }) => theme.color.border};
        background-color: ${({ theme }) => theme.color.border};
      }
    }
  }
`;
