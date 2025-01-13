import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 200px;
  right: 10px;
  z-index: 999; /* Garante que fique sobre outros elementos */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Toggle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0078d4; /* Azul VLibras */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;

 &:hover {
    background-color: #0078d4;
    transform: scale(1.1); /* Aumenta levemente ao passar o mouse */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 8px 2px #80c7ff;
  }
`;

export const Icon = styled.div`
  font-size: 24px;
  color: white;
`;

export const Menu = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 3px;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute; /* Permite posicionamento relativo ao botão */
  top: 50%; /* Centraliza verticalmente em relação ao botão */
  transform: translateY(-50%); /* Ajusta o deslocamento vertical */
  left: -135px; /* Move o menu para o lado esquerdo */
  width: 125px;
  z-index: 1000; /* Garante que fique acima de outros elementos */

  @media (max-width: 768px) {
    width: 100px; /* Ajusta o tamanho em telas menores */
    left: -110px; /* Ajuste para telas pequenas */
  }
`;

export const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  color: #002F6C;
  border-radius: 5px;
  text-align: center;
`;
