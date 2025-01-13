import React from "react";
import { Link } from "react-router-dom";
import { Container, Text } from "./styles";

const Banner = () => {
  return (
    <Container>
       <Text>
        <h2>Venha Conhecer a Cidade Municipal de Primavera</h2>
        <p>Não perca tempo e conheça Pontos Turísticos de Primavera do estado Paraense.</p>
        <Link to="/managem">
        <span>Pontos Turísticos</span>
        </Link>
      </Text>
    </Container>
  );
}

export default Banner
