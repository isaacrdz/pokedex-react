import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const PokemonCard = ({ pokemon, handlePokemonCardClick }) => {
  const { no, name, pokemonType, image } = pokemon;
  return (
    <Box
      onClick={() => handlePokemonCardClick(pokemon)}
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Paper style={{ padding: "1em" }}>
        <img src={image} style={{ width: "100%", objectFit: "cover" }} />

        <Box textAlign={"center"}>
          <Typography>#{no}</Typography>
          <Typography>{name}</Typography>
          <Typography>Type:{pokemonType}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default PokemonCard;
