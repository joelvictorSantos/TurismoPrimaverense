import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { MapsContainer, MapsDescription, ButtonMap } from "./styles";
import { Link } from "react-router-dom";
import Primavera from "../../primaverData/Primavera";

// Configuração do estilo do contêiner do mapa
const containerStyle = {
  width: "100%",
  height: "50vh",
};

// Centro inicial do mapa (opcionalmente pode ser ajustado dinamicamente)
const center = {
  lat: -0.947808,
  lng: -47.125713,
};

const PrimaveraMaps = () => {
  const { slug } = useParams();
  const { isLoaded } = useJsApiLoader({
    id: "google.maps.marker.AdvancedMarkerElement",
    googleMapsApiKey: "",
  });

  const point = Primavera.find((p) => p.slug === slug);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.google && window.google.maps) {
        window.google.maps.event.trigger(document.getElementById("map"), "resize");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!point) {
    return (
      <MapsContainer>
        <p>Ponto turístico não encontrado.</p>
      </MapsContainer>
    );
  }

  return (
    <Fragment>
      <MapsContainer>
        <MapsDescription>
          <h3>Localização do Ponto Turístico</h3>
          <hr />
        </MapsDescription>

        {isLoaded && (
          <GoogleMap
            id="map"
            mapContainerStyle={containerStyle}
            center={{ lat: point.lat, lng: point.lng }}
            zoom={15}
          >
            <Marker
              position={{ lat: point.lat, lng: point.lng }}
              onClick={() => setSelectedPoint(point)}
            />

            {selectedPoint && (
              <InfoWindow
                position={{ lat: selectedPoint.lat, lng: selectedPoint.lng }}
                onCloseClick={() => setSelectedPoint(null)}
              >
                <div>
                  <h3>{selectedPoint.name}</h3>
                  <p>{selectedPoint.description}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}

        <MapsDescription>
          <hr />
          <p>
            Explore os pontos turísticos de Primavera. Você está visualizando o marcador:
            <strong> {point.name}</strong>.
          </p>
          <ButtonMap>
            <Link to="/managem">
              <span>Voltar</span>
            </Link>
          </ButtonMap>
        </MapsDescription>
      </MapsContainer>
    </Fragment>
  );
};

export default PrimaveraMaps;