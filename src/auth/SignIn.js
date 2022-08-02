import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import jwt from "jsonwebtoken";

export default function SignIn() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = jwt.sign({ id: "Benjamin Koubik" }, env.JWT);
    console.log(token);
    setToken(token);
  }, []);

  return <div>{token}</div>;
}
