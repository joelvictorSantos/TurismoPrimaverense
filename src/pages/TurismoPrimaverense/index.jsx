import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Container, Left, Right, Thumb, Character } from "./styles";
import PrimaveraMaps from "../../components/PrimaveraMaps";
import Cars from "../../primaverData/Primavera.js";

const TurismoPrimavrs = () => {
  const { slug } = useParams();
  const car = Cars.find((car) => car.slug === slug);

  if (!car) {
    return <h2>Carro não encontrado</h2>;
  }

  return (
    <Fragment>
      <Container>
        <Left>
          <Thumb>
            <img src={car.img} alt={car.name} />
          </Thumb>
          <Character>
            <h1>{car.name}</h1>
            <hr />
            <p>{car.description}</p>
          </Character>
        </Left>
        <Right>
    
          <PrimaveraMaps car={car} />
        </Right>
      </Container>
    </Fragment>
  );
};

export default TurismoPrimavrs;
