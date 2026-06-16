import { Box } from "@mui/material";
import React from "react";
import Banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        m: 0,
        p: 0,
      }}
    >
      {/* HERO IMAGE */}
      <Box
        component="img"
        src={Banner}
        alt="banner"
        sx={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />
    </Box>
  );
};

export default Home;