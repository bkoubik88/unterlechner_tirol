import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";

export default function Filter({
  artikel,
  setFilter,
  kategorie,
  setKategorie,
}) {
  useEffect(() => {
    setFilter([]);
    if (kategorie === "Alles") {
      setFilter(artikel);
      return;
    }
    const gefiltert = artikel.filter(
      (artikel) => artikel.kategorie === kategorie
    );

    setFilter(gefiltert);
  }, [kategorie]);

  return (
    <div>
      <div className="filterBtn">
        <Stack direction={"row"} spacing={2}>
          <Button
            className={kategorie === "Alles" ? "active" : ""}
            variant="outlined"
            sx={{ letterSpacing: 1 }}
            onClick={() => setKategorie("Alles")}
          >
            Alles
          </Button>
          <Button
            className={kategorie === "Getränke" ? "active" : ""}
            variant="outlined"
            sx={{ letterSpacing: 1 }}
            onClick={() => setKategorie("Getränke")}
          >
            {" "}
            Getränke
          </Button>
          <Button
            className={kategorie === "Backware" ? "active" : ""}
            variant="outlined"
            sx={{ letterSpacing: 1 }}
            onClick={() => setKategorie("Backware")}
          >
            Brötchen
          </Button>
          <Button
            className={kategorie === "Beilage" ? "active" : ""}
            variant="outlined"
            sx={{ letterSpacing: 1 }}
            onClick={() => setKategorie("Beilage")}
          >
            Beilagen
          </Button>
        </Stack>
      </div>
    </div>
  );
}
