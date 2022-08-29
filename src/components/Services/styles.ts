import styled from "styled-components";

export const WrapperContainer = styled.div`
  max-width: 1200px;

  margin: 0 auto;

  padding: 1rem;
  padding-bottom: 2rem;

  text-align: center;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  padding: 2rem 0;
`;

export const Card = styled.div`
  width: 28%;

  padding: 2rem;

  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_line};

  img {
    width: 112px;
    height: 112px;

    margin-bottom: 1.5rem;

    border-radius: 50%;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.title};
  }

  @media (max-width: 600px) {
    width: 100%;

    margin-bottom: 1rem;
  }
`;
