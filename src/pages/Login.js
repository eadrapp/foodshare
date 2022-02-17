import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import LoginForm from "../components/LoginForm";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "./Login.css";

export default function Login() {
    let [username, setUsername] = useState("");
    const theme = useTheme();
    return (
        <div className="login">
            <LoginForm setUsername={setUsername} />
        </div>
    );
  }