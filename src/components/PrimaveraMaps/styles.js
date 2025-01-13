import styled from "styled-components";

export const MapsContainer = styled.div`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%; /* Preenche largura no mobile */
  height: auto; /* Ajusta altura dinamicamente */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: var(--gray-light);

  select {
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 90%; /* Ajuste da largura no mobile */
  }

  @media (min-width: 768px) {
    width: 400px;
    height: 530px;
    select {
      width: 100%;
    }
  }
`;

export const MapsDescription = styled.div`
  h3 {
    font-size: 1.2rem; /* Tamanho menor para dispositivos menores */
    margin-bottom: 10px;
    color: var(--secondary);
  }

  hr {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  p {
    margin-bottom: 10px;
    color: var(--secondary);
    font-size: 0.9rem; /* Fonte ajustada para telas pequenas */
    text-align: center;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  span {
    background-color: var(--blue);
    border: none;
    border-radius: 30px;
    color: var(--white);
    font-weight: bold;
    font-size: 1rem;
    padding: 5px 10px;
    cursor: pointer;
    text-align: center;
    transition: 0.3s;

    &:hover {
      background-color: var(--blue-hover);
    }
  }

  @media (min-width: 768px) {
    margin-top: 30px;

    span {
      font-size: 1.2rem;
      padding: 10px 40px;
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: 1.5rem;
      padding: 15px 50px;
    }
  }
`;
