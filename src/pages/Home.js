import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Logo from "./Logo.svg";
import "./Home.css";
import LoginForm from "./LoginForm.js";
import TextInput from "./TextInput";
import Post from "./Post";
import styled from "styled-components";
import Uploady from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import PreviewsWithClear from "./PreviewsWithClear";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const myName = localStorage.getItem("name") || "";
  const mockSenderEnhancer = getMockSenderEnhancer();
  // our username
  const [username, setUsername] = useState(myName);
  const [messages, setMessages] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const fileRef = useRef();

  function sendPost(text) {
    if (!text.trim()) return;
    // we'll create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
      imageSrc: imgSrc,
    };
    // set the "messages" to be a new array
    // that contains the new message + all the old messages
    fileRef.current.value = null;
    setImgSrc("");
    setMessages([newMessage, ...messages]);
  }

  const handleFileUpload = (file) => {
    let fr = new FileReader();
    fr.onload = (e) => {
      setImgSrc(e.target.result);
    };
    fr.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    handleFileUpload(e.target.files[0]);
  }
  // every time state changes, React "re-renders"
  // so this console.log will run again
  console.log(messages);

  return (
    <Uploady destination={{ url: "./images" }} enhancer={mockSenderEnhancer}>
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
        <TextInput sendPost={sendPost} handleFileChange={handleFileChange} handleFileUpload={handleFileUpload} fileRef={fileRef}/>
        <Box className="posts">
          {messages.map((msg, i) => {
            return <Post {...msg} key={i} fromMe={msg.user === username} />;
          })}
        </Box>
      </Box>
    </Uploady>
  );
}
