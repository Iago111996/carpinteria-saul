import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 500px;

  background-image: url("https://static1.s123-cdn-static-a.com/ready_uploads/media/33819/2000_5cde40f0add55.jpg");


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .page {
  }

  .next-button {
    width: 3rem;
    height: 3rem;
    border: none;
    background: none;

    cursor: pointer;
  }

  .previous-button {
    width: 3rem;
    height: 3rem;
    border: none;
    background: none;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  height: 500px;

  margin: 2rem auto;


  .opacy {
    width: 100%;
    height: 500px;

    background: rgba(255, 255, 255, 0.6);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
