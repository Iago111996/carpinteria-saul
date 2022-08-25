import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    max-width: 1200px;
    min-height: 4rem;

    margin: 0 auto;

    padding: 1rem;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-family: "DynaPuff";
      font-size: 1.2rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors.primary};

      span {
        font-size: 2rem;

        color: ${({ theme }) => theme.colors.text};
      }

      @media (max-width: 400px) {
        margin-bottom: 1rem;
      }
    }
  }

  main {
    width: 100%;
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
