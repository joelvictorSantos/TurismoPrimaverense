import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 20px 15px;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--blue);

  @media (min-width: 768px) {
    padding: 25px 50px;
  }

  @media (min-width: 992px) {
    padding: 25px 138px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    color: white;

    h1 {
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0;
    }

    h2 {
      font-size: 1.1rem;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 65px;
    }

    div {
      h1 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 992px) {
    img {
      width: 73px;
    }

    div {
      h1 {
        font-size: 1.2rem;
      }

      h2 {
        font-size: 1.4rem;
      }
    }
  }
`;
