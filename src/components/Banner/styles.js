import primaveraImg from '../../assets/imgPrincipal.png';
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 80px 20px;
  background-size: cover;
  background-position: center;
  background-image: url(${primaveraImg});
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Overlay escuro */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Fundo escuro transparente */
    z-index: 1;
  }

  @media (min-width: 768px) {
    padding: 100px 50px;
    min-height: 400px;
  }

  @media (min-width: 992px) {
    padding: 100px 105px;
    min-height: 500px;
  }
`;

export const Text = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  align-self: flex-start; /* Move o texto para cima */

  h2 {
    color: var(--white);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p {
    color: var(--white);
    font-size: 1rem;
    margin-bottom: 20px;
  }

  span {
    background-color: var(--blue);
    color: var(--white);
    font-weight: bold;
    font-size: 1rem;
    padding: 10px 50px;
    border-radius: 20px;
    cursor: pointer;
    display: inline-block;
    transition: 0.3s;

    &:hover {
      background-color: var(--blue-hover);
    }
  }

  @media (min-width: 768px) {
    width: 60%;
    text-align: left; /* Alinha o texto à esquerda */
    margin-top: -50px; /* Move o texto para cima */
    margin-left: 10px; /* Adiciona um deslocamento para a esquerda */

    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 1.1rem;
      padding: 12px 60px;
    }
  }

  @media (min-width: 992px) {
    h2 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.2rem;
      padding: 12px 100px;
    }
  }
`;
