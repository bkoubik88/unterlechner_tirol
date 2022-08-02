import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Rupriken({ artikel, seite }) {
  return (
    <Link to={`/${seite}`} style={{ textDecoration: "none" }}>
      <Box>
        <img
          loading="lazy"
          width={"100%"}
          src={artikel}
          style={{
            objectFit: "cover",
            border: "2px solid rgba(185, 153, 55,.8)",
            boxShadow: "2px 2px 10px rgba(185, 153, 55,.8)",
          }}
          alt={seite}
        ></img>
        <Typography
          align="center"
          sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          paragraph
          color={"#4b484d"}
        >
          {seite === "login" ? "Frühstück" : "Gut zu wissen"}
        </Typography>
      </Box>
    </Link>
  );
}
