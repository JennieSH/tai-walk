import styled from "@emotion/styled";

export const StyledLoading = styled.div`
  .loading-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: #ffffff78;
  }

  .loading {
    margin-bottom: 20px;
    width: 30px;
    height: 30px;
    border: 4px solid ${({ theme }) => theme.color.primary};
    top: 50%;
    animation: fill 2s infinite ease;
  }

  .loading-inner {
    width: 100%;
    background-color: ${({ theme }) => theme.color.primary};
    animation: spin 2s infinite ease-in;
  }

  span {
    color: ${({ theme }) => theme.color.active};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
