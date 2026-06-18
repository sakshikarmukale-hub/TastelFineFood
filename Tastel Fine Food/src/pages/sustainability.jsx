import React from "react";
import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import BannerSus from "../assets/banner.png"
import Bg1 from "../assets/bg_1.png"
import Bg2 from "../assets/bg_2.png"
import Mirch from "../assets/red_m.png"
import sustainable1 from "../assets/sustainable_img_1.png"
import sustainable2 from "../assets/sustainable_img_2.png"
import sustainable3 from "../assets/sustainable_img_3.png"

const sustainabilityData = [
  {
    title: "Sustainable",
    subtitle: "Packaging",
    image: sustainable1,
    description1:
      "The responsibility of preserving the environment cannot fall on the consumers alone. At Taste'L, we believe that every single decision we take as a business can have a huge impact on our environment in the long run, and we can begin with something as basic as packaging.",

    description2:
      "All our packaging needs are met with 100% recycled or raw materials to ensure the lowest carbon footprint possible. We try to minimise our production process and put our best minds on the task of optimising the supply chains. Our goal is to bring good food to our patrons without putting any additional burden on Mother Earth.",

    description3:
      "We do our part by using compostable and organic packaging and avoiding plastic as far as possible. We also make natural vegetable dyes, in-house, for all our colouring purposes.",
  },

  {
    title: "Responsible",
    subtitle: "Sourcing",
    image: sustainable2,
    description1:
      "We source ingredients responsibly and work closely with trusted suppliers.",

    description2:
      "Our focus is on ethical procurement and sustainable farming practices.",

    description3:
      "This ensures consistent quality while supporting farming communities.",
  },

  {
    title: "Eco Friendly",
    subtitle: "Operations",
    image: sustainable3,
    description1:
      "Our facilities use modern systems that reduce waste and energy consumption.",

    description2:
      "We continuously improve our manufacturing and logistics operations.",

    description3:
      "Every process is designed to minimize environmental impact.",
  },
];

const Sustainability = () => {
  return (
    <>
    {/* Hero Section */}
    <Box
  sx={{
    width: "100%",
    height: {
      xs: "60vh",
      md: "80vh",
      lg: "95vh",
    },
    backgroundImage: `
      linear-gradient(
        rgba(46,86,132,0.78),
        rgba(46,86,132,0.78)
      ),
      url(${BannerSus})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  <Typography
    sx={{
      fontFamily: "Mattiface",
      color: "#D7AF64",

      fontSize: {
        xs: "40px",
        sm: "55px",
        md: "70px",
        lg: "90px",
      },
    }}
  >
    Making our world a better place to live in
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
    Given that we have created and produced 200+ products in the last 30 years,
  </Typography>

  <Typography
    sx={{
      fontFamily: "Nunito-Regular",
      textAlign: "center",

      mt: 2,

      fontSize: {
        xs: "15px",
        md: "18px",
      },

      lineHeight: 1.8,

      maxWidth: "1400px",
      mx: "auto",
    }}
  >
    It is pertinent that we proactively consider incorporating sustainability
    in our processes. Sustainability, for us, means using systems that are
    non-polluting, conserving non-renewable energy and natural resources,
    and not compromise the needs of future generations.
  </Typography>
</Box>

    {/* Swiper Section */}
    <Box
  sx={{
    width: "100%",
    backgroundImage: `url(${Bg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    py: {
      xs: 6,
      md: 10,
    },
    position: "relative",
  }}
>
  <Box
    component="img"
    src={Mirch}
    alt=""
    sx={{
      position: "absolute",
      right: {
        xs: "20px",
        md: "80px",
      },
      top: {
        xs: "20px",
        md: "60px",
      },
      width: {
        xs: "40px",
        md: "70px",
      },
    }}
  />

  <Swiper
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 4000,
    }}
    modules={[Pagination, Autoplay]}
  >
    {sustainabilityData.map((item, index) => (
      <SwiperSlide key={index}>
        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            alignItems: "center",
          }}
        >
          {/* IMAGE */}
          <Box>
            <Box
              component="img"
              src={item.image}
              alt=""
              sx={{
                width: "100%",
                display: "block",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box
            sx={{
              px: {
                xs: 4,
                md: 8,
                lg: 10,
              },
              py: {
                xs: 4,
                md: 0,
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mattiface",
                color: "#D7AF64",

                fontSize: {
                  xs: "40px",
                  md: "55px",
                  lg: "70px",
                },

                lineHeight: 1,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Bold",
                color: "#2E5684",

                fontSize: {
                  xs: "24px",
                  md: "32px",
                  lg: "38px",
                },

                mb: 3,
              }}
            >
              {item.subtitle}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                fontSize: "15px",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              {item.description1}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                fontSize: "15px",
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              {item.description2}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              {item.description3}
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
</Box>
    </>
  );
}

export default Sustainability;