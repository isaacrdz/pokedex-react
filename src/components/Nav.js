import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";

const Nav = () => {
  return (
    <Grid item xs={12} sx={{ backgroundColor: "#CE3F3A", mb: 3 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ color: "white", p: 1, textDecoration: "none" }}
                >
                  Home
                </Typography>
              </Link>
            </Box>

            <Box>
              <Link to="/pokedex" style={{ textDecoration: "none" }}>
                <Typography sx={{ color: "white", p: 1 }}>Pokedex</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Nav;
