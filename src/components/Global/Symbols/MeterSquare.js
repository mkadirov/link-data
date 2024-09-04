import { Box, Typography } from "@mui/material";
import React from "react";

function MeterSquare() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        marginRight: "4px",
      }}
    >
      <Typography>m</Typography>

      <Typography
        sx={{
          fontSize: "9px",
          position: "absolute",
          top: 8,
          right: "-10%",
          transform: "translate(50%, -50%)",
          display: "inline-block",
        }}
      >
        2
      </Typography>
    </Box>
  );
}

export default MeterSquare;
