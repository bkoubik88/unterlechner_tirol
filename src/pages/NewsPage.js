import { async } from "@firebase/util";
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import wetterdaten from "../current.json";
import PlaceIcon from "@mui/icons-material/Place";
import MapDialog from "../components/MapDialog";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://img.oastatic.com/img2/12443445/max/jakobskreuz-buchensteinwand.jpg",
    caption: "Buchensteinwand",
  },
  {
    url: "https://www.bergbahn-pillersee.com/fileadmin/_processed_/1/6/csm_Speichersee_Buchensteinwand_Bergpanorama_6c16a5d2c8.jpg",
    caption: "Blumenpfad Bergsee",
  },
  {
    url: "https://www.tirol.at/portal/image.php?idPart=52ocbpb23m8-",
    caption: "Seilbahn zum Gipfel",
  },
];

export default function NewsPage() {
  const [wetter, setWetter] = useState([]);
  const [openMapDialog, setOpenMapDialog] = useState(false);
  const [loc, setLoc] = useState("");

  useEffect(() => {
    const ladeWetter = async () => {
      setWetter(wetterdaten);
    };

    ladeWetter();
  }, []);

  const setLocation = (loc) => {
    setLoc(loc);
    setOpenMapDialog(true);
  };

  const handleCloseMapDialog = () => {
    setOpenMapDialog(false);
    setLoc("");
  };

  return (
    <>
      <HeaderNav></HeaderNav>
      <Container maxWidth="sm" sx={{ marginBottom: 15, marginTop: 10 }}>
        <Box
          sx={{
            display: "flex",
            direction: { xs: "row", sm: "column" },
            justifyContent: "space-between",
          }}
        >
          <Paper sx={{ width: 150, height: 150, position: "relative" }}>
            <Box>
              <Typography fontWeight={"bold"} variant="h5" align="center">
                Heute
              </Typography>
            </Box>
            <img
              src={wetter.current?.weather_icons[0]}
              alt="current"
              width={"100%"}
            ></img>
            <Typography
              fontWeight={"bold"}
              variant="h4"
              sx={{ position: "absolute", bottom: -33, right: 6 }}
            >
              {wetter.current?.temperature}
            </Typography>
          </Paper>
          <Paper sx={{ width: 150, height: 150, position: "relative" }}>
            <Box>
              <Typography fontWeight={"bold"} variant="h5" align="center">
                Morgen
              </Typography>
            </Box>
            <img
              src={wetter.current?.weather_icons[0]}
              alt="current"
              width={"100%"}
            ></img>
            <Typography
              fontWeight={"bold"}
              variant="h4"
              sx={{ position: "absolute", bottom: -33, right: 6 }}
            >
              {wetter.current?.temperature}
            </Typography>
          </Paper>
          <Paper sx={{ width: 150, height: 150, position: "relative" }}>
            <Box>
              <Typography fontWeight={"bold"} variant="h5" align="center">
                Ü.morgen
              </Typography>
            </Box>
            <img
              src={wetter.current?.weather_icons[0]}
              alt="current"
              width={"100%"}
            ></img>
            <Typography
              fontWeight={"bold"}
              variant="h4"
              sx={{ position: "absolute", bottom: -33, right: 6 }}
            >
              {wetter.current?.temperature}
            </Typography>
          </Paper>
        </Box>

        <Box sx={{ marginTop: 15 }}>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Aktuelles
          </Typography>

          <Stack spacing={2}>
            <Card>
              <Stack direction={"row"} spacing={3} sx={{ padding: 2 }}>
                <img
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                  src={
                    "https://www.stuttgarter-zeitung.de/media.media.b812a1ec-c5bc-45f6-9611-41e9e9b5e815.original1024.jpg"
                  }
                ></img>
                <Stack spacing={2}>
                  <Typography variant="h5">Unsere Weine</Typography>
                  <Typography
                    variant="subtitle1"
                    maxHeight={150}
                    sx={{ overflowY: "auto" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Box>

        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            Auflugstipps
          </Typography>
          <Stack spacing={2}>
            <Card>
              <Stack direction={"row"} spacing={3} sx={{ padding: 2 }}>
                <img
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                  src={
                    "https://www.bauernhofurlaub.de/_Resources/Persistent/97415211266169021702663010d000957fe3ba8f/AdobeStock_94736014.jpg"
                  }
                ></img>
                <Stack spacing={2}>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h5">Pillersee</Typography>
                    <PlaceIcon
                      onClick={() => setLocation("Pillersee")}
                    ></PlaceIcon>
                  </Stack>

                  <Typography
                    variant="subtitle1"
                    maxHeight={150}
                    sx={{ overflowY: "auto" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>

          <Divider></Divider>

          <Stack spacing={2}>
            <Card>
              <Stack direction={"row"} spacing={3} sx={{ padding: 2 }}>
                <img
                  style={{ objectFit: "cover" }}
                  width={200}
                  height={200}
                  src={
                    "https://img.oastatic.com/img2/12443445/max/jakobskreuz-buchensteinwand.jpg"
                  }
                ></img>
                <Stack spacing={2}>
                  <Stack direction={"row"} justifyContent="space-between">
                    <Typography variant="h5">
                      Buchensteinwand Jakobskreuz
                    </Typography>
                    <PlaceIcon
                      onClick={() => setLocation("Jakobskreuz")}
                    ></PlaceIcon>
                  </Stack>

                  <Typography
                    variant="subtitle1"
                    maxHeight={150}
                    sx={{ overflowY: "auto" }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Box>
        <MapDialog
          handleCloseMapDialog={handleCloseMapDialog}
          openMapDialog={openMapDialog}
          location={loc}
        ></MapDialog>
      </Container>
    </>
  );
}
