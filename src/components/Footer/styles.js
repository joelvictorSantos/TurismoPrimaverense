import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  background-color: #222;
  color: white;

  @media (min-width: 768px) {
    padding: 20px 50px;
  }

  @media (min-width: 992px) {
    padding: 20px 100px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    margin: 10px 0;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    list-style: none;
    padding: 0;

    li {
      margin: 0 10px;

      span a {
        color: white;
        font-size: 1.2rem;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
          color: #0077b5;
        }
      }
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.1rem;
    }

    img {
      width: 100px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 60px;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    color: white;

    h1 {
      font-size: 1rem;
      margin: 0;
      font-weight: bold;
    }

    h2 {
      font-size: 1.2rem;
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 70px;
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

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 15px;
  background-color: #222;
  border-top: 1px solid rgb(128, 128, 128);
  font-size: 1.1rem;
  color: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 10px 0;

    li {
      margin: 0 10px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;

    ul {
      justify-content: flex-end;
    }
  }

  @media (min-width: 992px) {
    padding: 20px 100px;

    ul {
      justify-content: flex-end;
    }
  }
`;
