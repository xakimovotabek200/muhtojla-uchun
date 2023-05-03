import { Container, Box, Typography, Grid } from "@mui/material";
import React from "react";

function Hero() {
  return (
    <div className="big">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Container>
          <img
            className="image"
            src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <Box>
            <Typography variant="body2" color="text.secondary">
              <h2>Otabek Xakimov</h2>
            </Typography>
          </Box>
        </Container>
      </Grid>
    </div>
  );
}

export default Hero;
