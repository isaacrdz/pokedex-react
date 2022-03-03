import React, { useEffect, useState } from "react";
import OldPokemonCard from "../components/OldPokemonCard";
import axios from "axios";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";

const OldPokedex = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemons = await axios.get(
        " https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      setPokedex(pokemons.data.results);
    };
    getPokemons();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {pokedex &&
              pokedex.map((pokemon, i) => (
                <Grid item xs={12} sm={3} md={3} lg={2} key={i}>
                  <OldPokemonCard pokemon={pokemon} i={i} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OldPokedex;
