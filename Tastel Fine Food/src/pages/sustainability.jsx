import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import BannerSus from "../assets/banner.png";
import Bg1 from "../assets/bg_1.png";
import Bg2 from "../assets/bg_2.png";
import Mirch from "../assets/red_m.png";
import sustainable1 from "../assets/sustainable_img_1.png";
import sustainable2 from "../assets/sustainable_img_2.png";
import sustainable3 from "../assets/sustainable_img_3.jpg";

const sustainabilityData = [
  {
    title: "Sustainable",
    subtitle: "Packaging",
    image: sustainable1,
    description1:
      "The responsibility of preserving the environment cannot fall on the consumers alone. At Taste’L, we believe that every single decision we take as a business can have a huge impact on our environment in the long run, and we can begin with something as basic as packaging.",

    description2:
      "All our packaging needs are met with 100% recycled or raw materials to ensure the lowest carbon footprint possible. We try to minimise our production process and put our best minds on the task of optimising the supply chains. Our goal is to bring good food to our patrons without putting any additional burden on Mother Earth.",

    description3:
      "We do our part by using compostable and organic packaging and avoiding plastic as far as possible. We also make natural vegetable dyes, in-house, for all our colouring purposes.",
  },

  {
    title: "Sustainable",
    subtitle: "Processes",
    image: sustainable2,
    description1:
      "Energy conservation is always on our mind while designing processes for food development. Being energy efficient not only aligns with our broader goal of being environmentally conscious, but also helps us save costs in the long run.",

    description2:
      "We try to replace conventional, energy-intensive food processes with novel technologies, such as novel thermodynamic cycles and non-thermal heating processes. This helps us reduce energy consumption and production costs, and increase sustainability in food production. We are pleased to share that over the last few years, the traditional processes for pasteurization, sterilization, evaporation, dehydration, chilling, and freezing have been replaced with innovative, more efficient processing technologies..",

    description3:
      "We have installed water treatment plants in our production units, and these are complemented by rain water harvesting. We also convert vegetable waste to compost to help reduce landfill.",
  },

  {
    title: "Eco Friendly",
    subtitle: "Operations",
    image: sustainable3,
    description1:
      "As a modern day business, ensuring sustainability in the advanced stages of food production is not enough for us. Our resource procuring teams track down raw materials, which have a minimal carbon footprint, and we keep looking for newer ways to reduce wastage across departments.",

    description2:
      "We continuously improve our manufacturing and logistics operations.",

    description3: "Every process is designed to minimize environmental impact.",
  },
];

const Sustainability = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = sustainabilityData[activeIndex];
  return (
    <>
      {/* Hero Section */}

      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={BannerSus}
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
              xs: "70px",
              sm: "60px",
              md: "80px",
              lg: "100px",
              xl: "110px",
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
          Making our world a better place to live in.
        </Typography>
      </Box>

      {/* Intro White Section */}
      <Box
        sx={{
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: {
            xs: 5,
            md: 7,
          },
          px: {
            xs: 3,
            md: 8,
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Nunito-Bold",
            color: "#2E5684",
            textAlign: "center",

            fontSize: {
              xs: "18px",
              md: "26px",
            },
          }}
        >
          Given that we have created and produced 200+ products in the last 30
          years,
        </Typography>

        <Typography
          sx={{
            fontFamily: "Nunito-Regular",
            textAlign: "center",

            mt: 1,

            fontSize: {
              xs: "12px",
              md: "15px",
            },

            lineHeight: 1.5,
            letterSpacing: 1.5,

            maxWidth: "1120px",
            mx: "auto",
          }}
        >
          it is pertinent that we proactively consider incorporating
          sustainability in our processes. Sustainability, for us, means using
          systems that are non-polluting, conserving non-renewable energy and
          natural resources, and not compromise the needs of future generations.
          There are raging famines in certain parts of the world; the least we
          can do as a food-related company is use the resources at our disposal,
          judiciously and sustainably.
        </Typography>
      </Box>

      {/* Swiper Section */}
      {/* MAIN SWIPER SECTION */}
      <Box
        component={motion.div}
        initial={{
          opacity: 0,
          y: 120,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        sx={{
          width: "100%",
          backgroundImage: `url(${Bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },

          alignItems: "center",

          minHeight: {
            xs: "auto",
            sm: "auto",
            md: "500px",
            lg: "550px",
          },

          overflow: "hidden",

          "& .swiper": {
            height: "100% !important",
            width: "100% !important",
          },

          "& .swiper-slide": {
            height: "100% !important",
          },

          "& .swiper-wrapper": {
            height: "100% !important",
          },

          "& .swiper-pagination": {
            bottom: {
              xs: "10px",
              md: "20px",
            },
          },

          "& .swiper-pagination-bullet": {
            background: "#fff",
            opacity: 0.6,
            width: "10px",
            height: "10px",
          },

          "& .swiper-pagination-bullet-active": {
            opacity: 1,
            background: "#E8B86D",
          },
        }}
      >
        {/* LEFT — IMAGE SWIPER ONLY, full bleed */}
        <Box
          sx={{
            width: "100%",
            height: {
              xs: "250px",
              sm: "320px",
              md: "500px",
              lg: "550px",
            },
            overflow: "hidden",
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            style={{ height: "100%", width: "100%" }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {sustainabilityData.map((item, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.subtitle}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* RIGHT — STATIC TEXT, updates on slide change */}
        <Box
          sx={{
            px: { xs: 3, md: 6, lg: 10 },
            py: { xs: 2, md: 3, lg: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Mirch decoration */}
          <Box
            component={motion.img}
            src={Mirch}
            alt="mirch"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            sx={{
              position: "absolute",

              top: {
                xs: "10px",
                md: "60px",
              },

              right: {
                xs: "15px",
                md: "90px",
              },

              width: {
                xs: "40px",
                sm: "55px",
                md: "75px",
                lg: "95px",
              },

              pointerEvents: "none",
            }}
          />

          {/* TITLE — always constant */}
          <Typography
            sx={{
              fontFamily: "Mattiface",
              color: "#D7AF64",

              fontSize: {
                xs: "42px",
                sm: "55px",
                md: "65px",
                lg: "82px",
              },

              lineHeight: 1,

              mb: {
                xs: 1,
                md: 2,
              },
            }}
          >
            Sustainability
          </Typography>

          {/* SUBTITLE — changes on slide */}
          <Typography
            sx={{
              fontFamily: "Nunito-Bold",
              color: "#2E5684",

              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "28px",
                lg: "36px",
              },

              ml: {
                xs: 0,
                md: 6,
                lg: 8,
              },

              mb: 2,

              animation: `fadeIn-${activeIndex} 0.5s ease-out forwards`,
              opacity: 0,

              [`@keyframes fadeIn-${activeIndex}`]: {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            {current.subtitle}
          </Typography>

          {/* DESCRIPTION 1 */}
          <Typography
            sx={{
              fontFamily: "Nunito-Regular",
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "14px",
                lg: "15px",
              },

              lineHeight: {
                xs: 1.7,
                md: 1.8,
              },
              mb: 1,
              color: "#333",
              animation: `fadeIn-${activeIndex} 0.5s ease-out forwards`,
              opacity: 0,
              [`@keyframes fadeIn-${activeIndex}`]: {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            {current.description1}
          </Typography>

          {/* DESCRIPTION 2 */}
          <Typography
            sx={{
              fontFamily: "Nunito-Regular",
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "14px",
                lg: "15px",
              },

              lineHeight: {
                xs: 1.7,
                md: 1.8,
              },
              mb: 1,
              color: "#333",
              animation: `fadeIn-${activeIndex} 0.5s ease-out forwards`,
              opacity: 0,
              [`@keyframes fadeIn-${activeIndex}`]: {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            {current.description2}
          </Typography>

          {/* DESCRIPTION 3 */}
          {current.description3 !== "" && (
            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                },

                lineHeight: {
                  xs: 1.7,
                  md: 1.8,
                },
                mb: 1,
                color: "#333",
                animation: `fadeIn-${activeIndex} 0.5s ease-out forwards`,
                opacity: 0,
                [`@keyframes fadeIn-${activeIndex}`]: {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                },
              }}
            >
              {current.description3}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Sustainability;
