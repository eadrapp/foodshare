import * as React from "react";
import {
  Grid,
  Box,
  useTheme,
} from "@mui/material";

export default function LeftSidebar() {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      t={6}
      l={2}
    >
      <Grid item xs={6}>
        <Box>
        </Box>
      </Grid>
    </Grid>
  );
}
