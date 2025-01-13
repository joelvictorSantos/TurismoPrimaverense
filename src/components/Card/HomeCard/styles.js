import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const Container = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--gray-light);
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
  width: calc(33.33% - 10px); /* Limita três cards por linha */
  max-width: 310px; /* Garante que os cards não fiquem muito grandes */
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 10px); /* Dois cards por linha em telas menores */
  }

  @media (max-width: 768px) {
    width: 100%; /* Um card por linha em telas pequenas */
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 200px; /* Altura fixa para uniformizar as imagens */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f8f8f8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #0157DB;
    margin-bottom: 12px;
    text-align: center;
  }

  p {
    font-size: 1.1rem;
    color: var(--secondary);
    margin-bottom: 8px;
    text-align: center;
  }
`;

