import * as React from "react";
import "./LeftSidebar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, useTheme } from "@mui/material";

export default function LeftSidebar() {
  const theme = useTheme();

  return (
    <Box className="section">
      <Box>
        <span className="title">Active Users</span>
      </Box>

      <Box className="profile">
        <Box>
          <AccountCircleIcon color="success" fontSize="large" className="icon" />
        </Box>
        <div className="person">
          <span className="users">Kim Kardashian</span>
          <span className="status">active</span>
        </div>
      </Box>

      <Box className="profile">
        <Box className="name">
          <AccountCircleIcon color="disabled" fontSize="large" className="icon" />
        </Box>
        <div className="person">
          <span className="users">Jack Black</span>
          <span className="status2">last active 2hr ago</span>
        </div>
      </Box>

      <Box className="profile">
        <Box className="name">
          <AccountCircleIcon color="disabled" fontSize="large" className="icon" />
        </Box>
        <div className="person">
          <span className="users">Joe Biden</span>
          <span className="status2">last active 1wk ago</span>
        </div>
      </Box>
    </Box>
  );
}
