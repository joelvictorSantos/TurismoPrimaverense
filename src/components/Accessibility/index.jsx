import React, { useEffect, useState } from "react";
import { Container, Button, Icon } from "./styles";
import { BsFillVolumeUpFill } from "react-icons/bs"; // Ícone de voz

let debounceTimeout = null; // Controla o atraso antes de iniciar a leitura

const Accessibility = () => {
  const [isReadingEnabled, setIsReadingEnabled] = useState(false); // Controla ativação/desativação
  const [hoveredElement, setHoveredElement] = useState(null);

  // Função para leitura de texto usando ResponsiveVoice
  const speakText = (text) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "Brazilian Portuguese Female"); // Define a voz
    } else {
      console.error("API ResponsiveVoice não está disponível.");
    }
  };

  // Cancela a leitura atual apenas no caso de desativação da leitura
  const stopSpeaking = () => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel(); // Interrompe qualquer fala em andamento
    }
  };

  // Configuração para leitura com atraso
  const handleMouseOver = (target) => {
    if (!isReadingEnabled || !target) return;

    const text = target.getAttribute("data-read-text") || target.innerText;
    if (text) {
      clearTimeout(debounceTimeout); // Limpa qualquer atraso anterior
      debounceTimeout = setTimeout(() => {
        speakText(text);
      }, 3000); // 3 segundos de atraso
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const target = event.target;
      if (hoveredElement !== target) {
        setHoveredElement(target);
      }
    };

    // Adiciona listeners para monitorar o movimento do mouse
    document.addEventListener("mousemove", handleMouseMove);

    // Remove listeners e limpa o debounce ao desmontar o componente
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(debounceTimeout);
    };
  }, [hoveredElement]);

  useEffect(() => {
    if (hoveredElement) {
      handleMouseOver(hoveredElement);
    }
  }, [hoveredElement, isReadingEnabled]);

  return (
    <Container>
      <Button
        onClick={() => {
          setIsReadingEnabled((prev) => {
            const newState = !prev;

            // Cancela qualquer leitura ativa apenas ao desativar a leitura
            if (!newState) {
              stopSpeaking();
            }

            // Informa o estado atual
            speakText(newState ? "Leitura ativada" : "Leitura desativada");
            return newState;
          });
        }}
      >
        <Icon>
          <BsFillVolumeUpFill />
        </Icon>
      </Button>
    </Container>
  );
};

export default Accessibility;
