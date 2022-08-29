import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;

  padding: 1rem;
  padding-bottom: 2rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    img {
      width: 40%;
      height: 70%;
      border-radius: 6px;
      @media (max-width: 600px) {
        width: 100%;
      }
    }

    aside {
      width: 50%;
      @media (max-width: 600px) {
        width: 100%;

        margin-bottom: 1rem;
      }
    }
  }
`;

export const Bar = styled.div`
  width: 60px;
  height: 0.2rem;

  background-color: ${({ theme }) => theme.colors.hover_color};

  margin-bottom: 1rem;
`;

export const WrapperContainer = styled.div`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.gray_line};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  padding: 1.5rem 0;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.primary};

  text-align: left;

  @media (max-width: 600px) {
    text-align: center;

    font-size: 1rem;
  }
`;
