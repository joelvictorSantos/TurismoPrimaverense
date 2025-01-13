import React from "react";
import { Link } from "react-router-dom";
import { GridContainer, Container, Description, Img, Button } from "./styles";

const ManagemCard = ({ description, name, img, slug }) => {
  return (
    <GridContainer>
      <Container key={slug}>
        <Img>
          <img src={img} alt={name} />
        </Img>
        <Description>
          <h3>{name}</h3>
          <p>{description}</p>
      
          <Link to={`/turismoprimavera/${slug}`}>
            <Button>
              <span>Informações</span>
            </Button>
          </Link>
        </Description>
      </Container>
    </GridContainer>
  );
};

export default ManagemCard;
