import { Box, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Banner from "../assets/banner.jpg";
import Banner1 from "../assets/banner_2.jpg";
import Banner2 from "../assets/banner_3.jpg";

const slides = [
  {
    image: Banner,
    title: "Your Food \n Solutions Partner",
    subtitle:
      "Serving food solutions, passionately created out of the quest for epic taste.",
  },
  {
    image: Banner1,
    title: "Food innovation \n to aid epic creation. ",
    subtitle: "Culinary wonders that only need your touch of love.",
  },
  {
    image: Banner2,
    title: "Healthy Hunger \n Solutions",
    subtitle: "No complex recipes.",
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",

        /* RIGHT SIDE VERTICAL DOTS */
        "& .swiper-pagination": {
          right: {
            xs: "14px",
            md: "25px",
            lg: "35px",
          },
          left: "auto !important",
          width: "auto !important",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          top: "60%",
          transform: "translateY(-50%)",
        },

        "& .swiper-pagination-bullet": {
          width: "10px",
          height: "10px",
          background: "rgba(255,255,255,0.6)",
          opacity: 1,
          margin: "0 !important",
        },

        "& .swiper-pagination-bullet-active": {
          background: "#fff",
          transform: "scale(1.3)",
        },
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        speed={1200}
        style={{ height: "100vh" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: "relative", height: "100vh" }}>
              {/* IMAGE */}
              <Box
                component="img"
                src={slide.image}
                alt={`banner-${index}`}
                sx={{
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* DARK OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                }}
              />

              {/* TEXT CONTENT */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  width: "50%",
                  px: 2,
                  zIndex: 2,
                }}
              >
                {/* BIG HEADING */}
                <Typography
  sx={{
    fontFamily: "Mattiface",
    color: "#E8B86D",
    textAlign: "center",
    lineHeight: 0.75,
    whiteSpace: "pre-line", // important
    fontSize: {
      xs: "55px",
      sm: "75px",
      md: "95px",
      lg: "110px",
      xl: "130px",
    },
  }}
>
                  {slide.title}
                </Typography>

                {/* SUBHEADING */}
                <Typography
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: 400,
                    color: "#fff",
                    mt: 2,
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "18px",
                      lg: "22px",
                    },
                  }}
                >
                  {slide.subtitle}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Home;
