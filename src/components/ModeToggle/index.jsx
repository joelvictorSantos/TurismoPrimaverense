import React, { useContext, useState, useEffect } from "react";
import { Wrapper, Toggle, Icon, Menu, MenuItem } from "./styles";
import { ThemeContext } from "../../service/ThemeContext"; // Caminho para os modelos de temas
import { FiEye } from "react-icons/fi"; // Biblioteca de ícones (react-icons)

function ModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuVisible, setMenuVisible] = useState(false);
  let hideMenuTimeout = null;

  // Função para exibir o menu
  const handleMouseEnter = () => {
    clearTimeout(hideMenuTimeout); // Cancela o timeout se o mouse voltar ao botão ou menu
    setMenuVisible(true);
  };

  // Função para ocultar o menu com atraso
  const handleMouseLeave = () => {
    hideMenuTimeout = setTimeout(() => {
      setMenuVisible(false);
    }, 500); // Menu ficará visível por 500ms após o mouse sair
  };

  useEffect(() => {
    return () => {
      clearTimeout(hideMenuTimeout); // Limpa o timeout ao desmontar o componente
    };
  }, []);

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter} // Exibe o menu ao passar o mouse
      onMouseLeave={handleMouseLeave} // Oculta o menu com atraso ao sair
    >
      <Toggle>
        <Icon>
          <FiEye /> {/* Ícone de visão */}
        </Icon>
      </Toggle>
      <Menu isVisible={isMenuVisible}>
        <MenuItem onClick={toggleTheme}>
          {theme === "dark" ? "Tema Claro" : "Tema Escuro"}
        </MenuItem>
      </Menu>
    </Wrapper>
  );
}

export default ModeToggle;
