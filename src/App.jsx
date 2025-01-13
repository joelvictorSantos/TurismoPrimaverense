import { Fragment } from "react";
import Global from "./styles/Global";
import RouterApp from "./routes";
import { ThemeProvider } from "./service/ThemeContext";
import Accessibility from "./components/Accessibility";
import ModeToggle from "./components/ModeToggle";
function App() {
  return (
    <ThemeProvider>
      <Fragment>
        <Accessibility />
        <ModeToggle />
        <RouterApp />
        <Global />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
