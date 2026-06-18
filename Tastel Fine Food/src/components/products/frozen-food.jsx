import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ourproductsbanner from "../../assets/ourproductsbanner.png";
import bgforpage from "../../assets/bg_for_product.png";

function FrozenFood() {
  const [selected, setSelected] = useState("Natural");
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  
    const naturalData = [
      ["Aloo Tikki", "40g", "Boxes"],
      ["Shammi kebab", "30g", "Boxes"],
      ["Dahi Bhalla", "40g", "Boxes"],
      ["Hara bhara kebab", "30g", "Boxes"],
      ["Palak methi tikki", "40g", "Boxes"],
      ["Veg burger", "80g", "Boxes"],
      ["Punjabi Samosa", "75g", "Boxes"],
      ["Amritsari Samosa", "50g", "Boxes"],
      ["Punjabi Samosa", "25g", "Boxes"],
      ["Jalapeno Cheese Samosa", "25g", "Boxes"],
      ["Jodhpuri Khasta Kachori", "25g", "Boxes"],
      ["Sindhi Aloo tikki", "40g", "Boxes"],
      ["Delhi Paneer Pakora", "20g", "Boxes"],
      ["Amritsari Aloo Kulcha", "40g", "Boxes"],
      ["Amritsari Paneer Kulcha", "40g", "Boxes"],
    ];
  
    const veganData = [
      ["Sweet Potatoes Rosti", "20g", "Boxes"],
      ["Kale & Zuccini Fritters", "20g", "Boxes"],
      ["Corn & Spring Onion Fritters", "20g", "Boxes"],
      ["Kinchi Fritters", "20g", "Boxes"],
      ["Potato & Beetroot Rosti", "20g", "Boxes"],
      ["Pumpkin Basil & Chilli", "20g", "Boxes"],
      ["Tandoori Naan", "80g", "Boxes"],
      ["Garlic Coriander Naan", "80g", "Boxes"],
      ["Punjabi Samosa", "25g", "Boxes"],
      ["Amritsari Samosa", "45g", "Boxes"],
      ["Punjabi Samosa", "75g", "Boxes"],
    ];
  
    const tableData = selected === "Natural" ? naturalData : veganData;
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
              Frozen Food
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
                fontSize: "25px",
                fontFamily: "Nunito-Regular",
                bgcolor: selected === "Natural" ? "#d5b06d" : "transparent",
                color: selected === "Natural" ? "#fff" : "#32577e",
                border: "1px solid #32577e",
              }}
            >
              Natural
            </Box>
  
            <Box
              onClick={() => setSelected("Vegan")}
              sx={{
                px: 4,
                py: 1,
                borderRadius: "30px",
                cursor: "pointer",
                fontSize: "25px",
                fontFamily: "Nunito-Regular",
                bgcolor: selected === "Vegan" ? "#d5b06d" : "transparent",
                color: selected === "Vegan" ? "#fff" : "#32577e",
                border: "1px solid #32577e",
              }}
            >
              Vegan
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
  )
}

export default FrozenFood;
