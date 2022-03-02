import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import OldPokemonCard from "../components/OldPokemonCard";
import axios from "axios";

const OldPokedex = () => {
  const [pokedex, setPokedex] = useState([]);

  const [pokemon, setPokemon] = useState({
    name: "",
    no: "",
    pokemonType: "",
    image: "",
  });

  const { name, no, pokemonType, image } = pokemon;

  React.useEffect(() => {
    const getPokemons = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );

      setPokedex(data.results);
    };
    getPokemons();
  }, []);

  const handleOnChange = (e) => {
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setPokemon({
      name: "",
      no: "",
      pokemonType: "",
      image: "",
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPokedex([pokemon, ...pokedex]);
    clearForm();
  };

  const handlePokemonCardClick = (pokemon) => {
    console.log(pokemon);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              {pokedex.map((pokemon, i) => (
                <Grid item xs={3} sm={3} md={3} lg={3} key={i}>
                  <OldPokemonCard
                    i={i}
                    pokemon={pokemon}
                    handlePokemonCardClick={handlePokemonCardClick}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default OldPokedex;
