import styled from "@emotion/styled";

export const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;

  button {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    text-align: start;
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    cursor: pointer;
  }

  ul {
    position: absolute;
    width: 100%;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
  }

  li {
    padding: 16px 30px;
    background-color: ${({ theme }) => theme.color.white};
    border-top: 1px solid ${({ theme }) => theme.color.border};

    &:first-of-type {
      border-top: none;
    }

    &:hover {
      background-color: rgba(127, 151, 123, 0.2);
    }
  }

  .arrow {
    position: absolute;
    right: 16px;
    top: 12px;
  }
`;
