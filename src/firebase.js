import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBHnuGT12iSRkMNmIVlCan-DxyGIU1XJiQ",
  authDomain: "unterlechner-8af6c.firebaseapp.com",
  projectId: "unterlechner-8af6c",
  storageBucket: "unterlechner-8af6c.appspot.com",
  messagingSenderId: "1062084396654",
  appId: "1:1062084396654:web:48688f6ff05e3c2105087f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getDatabase();
