import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.gray_line};

  padding: 1rem;
`;

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;

  padding-bottom: 2rem;
  padding-top: 3rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;

    padding-bottom: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    input {
      width: 25%;
      height: 40px;

      padding: 1rem;

      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.gray_line};

      outline: none;

      font-family: ${({ theme }) => theme.fonts.regular};
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.text};

      @media (max-width: 650px) {
        width: 100%;

        margin-bottom: 1rem;
      }
    }

    button {
      width: 18%;
      height: 40px;

      background-color: ${({ theme }) => theme.colors.hover_color};

      border: none;
      border-radius: 6px;

      font-family: ${({ theme }) => theme.fonts.bold};
      font-size: 1.2rem;

      color: ${({ theme }) => theme.colors.shape};

      cursor: pointer;

      @media (max-width: 650px) {
        width: 50%;
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

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  padding: 2rem 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Left = styled.div`
  width: 30%;

  text-align: left;

  @media (max-width: 700px) {
    width: 100%;

    order: 2;

    text-align: center;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.primary};

    padding-bottom: 1.5rem;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;

    color: ${({ theme }) => theme.colors.hover_color};

    padding: 0.5rem 0;

    
  }
`;

export const Rigth = styled.div`
  width: 70%;

  text-align: right;

  img {
    width: 90%;
    height: 300px;

    object-fit: cover;
  }

  @media (max-width: 700px) {
    width: 100%;

    order: 1;

    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 200px;

      object-fit: cover;
    }
  }
`;
