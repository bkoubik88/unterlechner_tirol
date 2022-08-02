import {
  Alert,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNav from "../components/HeaderNav";
import { getFirestore, doc, setDoc, getDocs } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { initializeApp } from "firebase/app";
import { collection, query, where, getDoc } from "firebase/firestore";
import { login } from "../redux/userSlice";
import CloseIcon from "@mui/icons-material/Close";
import LogRocket from "logrocket";

LogRocket.init("adatmv/unterlechner");

const firebaseConfig = {
  apiKey: "AIzaSyBHnuGT12iSRkMNmIVlCan-DxyGIU1XJiQ",
  authDomain: "unterlechner-8af6c.firebaseapp.com",
  projectId: "unterlechner-8af6c",
  storageBucket: "unterlechner-8af6c.appspot.com",
  messagingSenderId: "1062084396654",
  appId: "1:1062084396654:web:48688f6ff05e3c2105087f",
};
initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "rooms");

const style = {
  width: "50%",
  "& label.Mui-focused": {
    color: "#42310D",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#E1CE91",
    },
  },
};

export default function Login() {
  const { currentUser } = useSelector((state) => state.user);
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const [nummer, setNummer] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeNumber = (e) => {
    setNummer(e.target.value);
  };

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleExited = () => {
    setMessageInfo(undefined);
  };

  useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/food");
    }
  }, []);
  useEffect(() => {
    const setRooms = async () => {
      const unterlechnerRef = collection(db, "rooms");

      for (var i = 1; i <= 22; i++) {
        var seq = (Math.floor(Math.random() * 10000) + 10000)
          .toString()
          .substring(1);

        await setDoc(doc(unterlechnerRef), {
          key: seq,
          room: i,
        });
      }
    };

    const setBreaktfast = async () => {
      const unterlechnerRef = collection(db, "fruehstueck");

      await setDoc(doc(unterlechnerRef), {
        name: "Kaffee",
        kategorie: "Getränke",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Latte Macchiato",
        kategorie: "Getränke",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Cappuccino",
        kategorie: "Getränke",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Kännchen Kaffee",
        kategorie: "Getränke",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Vollkornbrötchen",
        kategorie: "Backware",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Karottenbrötchen",
        kategorie: "Backware",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Körnerbrötchen",
        kategorie: "Backware",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Gurken Sticks",
        kategorie: "Beilage",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Paprika Sticks",
        kategorie: "Beilage",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Cocktailtomaten",
        kategorie: "Beilage",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Bergkäse",
        kategorie: "Beilage/Herzhaft",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });

      await setDoc(doc(unterlechnerRef), {
        name: "Tiroler Schinken",
        kategorie: "Beilage/Herzhaft",
        img: "https://www.kielerleben.de/media/kielerleben/styles/tec_frontend_fullscreen/public/images/media/editors/2016_40/image-12275--32267.jpg?itok=OJ9hiKrO",
      });
    };

    //setBreaktfast();
    //setRooms();
  }, []);

  useEffect(() => {
    const message = "Nummer nicht vorhanden";
    const checkNummer = async () => {
      if (nummer !== "") {
        if (nummer.length === 4) {
          const q = query(colRef, where("key", "==", nummer));

          let data = "";
          await getDocs(q).then(function (querySnapshot) {
            querySnapshot.forEach((doc) => {
              data = doc.data();
              dispatch(login(doc.data()));
              navigate("/food");
            });
          });

          if (data === "") {
            {
              setSnackPack((prev) => [
                ...prev,
                { message, key: new Date().getTime() },
              ]);
            }
          }
        }
      }
    };

    checkNummer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nummer]);

  return (
    <>
      <HeaderNav></HeaderNav>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          sx={{ marginTop: { xs: "50%", sm: "20%", lg: "20%" } }}
        >
          <Paper sx={{ padding: 5 }} variant="outlined" align={"center"}>
            <Typography
              component={"div"}
              letterSpacing={2}
              align="center"
              variant="h6"
              gutterBottom
              color={"#605132"}
            >
              Zur richtigen Zuordnung bitten wir Sie, hier Ihre 5-Stellige
              Nummer einzugeben, welche Sie in Ihrer{" "}
              <span style={{ fontWeight: "bold" }}>Willkommensbroschüre</span>{" "}
              finden.
            </Typography>

            <TextField
              autoFocus
              onChange={(e) => handleChangeNumber(e)}
              sx={style}
              className="key"
              id="outlined-basic"
              label="Nummer"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Snackbar
          key={messageInfo ? messageInfo.key : undefined}
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionProps={{ onExited: handleExited }}
          message={messageInfo ? messageInfo.message : undefined}
          action={
            <React.Fragment>
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </React.Fragment>
          }
        />
      </Container>
    </>
  );
}
