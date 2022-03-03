import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
const Pokemon = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = React.useState({});

  const { name, abilities, moves, types } = pokemon;

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
    <Container>
      <Grid container>
        <Grid item xs={2}>
          <img
            src={require(`../pokemons/${id}.png`)}
            style={{ width: "100px" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5" style={{ textTransform: "uppercase" }}>
            {name}
          </Typography>
          <Typography variant="h6">Type</Typography>

          {types &&
            types.map((item, i) => (
              <Typography key={i}> - {item.type.name}</Typography>
            ))}
          <Typography variant="h6">Abilities</Typography>

          {abilities &&
            abilities.map((item, i) => (
              <Typography key={i}> - {item.ability.name}</Typography>
            ))}

          <Typography variant="h6">Moves</Typography>
          {moves &&
            moves.map((item, i) => (
              <Typography key={i}> - {item.move.name}</Typography>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pokemon;
