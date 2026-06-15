import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Header = () => {
  const menuItems = [
    "Who We Are",
    "What We Do",
    "Our Products",
    "Innovation",
    "Sustainability",
    "Careers",
    "Contact Us",
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#355D89",
        height: "95px",
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          mx: "auto",
          minHeight: "95px !important",
        }}
      >
        {/* LEFT LOGO */}
        <Box
          component="img"
          src="/logo.png" // put your logo in public folder
          alt="TasteL Logo"
          sx={{
            height: { xs: 50, md: 65 },
            objectFit: "contain",
          }}
        />

        {/* RIGHT MENU */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { md: 3, lg: 4 },
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item}
              sx={{
                color: "#fff",
                fontSize: {
                  md: "16px",
                  lg: "18px",
                },
                fontWeight: 400,
                cursor: "pointer",
                fontFamily: "Poppins, sans-serif",
                transition: "0.3s",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;