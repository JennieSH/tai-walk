import styled from "@emotion/styled";

export const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 16px 0 30px;
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
    z-index: 5;
    width: 100%;
    margin-top: 8px;
    max-height: 450px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow-y: scroll;
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
`;
