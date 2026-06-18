import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ourproductsbanner from "../../assets/ourproductsbanner.png";
import bgforpage from "../../assets/bg_for_product.png";

function ReadyToServeCurriesGrains() {
  const [selected, setSelected] = useState("Natural");

   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);

  const naturalData = [
    ["Chickpeas Curry / Chana Masala", "284g", "Pouch"],
    ["Yellow Lentils Curry / Dal Tadka", "284g", "Pouch"],
    ["Indian Vegetable Tikka Masala", "284g", "Pouch"],
    ["Potato & Peas Curry / Aloo Matar", "284g", "Pouch"],
    ["Black Gram Red Kidney Beans Curry / Dal Makhani", "284g", "Pouch"],
    ["Red Kidney Beans Curry / Rajma Masala", "284g", "Pouch"],
    ["Bombay Potatoes", "284g", "Pouch"],
    ["Spinach Dal / Dal Palak", "284g", "Pouch"],
    ["Moroccan Tagine", "284g", "Pouch"],
    ["Korean BBQ Jackfruit", "284g", "Pouch"],
    ["Tomato & Basil with Vegetables", "284g", "Pouch"],
    ["Thai Coconut with Chickpeas Curry", "284g", "Pouch"],
    ["Thai Red Curry with Vegetables", "284g", "Pouch"],
    ["Cauliflower Rice", "250g", "Pouch"],
    ["Broccoli Rice", "250g", "Pouch"],
  ];

  const organicData = [
    ["Organic Butter Masala with Vegetables", "284g", "Pouch"],
    ["Organic Cashew Korma with Vegetables", "284g", "Pouch"],
    ["Organic White Basmati Rice", "250g", "Pouch"],
    ["Organic Brown Long Grain Rice", "250g", "Pouch"],
    ["Organic Tandoori Rice", "250g", "Pouch"],
    ["Organic White Basmati Rice", "250g", "Pouch"],
    ["Organic Brown Rice & Lentils with Garlic", "250g", "Pouch"],
    ["Organic Brown Rice & Chickpeas with Garlic", "250g", "Pouch"],
    ["Organic Long Grain Brown Rice", "250g", "Pouch"],
    ["Organic Mexican Rice with Beans", "250g", "Pouch"],
    ["Organic Brown Rice with White Quinoa & Garlic", "250g", "Pouch"],
    ["Organic Red Kidney Beans Curry", "250g", "Pouch"],
    ["Organic White Quinoa with Lentils & Garlic", "250g", "Pouch"],
    ["Organic Pre-cooked Chickpeas", "250g", "Pouch"],
    ["Organic Pre-cooked Red Kidney Beans", "250g", "Pouch"],
  ];

  const tableData = selected === "Organic" ? organicData : naturalData;

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
                xl: "140px",
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
            Ready to Serve Curries & Grains
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
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
              px: 4,
              py: 1,
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "24px",
              fontFamily: "Nunito-Regular",
              bgcolor: selected === "Natural" ? "#d5b06d" : "transparent",
              color: selected === "Natural" ? "#fff" : "#32577e",
              border: "1px solid #32577e",
              transition: "all .3s",
            }}
          >
            Natural
          </Box>

          <Box
            onClick={() => setSelected("Organic")}
            sx={{
              px: 4,
              py: 1,
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "24px",
              fontFamily: "Nunito-Regular",
              bgcolor: selected === "Organic" ? "#d5b06d" : "transparent",
              color: selected === "Organic" ? "#fff" : "#32577e",
              border: "1px solid #32577e",
              transition: "all .3s",
            }}
          >
            Organic
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
              <Box sx={{ fontFamily: "Nunito-Regular" }}>{selected}</Box>
              <Box sx={{ fontFamily: "Nunito-Regular" }}>Net Weight (gm)</Box>
              <Box sx={{ fontFamily: "Nunito-Regular" }}>Pack types</Box>
            </Box>

            {tableData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr",
                  px: 4,
                  py: 2,
                  borderBottom: index !== tableData.length - 1 ? null : "none",
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

export default ReadyToServeCurriesGrains;
