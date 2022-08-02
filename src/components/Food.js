import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { saveOrder } from "../redux/artSlice";

export default function Food({ art, artObject, updateArtObject }) {
  const [artikel, setArtikel] = useState();
  const [anzahl, setAnzahl] = useState(0);
  const { currentOrder } = useSelector((state) => state.userOrder);
  const dispatch = useDispatch();

  const updateAnzahl = (artName, action) => {
    let updatedValue = {};
    if (action === "remove") {
      if (artObject[art.name] === 0) {
        return;
      }

      updatedValue = { [artName]: artObject[art.name] - 1 };

      updateArtObject(updatedValue);
    } else {
      updatedValue = { [artName]: artObject[art.name] + 1 };

      updateArtObject(updatedValue);
    }
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Card
        sx={{
          display: "flex",
          border: "1px solid #bb9a37",
          padding: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={art.img}
          alt={art.name}
          loading="lazy"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: { xs: "11rem", sm: "20rem" },
              }}
            >
              <Typography
                noWrap
                letterSpacing={1}
                sx={{ fontSize: { xs: "1.0rem", sm: "2rem" } }}
              >
                {art.name}
              </Typography>
            </Box>
            <Box
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: { xs: "11rem", sm: "20rem" },
              }}
            >
              <Typography
                noWrap
                sx={{ fontSize: { xs: "1rem", sm: "1rem" } }}
                color="text.secondary"
              >
                Inhaltsstoffe: Vitamin D1,B2
              </Typography>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              justifyContent: "space-around",
            }}
          >
            <IconButton
              aria-label="delete"
              onClick={() => updateAnzahl(art.name, "remove")}
            >
              <RemoveIcon fontSize="large"></RemoveIcon>
            </IconButton>

            <Typography variant="h5">{artObject[art.name]}</Typography>
            <IconButton
              aria-label="delete"
              onClick={() => updateAnzahl(art.name, "add")}
            >
              <AddIcon fontSize="large"></AddIcon>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </motion.div>
  );
}
