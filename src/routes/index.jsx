import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; // Usando a estrutura atualizada do React Router v6+

import Header from "../components/Header";
import Home from "../pages/Home";
import Managem from "../pages/Managem";
import ManagemCard from "../components/Card/ManagemCard";
import TurismoPrimavrs from "../pages/TurismoPrimaverense";
import Error from "../pages/Error";
import Footer from "../components/Footer";

const RouterApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/managem" element={<Managem />} />
        <Route path="/cardmanagem" element={<ManagemCard />} />
        <Route path="/turismoprimavera/:slug" element={<TurismoPrimavrs />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RouterApp;
