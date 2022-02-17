import { CircularProgress, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import AssistantIcon from "@mui/icons-material/Assistant";
import Logo from "./Logo.svg";
import "./Home.css";
// import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    // const dispatch = useDispatch();
    // const { status, posts } = useSelector((state) => state.post);
    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    return(
        <Box>
        <Box className="header">
          <Grid className="layout">
                <Grid className="center">
                    <img className="logo" src={Logo} alt="Logo" />
                </Grid>
                <Grid className="center">
                <IconButton>
                    <AssistantIcon className="icon"/>
                </IconButton>
                </Grid>
          </Grid>
        </Box>
        <Box className="posts">
          {/* <AddPost />
          <Box textAlign="center" marginTop="1rem">
            {status === "loading" && (
              <CircularProgress size={20} color="primary" />
            )}
          </Box>
          {status === "success" &&
            posts.map((post) => <Post key={post._id} post={post} />)} */}
        </Box>
      </Box>
    );

}