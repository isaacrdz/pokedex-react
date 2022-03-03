import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OldPokemonCard = ({ pokemon, i }) => {
  const { name } = pokemon;

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Paper style={{ padding: "1em" }}>
        <img
          src={require(`../pokemons/${i + 1}.png`)}
          style={{ width: "100%", height: "130px", objectFit: "cover" }}
        />

        <Box textAlign={"center"}>
          <Typography>#{i + 1}</Typography>
          <Link to={`/pokemon/${i + 1}`} style={{ textDecoration: "none" }}>
            <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
              {name}
            </Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default OldPokemonCard;
