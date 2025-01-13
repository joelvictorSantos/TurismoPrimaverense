import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 200px;
  right: 10px;
  z-index: 1000;
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #0078d4; /* Azul VLibras */
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

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
   display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
