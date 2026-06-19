import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ourproductsbanner from "../../assets/ourproductsbanner.png";
import bgforpage from "../../assets/bg_for_product.png";

function MealKits() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Box>
        {/* Banner */}
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            component="img"
            src={ourproductsbanner}
            alt="Our Products Banner"
            sx={{
              width: "100%",
              height: {
                xs: "400px", // mobile
                sm: "350px", // tablet
                md: "350px", // laptop
                lg: "400px", // desktop
                xl: "450px", // large screens
              },
              objectFit: "cover",
              display: "block",
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              textAlign: "center",
              color: "#d5b06d",
              fontFamily: "Mattiface",
              fontWeight: 400,
              lineHeight: 1,
              fontSize: {
                xs: "90px",
                sm: "110px",
                md: "120px",
                lg: "130px",
                xl: "170px",
              },

              animation: "fadeUp 1.5s ease-out forwards",

              "@keyframes fadeUp": {
                from: {
                  opacity: 0,
                  marginTop: "80px",
                },
                to: {
                  opacity: 1,
                  marginTop: "0px",
                },
              },
            }}
          >
            Meal Kits
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url(${bgforpage})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          py: 8,
        }}
      >
        {/* Natural Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
            animation: "fadeUp 1.5s ease-out forwards",

            "@keyframes fadeUp": {
              from: {
                opacity: 0,
                marginTop: "80px",
              },
              to: {
                opacity: 1,
                marginTop: "0px",
              },
            },
          }}
        >
          <Box
            onClick={() => setSelected("Natural")}
            sx={{
              px: 5,
              py: 1,
              bgcolor: "#d5b06d",
              color: "#fff",
              borderRadius: "30px",

              border:
                selected === "Natural" ? "2px solid #000" : "2px solid #32577e",

              fontSize: "25px",
              fontFamily: "Nunito-Regular",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Natural
          </Box>
        </Box>

        {/* Table */}
        <Box
          sx={{
            width: "100%",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            px: { xs: 2, sm: 2, md: 0 },
            animation: "fadeUp 1.5s ease-out forwards",

            "@keyframes fadeUp": {
              from: {
                opacity: 0,
                marginTop: "80px",
              },
              to: {
                opacity: 1,
                marginTop: "0px",
              },
            },
          }}
        >
          <Box
            sx={{
              minWidth: "900px", // Forces horizontal scroll on mobile
              maxWidth: "1200px",
              mx: "auto",
              bgcolor: "#f7f7f7",
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                bgcolor: "#d5b06d",
                color: "#32577e",
                fontWeight: 700,
                fontSize: "22px",
                py: 3,
                px: 4,
              }}
            >
              <Box sx={{ fontFamily: "Nunito-Regular" }}>Natural</Box>
              <Box sx={{ fontFamily: "Nunito-Regular" }}>Net Weight (gm)</Box>
              <Box sx={{ fontFamily: "Nunito-Regular" }}>Pack types</Box>
            </Box>

            {[
              ["Green Thai Curry Kit", "255g", "Sleeves / Box"],
              ["Red Thai Curry Kit", "255g", "Sleeves / Box"],
              ["Malaysian Panang Kit", "255g", "Sleeves / Box"],
              ["Thai Basil Stir Fry Kit", "225g", "Sleeves / Box"],
              ["Vietnamese Lemon Grass Stir Fry", "225g", "Sleeves / Box"],
              ["Mongolian Stir Fry", "225g", "Sleeves / Box"],
              ["Burnt Garlic Stir Fry", "225g", "Sleeves / Box"],
              ["Schezwan Chilli Garlic Stir Fry", "225g", "Sleeves / Box"],
              ["Black Pepper and Hot Garlic Stir Fry", "225g", "Sleeves / Box"],
              ["Tikka Masala Kit", "255g", "Sleeves / Box"],
              ["Butter Chicken Kit", "255g", "Sleeves / Box"],
              ["Korma Kit", "255g", "Sleeves / Box"],
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  px: 4,
                  py: 2,
                }}
              >
                <Box sx={{ fontFamily: "Nunito-Regular" }}>{item[0]}</Box>
                <Box sx={{ fontFamily: "Nunito-Regular" }}>{item[1]}</Box>
                <Box sx={{ fontFamily: "Nunito-Regular" }}>{item[2]}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MealKits;
