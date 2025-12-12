import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface LoaderProps {
  message?: string; // Optional text below spinner
  height?: number;  // Optional container height
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading...", height = 300 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: height,
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
