import { Box, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Banner from "../assets/banner.jpg";
import Banner1 from "../assets/banner_2.jpg";
import Banner2 from "../assets/banner_3.jpg";

import WhoLeftImg from "../assets/who_left_img.png";
import WhoRightImg from "../assets/who_right_img.jpg";

const slides = [
  {
    image: Banner,
    title: "Your Food \n Solutions Partner",
    subtitle:
      "Serving food solutions, passionately \n created out of the quest for epic taste.",
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
    <>
      {/* Hero images */}
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
                      lineHeight: 0.55,
                      whiteSpace: "pre-line", // important
                      fontSize: {
                        xs: "55px",
                        sm: "75px",
                        md: "95px",
                        lg: "110px",
                        xl: "140px",
                      },
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {/* SUBHEADING */}
                  <Typography
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: 100,
                      color: "#fff",
                      mt: 2,
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "18px",
                        lg: "18px",
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

     {/* Section-2 */}
<Box
  sx={{
    position: "relative",
    overflow: "hidden",
    py: {
      xs: 6,
      md: 10,
    },
    px: {
      xs: 2,
      sm: 4,
      md: 8,
    },
  }}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* Left Image */}
    <Box
      sx={{
       
        justifyContent: {
          xs: "center",
          md: "flex-start",
        },
        mb: {
          xs: 4,
          md: 0,
        },
      }}
    >
      <Box
        component="img"
        src={WhoLeftImg}
        alt="Who Left"
        sx={{
          width: "100%",
          maxWidth: {
            xs: "280px",
            sm: "350px",
            md: "420px",
            lg: "500px",
          },
          height: "auto",
        }}
      />
    </Box>

    {/* Center Content */}
    <Box
      sx={{
        flex: 1,
        textAlign: "center",
        maxWidth: "700px",
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Mattiface",
          color: "#E8B86D",
          fontWeight: 500,
          lineHeight: 0.9,
          fontSize: {
            xs: "50px",
            sm: "70px",
            md: "85px",
            lg: "100px",
          },
        }}
      >
        Who We Are
      </Typography>

      <Typography
        sx={{
          fontFamily: "Nunito-Bold",
          color: "#32577E",
          mt: 2,
          lineHeight: 1.5,
          fontSize: {
            xs: "16px",
            sm: "20px",
            md: "24px",
          },
        }}
      >
        A world of pleasure for your taste buds
      </Typography>

      <Typography
        sx={{
          fontFamily: "Nunito-Regular",
          color: "#0A0808",
          mt: 1,
          lineHeight: 1.7,
          fontSize: {
            xs: "14px",
            sm: "18px",
            md: "20px",
          },
        }}
      >
        We capture the flavours of global cuisine and
        serve them around the world
      </Typography>

      {/* Stats */}
      <Box
        sx={{
          pt: 5,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: {
            xs: 3,
            sm: 5,
            md: 8,
          },
        }}
      >
        {[
          { number: "25+", label: "Countries" },
          { number: "200+", label: "Product Created" },
          { number: "30+", label: "Years of Experience" },
        ].map((item, index) => (
          <Box key={index} textAlign="center">
            <Typography
              sx={{
                fontFamily: "Nunito-SemiBold",
                fontSize: {
                  xs: "35px",
                  sm: "50px",
                  md: "70px",
                },
                color: "#32577E",
              }}
            >
              {item.number}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
                color: "#0A0808",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>

  {/* Right Bottom Image */}
  <Box
    component="img"
    src={WhoRightImg}
    alt="Who Right"
    sx={{
      position: "absolute",
      right: 0,
      bottom: 0,
      width: {
        xs: "140px",
        sm: "180px",
        md: "250px",
        lg: "320px",
      },
      height: "auto",
      zIndex: 1,
      opacity: 1,

      /* Hide on small mobile if needed */
      display: {
        xs: "none",
        sm: "block",
      },
    }}
  />
</Box>
    </>
  );
};

export default Home;
