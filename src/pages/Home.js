import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Logo from "./Logo.svg";
import "./Home.css";
import LoginForm from "./LoginForm.js";
import TextInput from "./TextInput";
import Post from "./Post";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const myName = localStorage.getItem("name") || "";
  // our username
  let [username, setUsername] = useState(myName);
  let [messages, setMessages] = useState([]);

  function sendPost(text) {
    if (!text.trim()) return;
     // we'll create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    // set the "messages" to be a new array
    // that contains the new message + all the old messages
    setMessages([newMessage, ...messages]);
    
    // every time state changes, React "re-renders"
    // so this console.log will run again
    console.log(messages);

  }

    return(
        <Box className="homepage">
          <Box className="header">
            <Grid className="layout">
                  <Grid className="center">
                    <img className="logo" src={Logo} alt="Logo" />
                  </Grid>
                  <Grid className="center">
                    <LoginForm setUsername={setUsername} initialName={myName} />
                  </Grid>
            </Grid>
          </Box>
          <Box className="posts">
            {messages.map((msg, i) => {
              return <Post {...msg} key={i} fromMe={msg.user === username} />;
            })}
          </Box>
            <TextInput sendPost={sendPost} />
        </Box>
    );

}