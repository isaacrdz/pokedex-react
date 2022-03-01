import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Test from "./pages/Test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
