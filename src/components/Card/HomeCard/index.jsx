import React, { useState } from "react";
import {
  CardsContainer,
  Container,
  Description,
  Img
} from "./styles";

import primavera1 from "../../../assets/primavera-img/praça/sãoJoãoBatista.png";
import primavera2 from "../../../assets/primavera-img/Igreja/igrejaFontesMilagres.png";
import primavera3 from "../../../assets/primavera-img/Hotel/hotelMarphil.png";

const cars = [
  {
      id: 1,
      img: primavera1,
      name: "Praça São João Batista",
      description: "A praça São João Batista fica localizado na Avenida Gen. Moura Carvalho, representa um ponto turístico da cidade por sua bela e folclório histórico",
      slug: "pracaSaoJoao",
  },
  {
      id: 2,
      img: primavera2,
      name: "Igreja Fonte dos Milagres",
      description: "A Igreja Evangelica fonte dos Milagres tem a razão social de com proposito de Deus, sua sede se encontra no início da cidade",
      slug: "igrejaFonte",
    },
    {
      id: 3,
      img: primavera3,
      name: "Hotel Marphil",
      description: "O Hotel Marphil fica localizado na Avenida Gen. Moura Carvalho, seu espaço interno e estacionamento é um dos melhores de primavera",
      slug: "hotelMarphil",
    },
];

const HomeCard = () => {
  return (
    <CardsContainer>
      {cars.map((car) => (
        <Container key={car.id}>
          <Img>
            <img src={car.img} alt={car.name} />
          </Img>
          <Description>
            <h3>{car.name}</h3>
            <p>{car.description}</p>
          </Description>
        </Container>
      ))}
    </CardsContainer>
  );
};

export default HomeCard;