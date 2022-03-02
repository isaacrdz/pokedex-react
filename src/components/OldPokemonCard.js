import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OldPokemonCard = ({ pokemon, i }) => {
  const { no, name, pokemonType } = pokemon;

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
          <img
            src={require(`../pokemons/${i + 1}.png`)}
            style={{ width: "100%", height: "130px", objectFit: "cover" }}
          />

          <Box textAlign={"center"}>
            <Typography>#{i + 1}</Typography>
            <Typography sx={{ textTransform: "capitalize" }}>{name}</Typography>
          </Box>
        </Paper>
      </Box>
    </Link>
  );
};

export default OldPokemonCard;
