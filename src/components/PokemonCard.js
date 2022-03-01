import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon, handlePokemonCardClick }) => {
  const { no, name, pokemonType, image } = pokemon;
  return (
    <Link to={`/pokemon/${name}`}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          cursor: "pointer",
        }}
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
    </Link>
  );
};

export default PokemonCard;
