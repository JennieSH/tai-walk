import styled from "@emotion/styled";

export const StyledSearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    background-color: ${({ theme }) => theme.color.active};
  }

  span {
    margin-left: 10px;
    letter-spacing: 1rem;
  }
`;
