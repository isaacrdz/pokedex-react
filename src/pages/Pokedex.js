import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PokemonCard from "../components/PokemonCard";

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([
    {
      name: "Bulbasaur",
      no: "003",
      pokemonType: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },

    {
      name: "Charmander",
      no: "001",
      pokemonType: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },

    {
      name: "Squirtle",
      no: "002",
      pokemonType: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },

    {
      name: "Pikachu",
      no: "020",
      pokemonType: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    },
  ]);

  const [pokemon, setPokemon] = useState({
    name: "",
    no: "",
    pokemonType: "",
    image: "",
  });

  const { name, no, pokemonType, image } = pokemon;

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
      <Grid item xs={12} sx={{ backgroundColor: "#CE3F3A", mb: 3 }}>
        <Typography sx={{ color: "white", p: 1 }}>Pokedex</Typography>
      </Grid>

      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              {pokedex.map((pokemon, i) => (
                <Grid item xs={3} sm={3} md={3} lg={3} key={i}>
                  <PokemonCard
                    pokemon={pokemon}
                    handlePokemonCardClick={handlePokemonCardClick}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ padding: "1em" }}>
              <form type="submit">
                <Box sx={{ mb: 1 }}>
                  <TextField
                    label="No."
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                    name="no"
                    value={no}
                    onChange={(e) => handleOnChange(e)}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <TextField
                    label="Name"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                    name="name"
                    value={name}
                    onChange={(e) => handleOnChange(e)}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <TextField
                    label="Type"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                    name="pokemonType"
                    value={pokemonType}
                    onChange={(e) => handleOnChange(e)}
                  />
                </Box>
                <Box sx={{ mb: 1 }}>
                  <TextField
                    label="Image"
                    id="outlined-size-small"
                    size="small"
                    fullWidth
                    name="image"
                    value={image}
                    onChange={(e) => handleOnChange(e)}
                  />
                </Box>

                <Button
                  variant="outlined"
                  fullWidth
                  color="error"
                  onClick={(e) => handleOnSubmit(e)}
                >
                  Add Pokemon
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Pokedex;
