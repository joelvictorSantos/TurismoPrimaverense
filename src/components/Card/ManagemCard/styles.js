import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding-bottom: 18px;
`;

export const Container = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: var(--gray-light);
  border-radius: 8px;
  overflow: hidden;
  width: 310px;
  height: auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8; /* Fundo para preencher caso a imagem não ocupe o espaço */
  overflow: hidden;
  padding: 10px;
  img {
    width: auto;
    height: 200px;
    object-fit: contain; /* Mantém a proporção da imagem sem cortá-la */
    border-bottom: 2px solid #eaeaea;
    border-radius: 8px;
  }
`;

export const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  font-weight: bold;
  font-size: 0.9rem;
  color: black;

  h3 {
    font-size: 1.4rem;
    color: #0157DB;
    margin-bottom: 12px;
  }
  b {
    font-size: 0.98rem;
    color: #002F6C;
  }
  p {
    margin: 5px 0;
    font-size: 0.84rem;
    color: var(--secondary);
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 10px 20px;
    background-color: var(--blue);
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;

    &:hover {
      background-color: var(--blue-hover);
    }
  }
`;
