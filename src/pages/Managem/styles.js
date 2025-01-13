import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  padding: 25px 150px;

  h2 {
    color: #0157DB;
    font-size: 2rem;
  }
    @media (max-width: 768px) {
    padding: 25px 80px;
    text-align: center;
    h2 {
    font-size: 1.4rem; 
    }
  }
`;


export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px 150px;
  background-color: var(--primary);
  @media (max-width: 1024px) {
    padding: 25px 50px; /* Reduz o padding em telas menores */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Cards em uma coluna para telas muito pequenas */
    padding: 20px;
  }
`;

export const Description = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  font-weight: bold;
  font-size: 0.9rem;
  color: black;
  p {
    margin: 5px 0;
    font-size: 0.85rem;
    color: #333;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 35%;
  background-color: var(--blue);
  border-radius: 5px; 
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    font-size: 14px;
    font-weight: bold;
    color: green;
    text-transform: uppercase; 
  }

  &:hover {
    background-color: var(--blue-hover);
  }
`;
