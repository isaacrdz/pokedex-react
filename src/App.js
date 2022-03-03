import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import OldPokedex from "./pages/OldPokedex";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Test from "./pages/Test";

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/oldpokedex" element={<OldPokedex />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
