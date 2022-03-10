import * as React from "react";
import {
  Grid,
  Box,
  useTheme,
  FormControl,
  NativeSelect,
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
          <FormControl fullWidth>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: "type",
                id: "uncontrolled-native",
              }}
            >
              <option value={1}>Offer</option>
              <option value={2}>Request</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  );
}
