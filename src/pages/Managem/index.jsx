import React, { Fragment } from "react";
import {
  Header, 
  Wrapper
} from "./styles";
import PrimaveraData from "../../primaverData/Primavera";
import ManagemCard from "../../components/Card/ManagemCard";

const Managem = () => {
  
  return (
    <Fragment>
      <Header>
        <h2>Encontre os Pontos Turísticos de Primavera</h2>
      </Header>
      <Wrapper>
        {PrimaveraData.map((car) => (
          <ManagemCard 
            key={car.id}
            id={car.id} // Passe o ID para gerar o link corretamente
            img={car.img}
            name={car.name}
            description={car.description}
            price={car.price}
            slug={car.slug}
          />
        ))}
      </Wrapper>
    </Fragment>
  );
};

export default Managem;
