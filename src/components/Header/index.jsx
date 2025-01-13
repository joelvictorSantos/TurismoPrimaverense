import React from "react";
import Logoimg from "../../assets/logo.png";
import LocationInfo from "../LocationPrimavera";
import { Link } from "react-router-dom";
import { 
  Container, 
  Logo 
} from "./styles"

const Header = () => {
  return (
    <Container>
          <Logo>
            <Link to="/"><img src={Logoimg} alt="" /> </Link>
            <div>
              <h1>Município</h1>
              <h2>de Primavera</h2>
            </div>
          </Logo>
          <LocationInfo />
    </Container>
  );
}

export default Header
