import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
const Pokemon = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = React.useState({});

  const { name } = pokemon;

  React.useEffect(() => {
    const getPokemon = async () => {
      const pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      setPokemon(pokemon.data);
    };

    getPokemon();
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Paper style={{ padding: "1em" }}>
        <img
          src={require(`../pokemons/${id}.png`)}
          style={{ width: "100%", height: "130px", objectFit: "cover" }}
        />

        <Box textAlign={"center"}>
          <Typography>No.{id}</Typography>
          <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
            {name}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Pokemon;
