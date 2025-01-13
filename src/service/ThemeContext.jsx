import React, { createContext, 
  useState, 
  useEffect } from "react";

// Criação do contexto
export const ThemeContext = createContext();

// Provedor do contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Recupera o tema do localStorage ou usa o padrão claro
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    // Atualiza o tema no localStorage e nos estilos globais
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
