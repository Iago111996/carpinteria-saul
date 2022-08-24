import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    max-width: 1200px;
    height: 4rem;

    margin: 0 auto;

    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-family: "DynaPuff";
      font-size: 16px;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.primary};

      span {
        font-size: 28px;

        color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  main {
  }

  footer {
    width: 100%;

    padding-top: 2rem;
    padding-bottom: 3rem;

    border-top: 1px solid ${({ theme }) => theme.colors.gray_line};

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 0.8rem;

      color: ${({ theme }) => theme.colors.primary};

      padding-top: 1rem;
    }
  }
`;
