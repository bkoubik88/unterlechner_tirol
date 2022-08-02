import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Link to="/">
          <Toolbar>
            <img
              width={400}
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Unterlechner"
            ></img>
          </Toolbar>
        </Link>
      </AppBar>
    </Box>
  );
}
