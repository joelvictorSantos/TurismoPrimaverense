import styled from "styled-components";

// Header principal com textos
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px 20px;
  text-align: center;
  background-color: var(--primary);

  h2 {
    font-size: 1.8rem;
    color: #0157db;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--secondary);
  }

  @media (min-width: 768px) {
    padding: 25px 80px;
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    padding: 25px 150px;
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;

// Wrapper para os cards
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media (min-width: 576px) {
    gap: 30px;
    padding: 25px 50px;
  }

  @media (min-width: 992px) {
    justify-content: space-between;
    padding: 25px 150px;
  }
`;

// Botão de ação

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  span {
    padding: 10px 20px;
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--blue-hover);
    }
  }

  @media (min-width: 576px) {
    span {
      padding: 12px 40px;
      font-size: 16px;
    }
  }

  @media (min-width: 992px) {
    span {
      padding: 14px 50px;
      font-size: 18px;
    }
  }
`;
