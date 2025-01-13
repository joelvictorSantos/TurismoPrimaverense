import React, { Fragment } from "react";
import { Header, Wrapper, ContainerButton, Button } from "./styles";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import HomeCard from "../../components/Card/HomeCard";

const Home = () => {
  return (
    <Fragment>
      {/* Banner */}
      <Banner />

      {/* Header com Tailwind integrado */}
      <Header>
        <h2>Venha Conhecer o município de Primavera do Pará</h2>
        <h3>E também os seus pontos turísticos!</h3>
      </Header>

      {/* Wrapper de Cards */}
      <Wrapper>
        <HomeCard />
      </Wrapper>

      {/* Botão de Ação */}
      <ContainerButton>
        <Link to="/managem">
          <Button>
            <span>Veja mais ➡</span>
          </Button>
        </Link>
      </ContainerButton>
    </Fragment>
  );
};

export default Home;
