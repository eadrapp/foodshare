import * as React from "react";
import "./LeftSidebar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Grid,
    Box,
    useTheme,
  } from "@mui/material";

export default function LeftSidebar() {
    const theme =  useTheme();

    return (
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        t={6}
        l={2}
        >
            <Grid>
                <Box className="section">
                    <Box>
                        <span className="title">Active Users</span>
                    </Box>

                    <Box className="profile">
                        <Box className="name">
                            <AccountCircleIcon fontSize="large" className="icon"/>
                            <span className="users">Kim Kardashian</span>
                        </Box>
                        <span className="status">active</span>
                    </Box>

                    <Box className="profile">
                        <Box className="name">
                            <AccountCircleIcon fontSize="large" className="icon"/>
                            <span className="users">Megan Thee Stallion</span>
                        </Box>
                        <span className="status2">last active 2hr ago</span>  
                    </Box>

                    <Box className="profile">    
                        <Box className="name">
                            <AccountCircleIcon fontSize="large" className="icon"/>
                            <span className="users">Joe Biden</span>
                        </Box>
                        <span className="status2">last active 1wk ago</span>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}