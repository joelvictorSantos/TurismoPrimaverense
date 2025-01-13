import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary: #efefef;
    --secondary: #15181C;
    --gray: #222;
    --blue: #0056b3;
    --blue-hover: #002F6C;
    --white: #FFF;
    --gray-light: #efefef;
  }

  [data-theme="dark"] {
    --primary: #1B1B1B;
    --secondary: #efefef;
    --gray: #efefef;
    --blue:  #002F6C;
    --blue-hover: #1239C3;
    --gray-light: #252525;
  }

  body {
    background-color: var(--primary);
    color: var(--secondary);
    font-family: "Dosis", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0; /* Remove margens padrão */
    min-height: 100vh; /* Garante que ocupe pelo menos toda a altura da viewport */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, nav {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  #root {
    flex: 1; /* Permite que o conteúdo ocupe o espaço restante */
  }
`;
