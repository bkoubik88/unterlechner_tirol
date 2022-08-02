import {
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Rupriken from "../components/Rupriken.js";
import HeaderNav from "../components/HeaderNav";
export default function Home() {
  return (
    <>
      <HeaderNav></HeaderNav>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          sx={{ marginTop: { xs: "50%", sm: "20%", lg: "20%" } }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              component={"div"}
              fontWeight={"bold"}
              color={"#4b484d"}
            >
              Herzlich Willkommen
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Rupriken
              seite="login"
              artikel={process.env.PUBLIC_URL + "/Frühstück.jpg"}
            ></Rupriken>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Rupriken
              seite="news"
              artikel={process.env.PUBLIC_URL + "/unterlechner.jpg"}
            ></Rupriken>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
