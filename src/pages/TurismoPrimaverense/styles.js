import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;

  @media (min-width: 768px) {
    padding: 20px 100px;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    padding: 20px 150px;
  }
`;

export const Left = styled.div`
  background-color: var(--gray-light);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 70%;
    margin-bottom: 0;
  }
`;

export const Right = styled.div`
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 28%;
  }
`;

export const Thumb = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const Character = styled.div`
  padding: 20px 0;

  h1 {
    margin-bottom: 15px;
    color: var(--secondary);
    font-size: 1.5rem;
  }

  hr {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
    color: var(--secondary);
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;
