import React from "react";
import { Wrapper, Title, Subtitle, Link } from "./styles";

const LocationInfo = () => {
  return (
    <Wrapper>
      <Link
        href="https://www.google.com/maps?q=-0.951702,-47.129010"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Title>Localização de Primavera🌍</Title>
      </Link>
    </Wrapper>
  );
};

export default LocationInfo;
