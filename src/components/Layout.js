import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar.js";
import RightSidebar from "./RightSidebar.js";
import Box from "@mui/material/Box";
import { Grid, Hidden } from "@mui/material";
import { useTheme } from "@mui/system";
import "./Layout.css";
// import { getUsers } from "../redux/authSlice";
// import { useDispatch } from "react-redux";

export default function Layout({ children }) {
  const theme = useTheme();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsers());
//   }, [dispatch]);
  return (
    <>
    <Box 
      sx={{
        maxWidth: theme.breakpoints.values.lg,
        margin: "0 auto",
      }}
    >
      <Grid container>
        <Grid item xs={1} lg={2}>
          <LeftSidebar />
        </Grid>
        <Grid item xs={11} lg={10}>
          <Grid container>
            <Grid item xs={12} lg={8}>
              <Box className="item" >
                {children}
              </Box>
            </Grid>
            <Hidden lgDown>
              <Grid item lg={2}>
                <RightSidebar/>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}