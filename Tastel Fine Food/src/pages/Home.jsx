import { Box, TextField, Typography, Button } from "@mui/material";
import React from "react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* Banner Images */
import Banner from "../assets/banner.jpg";
import Banner1 from "../assets/banner_2.jpg";
import Banner2 from "../assets/banner_3.jpg";

/* Section 2 Images */
import OurBg from "../assets/our_bg.png";
import WhoLeftImg from "../assets/who_left_img.png";
import WhoRightImg from "../assets/who_right_img.jpg";

/* Innovation Images */
import Ideation from "../assets/ideation.jpg";
import ProductDev from "../assets/product.jpg";
import FoodRetort from "../assets/food_retoring.jpg";
import FoodPast from "../assets/food_past.jpg";
import Frozen from "../assets/Frozen.jpg";
import SpiceBlending from "../assets/spice_blending.jpg";

/* Each Creation Section */
import bgAll from "../assets/bg_all.png";
import eachImg from "../assets/each.jpg";
import mirchImg from "../assets/mirch.png";
import eachLogo from "../assets/each_logo.png";

/* Our Brand Section */
import ourIcon1 from "../assets/our_icon_1.png";
import ourIcon2 from "../assets/our_icon_2.png";
import ourIcon3 from "../assets/our_icon_3.png";
import ourIcon4 from "../assets/our_icon_4.png";
import green_leaf from "../assets/green_leaf.png";

/* Cerifications Section */
import certibg from "../assets/certification_bg.png";
import certi1 from "../assets/certi_1.png";
import certi2 from "../assets/certi_2.png";
import certi3 from "../assets/certi_3.png";
import certi7 from "../assets/certi_7.png";
import certi8 from "../assets/certi_8.png";
import c_mirch from "../assets/c_mirch.png";
import c_haldi from "../assets/c_haldi.png";

/* Contact Section */
import khadaM from "../assets/khada_m.png";
import getIlc from "../assets/get_ilc.png";
import getLeaf from "../assets/get_leaf.png";
import haldi from "../assets/haldi.png";
import addBg from "../assets/add_bg.png";
import locationIcon from "../assets/location.png";
import callIcon from "../assets/call.png";
import mailIcon from "../assets/mail.png";

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

/* Animations */
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(70px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeSlow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const cards = [
  {
    image: Ideation,
    title: "Ideation",
    description: "Innovation backed by ideation is the core of our company",
  },
  {
    image: ProductDev,
    title: "Product Development",
    description:
      "Backed by a team of experienced culinary experts, we are capable of bringing amazing results to any creation",
  },
  {
    image: FoodRetort,
    title: "Food Retortion",
    description: "Retort batch processing containers with low ac...",
  },
  {
    image: FoodPast,
    title: "Food Pasteurization",
    description: "Retort batch processing containers with low ac...",
  },
  {
    image: Frozen,
    title: "Frozen Foods",
    description:
      "At Taste’L, we have simplified the whole process of creating fried snacks by having a selection of them frozen. Just re-heat and you are good to go",
  },
  {
    image: SpiceBlending,
    title: "Spice Blending",
    description:
      "Spice mixes are blended spices or herbs. We, at Taste’L bring you spice blends created using recipes handed down through generations to bring you the authentic taste of India",
  },
];

/* Our Brand Section */
const brands = [
  {
    image: ourIcon1,
    description:
      "Quick and ready to make meal kits with a blend of spices that distinguish Asian cuisine from the rest.",
  },
  {
    image: ourIcon2,
    description:
      "A variety of mouth watering authentic Indian curries, delicious meal bases, combo meals and Indian flatbreads that will titillate your tastebuds.",
  },
  {
    image: ourIcon3,
    description:
      "A wide spectrum of oven-easy frozen Indian snacks and wraps which serve as perfect appetizers and evening snacks.",
  },
  {
    image: ourIcon4,
    description:
      "Premium masala blends and lip-smacking condiments are the chief products of the Rasm line of foodstuffs.",
  },
];

/* Certifications Section */
const certifications = [certi1, certi2, certi3, certi7, certi8];

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
          backgroundImage: `url(${OurBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          px: {
            xs: 2,
            sm: 4,
            md: 8,
          },

          minHeight: {
            xs: "50vh",
            md: "40vh",
            lg: "50vh",
          },

          py: {
            xs: 4,
            md: 4,
            lg: 8,
          },

          pt: {
            xs: 3,
            md: 3,
            lg: 5,
          },

          mt: 0.1,
        }}
      >
        {/* Left Image */}
        <Box
          component="img"
          src={WhoLeftImg}
          alt="Who Left"
          sx={{
            position: "absolute",

            left: {
              xs: "-20px",
              sm: "-10px",
              md: "-20px",
              lg: "0px",
            },

            top: {
              xs: "20px",
              sm: "30px",
              md: "50%",
            },

            transform: {
              xs: "none",
              md: "translateY(-50%)",
            },

            width: {
              xs: "100px",
              sm: "140px",
              md: "180px",
              lg: "320px",
            },

            height: "auto",
            objectFit: "contain",
            zIndex: 3,

            opacity: 0,
            animation: `${fadeSlow} 2s ease forwards`,
            animationDelay: "0.2s",
          }}
        />

        {/* Center Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mx: "auto",
            position: "relative",
            zIndex: 4,

            px: {
              xs: "110px",
              sm: "160px",
              md: "220px",
              lg: "0px",
            },

            maxWidth: {
              lg: "700px",
            },

            marginLeft: {
              lg: "auto",
            },

            marginRight: {
              lg: "auto",
            },
          }}
        >
          {/* Heading */}
          <Typography
            sx={{
              fontFamily: "Mattiface",
              color: "#E8B86D",
              fontWeight: 500,
              lineHeight: 0.9,

              fontSize: {
                xs: "38px",
                sm: "55px",
                md: "75px",
                lg: "100px",
              },

              mb: {
                xs: 2,
                md: 3,
              },

              opacity: 0,
              animation: `${slideUp} 1.2s ease forwards`,
            }}
          >
            Who We Are
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Nunito-Bold",
              color: "#32577E",
              mt: 2,
              lineHeight: 1.5,

              fontSize: {
                xs: "13px",
                sm: "16px",
                md: "20px",
              },

              opacity: 0,
              animation: `${slideUp} 1.4s ease forwards`,
            }}
          >
            A world of pleasure for your taste buds
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Nunito-Regular",
              color: "#0A0808",
              mt: 1,
              lineHeight: 1.7,

              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },

              opacity: 0,
              animation: `${slideUp} 1.6s ease forwards`,
            }}
          >
            We capture the flavours of global cuisine and serve them around the
            world
          </Typography>

          {/* Stats - Whole Box Together */}
          <Box
            sx={{
              pt: {
                xs: 3,
                md: 5,
              },

              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexWrap: "nowrap",

              gap: {
                xs: 2,
                sm: 4,
                md: 6,
                lg: 8,
              },

              width: "100%",

              opacity: 0,
              animation: `${fadeSlow} 2s ease forwards`,
              animationDelay: "0.5s",
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
                      xs: "28px",
                      sm: "40px",
                      md: "55px",
                      lg: "70px",
                    },

                    color: "#32577E",
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Nunito-Regular",

                    fontSize: {
                      xs: "11px",
                      sm: "13px",
                      md: "15px",
                      lg: "18px",
                    },

                    color: "#0A0808",
                    mt: 1,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Bottom Image */}
        <Box
          component="img"
          src={WhoRightImg}
          alt="Who Right"
          sx={{
            position: "absolute",

            right: {
              xs: "-10px",
              sm: "-5px",
              md: "0px",
            },

            bottom: 0,

            width: {
              xs: "90px",
              sm: "130px",
              md: "180px",
              lg: "320px",
            },

            height: "auto",
            objectFit: "contain",
            zIndex: 3,

            opacity: 0,
            animation: `${fadeSlow} 2s ease forwards`,
            animationDelay: "0.5s",
          }}
        />
      </Box>

      {/* Section 3 */}
      {/* Innovation Section */}
      <Box
        sx={{
          background: "#355D89",
          py: { xs: 4, sm: 5, md: 7 },
          px: { xs: 2, sm: 3, md: 6 },
          overflow: "hidden",

          "& .swiper-pagination": {
            mt: 4,
            position: "relative",
          },
          "& .swiper-pagination-bullet": {
            background: "#fff",
            opacity: 0.5,
          },
          "& .swiper-pagination-bullet-active": {
            opacity: 1,
            background: "#E8B86D",
          },
        }}
      >
        {/* HEADING */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontFamily: "Mattiface",
              color: "#E8B86D",
              fontSize: { xs: "42px", sm: "55px", md: "75px", lg: "90px" },
              lineHeight: 1,
            }}
          >
            Driven by Innovation
          </Typography>

          <Typography
            sx={{
              fontFamily: "Nunito-Regular",
              color: "#fff",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              mt: 1.5,
              lineHeight: 1,
            }}
          >
            From our drawing board to
            <br />
            your plate in a jiffy
          </Typography>
        </Box>

        {/* SWIPER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            centeredSlides={false}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              600: { slidesPerView: 1.2, spaceBetween: 25 },
              900: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 40 },
            }}
            style={{
              paddingBottom: "50px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                {/* MOBILE & TABLET (xs, sm, md) */}
                <Box
                  sx={{
                    display: { xs: "flex", lg: "none" },
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  {/* TOP ROW — image left, title right */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: { xs: "140px", sm: "200px", md: "240px" },
                        height: { xs: "180px", sm: "240px", md: "280px" },
                        objectFit: "cover",
                        borderRadius: "16px",
                        flexShrink: 0,
                      }}
                    />

                    {/* TITLE — right of image */}
                    <Box sx={{ pt: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: "Nunito-Regular",
                          color: "#fff",
                          fontSize: { xs: "22px", sm: "26px", md: "28px" },
                          lineHeight: 1.2,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* DESCRIPTION — below image+title row */}
                  <Typography
                    sx={{
                      fontFamily: "Nunito-Regular",
                      color: "rgba(255,255,255,0.85)",
                      fontSize: { xs: "13px", sm: "14px", md: "15px" },
                      lineHeight: 1.7,
                      px: 0.5,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>

                {/* DESKTOP (lg+) — original layout unchanged */}
                <Box
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    flexDirection: "row",
                    alignItems: "flex-start",
                  }}
                >
                  {/* IMAGE + TITLE OVERLAP WRAPPER */}
                  <Box sx={{ position: "relative", flexShrink: 0 }}>
                    {/* IMAGE */}
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: "260px",
                        height: "320px",
                        objectFit: "cover",
                        borderRadius: "16px",
                        display: "block",
                      }}
                    />

                    {/* TITLE OVERLAPPING RIGHT HALF OF IMAGE */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "20px",
                        left: "90%",
                        right: "-130px",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Nunito-Regular",
                          color: "#fff",
                          fontSize: "30px",
                          lineHeight: 1.2,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* DESCRIPTION TEXT — to the right of image */}
                  <Box sx={{ pt: "110px", pl: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: "Nunito-Regular",
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "15px",
                        lineHeight: 1.7,
                      }}
                    >
                      {card.description}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* KNOW MORE BUTTON */}
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 5 } }}>
          <a href="/what-we-do" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "inline-block",
                background: "#fff",
                color: "#E8B86D",
                fontFamily: "Nunito-SemiBold",
                fontSize: { xs: "14px", md: "16px" },
                px: 6,
                py: 1.4,
                borderRadius: "50px",
                letterSpacing: "1px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#E8B86D",
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              Know More
            </Box>
          </a>
        </Box>
      </Box>

      {/* Section 4 */}
      {/* Each Creation Section */}

      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* LEFT TOP DECOR */}
        <Box
          component={motion.img}
          src={mirchImg}
          alt="Mirch"
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
              md: "20px",
              lg: "-12px",
            },

            left: {
              xs: "-10px",
              md: "20px",
              lg: "10px",
            },

            width: {
              xs: "20px",
              sm: "40px",
              md: "80px", // FIXED (iPad only)
              lg: "120px",
            },

            height: "auto",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* RIGHT TOP LOGO */}
        <Box
          component={motion.img}
          src={eachLogo}
          alt="Each Logo"
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
              xs: "15px",
              md: "30px",
            },

            right: {
              xs: "10px",
              md: "30px",
              lg: "60px",
            },

            width: {
              xs: "40px",
              sm: "70px",
              md: "110px", // FIXED (iPad only)
              lg: "180px",
            },

            height: "auto",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* MAIN WRAPPER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            mt: {
              xs: 8,
              md: 10,
            },

            flexDirection: {
              xs: "column",
              lg: "row",
            },

            gap: {
              xs: 4,
              md: 6, // FIXED (iPad spacing)
              lg: 10,
            },

            position: "relative",
            zIndex: 2,
          }}
        >
          {/* MOBILE HEADING */}
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              textAlign: "center",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mattiface",
                color: "#D7AF64",
                fontSize: {
                  xs: "55px",
                  sm: "65px",
                },
                lineHeight: 0.9,
              }}
            >
              Each Creation
            </Typography>

            <Typography
              sx={{
                fontFamily: "Mattiface",
                color: "#D7AF64",
                fontSize: {
                  xs: "55px",
                  sm: "65px",
                },
                lineHeight: 0.9,
              }}
            >
              is a Masterpiece
            </Typography>
          </Box>

          {/* IMAGE */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src={eachImg}
              alt="Each Creation"
              sx={{
                width: {
                  xs: "100%",
                  sm: "400px",
                  md: "450px", // FIXED (iPad only)
                  lg: "550px",
                },

                height: {
                  xs: "300px",
                  sm: "400px",
                  md: "450px", // FIXED (iPad only)
                  lg: "540px",
                },

                objectFit: "cover",
                borderRadius: "32px",
                display: "block",
              }}
            />
          </Box>

          {/* TEXT CONTENT */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            sx={{
              display: "block",
              position: "relative",
              zIndex: 2,

              maxWidth: "600px",
              width: "100%",

              px: {
                xs: 2,
                sm: 3,
                md: 0,
              },
            }}
          >
            {/* DESKTOP HEADING (UNCHANGED) */}
            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },

                fontFamily: "Mattiface",
                color: "#D7AF64",

                fontSize: {
                  md: "60px", // FIXED ONLY iPad
                  lg: "100px",
                },

                lineHeight: 1.5,

                position: "absolute",

                left: {
                  md: "-90px", // FIXED ONLY iPad
                  lg: "-160px",
                },

                top: {
                  md: "-40px", // FIXED ONLY iPad
                  lg: "-80px",
                },

                zIndex: 5,
                width: "900px",
              }}
            >
              Each Creation
            </Typography>

            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },

                fontFamily: "Mattiface",
                color: "#D7AF64",

                fontSize: {
                  md: "60px", // FIXED ONLY iPad
                  lg: "100px",
                },

                lineHeight: 1.5,

                position: "absolute",

                left: {
                  md: "-40px", // FIXED ONLY iPad
                  lg: "-70px",
                },

                top: {
                  md: "10px", // FIXED ONLY iPad
                  lg: "-20px",
                },

                zIndex: 5,
                width: "900px",
              }}
            >
              is a Masterpiece
            </Typography>

            {/* CONTENT */}
            <Box
              sx={{
                mt: {
                  xs: 0,
                  md: 12, // FIXED iPad
                  lg: 22,
                },

                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Nunito-Regular",
                  color: "#232323",

                  fontSize: {
                    xs: "16px",
                    md: "18px",
                  },

                  lineHeight: 1.8,
                  maxWidth: "550px",
                  textAlign: "justify",

                  mx: {
                    xs: "auto",
                    lg: 0,
                  },
                }}
              >
                Our prompt, organized processes ensure perfection in every bite.
                Our state-of-the-art, ultra-hygienic, advanced technology
                ensures you get only the best of what we create.
              </Typography>

              <a href="/innovation" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    mt: 5,
                    display: "inline-block",

                    background: "#315786",
                    color: "#D7AF64",

                    fontFamily: "Nunito-SemiBold",

                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },

                    px: 6,
                    py: 1.4,

                    borderRadius: "50px",

                    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",

                    cursor: "pointer",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      background: "#E8B86D",
                      color: "#fff",
                    },
                  }}
                >
                  Know More
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 5 */}
      {/* Our Brands */}

      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bgAll})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          position: "relative",
          zIndex: 2,

          pb: {
            xs: 20,
            md: 24,
            lg: 18,
          },

          pt: {
            xs: 8,
            md: 12,
          },

          overflow: "visible",
        }}
      >
        {/* HEADING */}
        <Typography
          component={motion.h2}
          initial={{
            y: 80,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          sx={{
            fontFamily: "Mattiface",
            color: "#D7AF64",
            textAlign: "center",
            fontSize: {
              xs: "48px",
              sm: "60px",
              md: "80px",
              lg: "95px",
            },
            lineHeight: 1,
            mb: { xs: 6, md: 10 },
          }}
        >
          Our Brands
        </Typography>

        {/* Coriander leaf */}
        <Box
          component={motion.img}
          src={green_leaf}
          alt="Mirch"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
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
              xs: "110px",
              md: "220px",
              lg: "300px",
            },

            left: {
              xs: "-10px",
              md: "20px",
              lg: "100px",
            },

            width: {
              xs: "20px",
              sm: "40px",
              md: "90px",
              lg: "120px",
            },

            height: "auto",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* CARDS */}
        <Box
          sx={{
            maxWidth: "1300px",
            mx: "auto",
            px: { xs: 3, md: 5 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: {
              xs: 6,
              md: 4,
            },
            alignItems: "stretch",
          }}
        >
          {brands.map((item, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              sx={{
                position: "relative",
                pt: "55px",
              }}
            >
              {/* CARD */}
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: "24px",
                  minHeight: {
                    xs: "220px",
                    md: "250px",
                  },
                  px: {
                    xs: 3,
                    md: 4,
                  },
                  py: {
                    xs: 5,
                    md: 6,
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Nunito-Regular",
                    color: "#111",
                    fontSize: {
                      xs: "16px",
                      md: "18px",
                    },
                    lineHeight: 1.5,
                    letterSpacing: "0.4px", //LetterSpacing
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              {/* LOGO */}
              <Box
                component="img"
                src={item.image}
                alt=""
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",

                  width: {
                    xs: "130px",
                    md: "160px",
                    lg: "180px",
                  },

                  height: "auto",
                  objectFit: "contain",
                  zIndex: 2,
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section 6 */}
      {/* Certification Section */}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${certibg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          position: "relative",
          zIndex: 1,

          mt: {
            xs: "-100px",
            md: "-140px",
            lg: "-200px",
          },

          pt: {
            xs: "140px",
            md: "180px",
            lg: "220px",
          },

          pb: {
            xs: 8,
            md: 10,
            lg: 12,
          },

          overflow: "hidden",
        }}
      >
        {/* TOP RIGHT HALDI */}
        <Box
          component={motion.img}
          src={c_haldi}
          alt="Haldi"
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

            left: {
              lg: "1300px",
            },

            top: {
              xs: "20px",
              md: "20px",
              lg: "190px",
            },

            right: {
              xs: "-10px",
              md: "0px",
              lg: "20px",
            },

            width: {
              xs: "70px",
              sm: "100px",
              md: "150px",
              lg: "220px",
            },

            height: "auto",

            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* BOTTOM LEFT MIRCH */}
        <Box
          component={motion.img}
          src={c_mirch}
          alt="Mirch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          sx={{
            position: "absolute",

            bottom: {
              xs: "10px",
              md: "20px",
              lg: "10px",
            },

            left: {
              xs: "-10px",
              md: "0px",
              lg: "10px",
            },

            width: {
              xs: "80px",
              sm: "120px",
              md: "170px",
              lg: "250px",
            },

            height: "auto",

            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",

            position: "relative",
            zIndex: 2,

            px: {
              xs: 2,
              sm: 4,
              md: 6,
            },
          }}
        >
          {/* HEADING */}
          <Typography
            component={motion.h2}
            initial={{
              y: 80,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            sx={{
              fontFamily: "Mattiface",
              color: "#D7AF64",
              textAlign: "center",

              fontSize: {
                xs: "48px",
                sm: "60px",
                md: "80px",
                lg: "95px",
              },

              lineHeight: 1,
            }}
          >
            Certifications
          </Typography>

          {/* SUB HEADING */}
          <Typography
            component={motion.p}
            initial={{
              y: 40,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            sx={{
              fontFamily: "Nunito-Bold",
              color: "#2E5684",

              textAlign: "center",

              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },

              mt: 0.2,
              mb: {
                xs: 5,
                md: -5,
              },

              lineHeight: 1.4,
            }}
          >
            We are backed by internationally recognized systems of food quality
          </Typography>

          {/* CERTIFICATION CARDS */}
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "repeat(2, 1fr)", // Mobile 2-2
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)", // iPad 4 cards
                lg: "repeat(5, 1fr)", // Desktop 5 cards
              },

              gap: {
                xs: 2,
                md: 3,
                lg: 4,
              },

              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {certifications.map((item, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                sx={{
                  borderRadius: "25px",

                  width: {
                    xs: "140px",
                    sm: "180px",
                    md: "180px",
                    lg: "220px",
                  },

                  height: {
                    xs: "180px",
                    sm: "220px",
                    md: "220px",
                    lg: "260px",
                  },

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  ...(index === 4 && {
                    gridColumn: {
                      xs: "1 / span 2", // Last card center on mobile
                      md: "2 / span 2", // Last card center on iPad
                      lg: "auto",
                    },
                  }),
                }}
              >
                <Box
                  component="img"
                  src={item}
                  alt="Certification"
                  sx={{
                    width: {
                      xs: "120px",
                      sm: "150px",
                      md: "170px",
                      lg: "200px",
                    },

                    height: {
                      xs: "120px",
                      sm: "150px",
                      md: "170px",
                      lg: "200px",
                    },

                    objectFit: "contain",

                    borderRadius: "20px",

                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Section 7 */}
      {/* Contact Section*/}
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bgAll})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 8, md: 12 },
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* TOP LEFT KHADA MIRCH */}
        <Box
          component={motion.img}
          src={khadaM}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          sx={{
            position: "absolute",
            top: 0,
            left: {
              xs: 10,
              md: 220,
            },
            width: {
              xs: 60,
              md: 240,
            },
            zIndex: 1,
          }}
        />

        {/* TOP RIGHT IMAGE */}
        <Box
          component={motion.img}
          src={getIlc}
          alt=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          sx={{
            position: "absolute",
            top: {
              xs: 20,
              md: 10,
            },
            right: {
              xs: 10,
              md: 520,
            },
            width: {
              xs: 70,
              md: 130,
            },
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: {
              xs: 2,
              md: 6,
            },
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* HEADING */}
          <Typography
            component={motion.h2}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            sx={{
              fontFamily: "Mattiface",
              color: "#D7AF64",
              textAlign: "center",
              fontSize: {
                xs: "55px",
                md: "90px",
              },
              lineHeight: 1,

              mt: -5,
              mb: 1,
            }}
          >
            Get in Touch
          </Typography>

          {/* SUBTITLE */}
          <Typography
            component={motion.p}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            sx={{
              fontFamily: "Nunito-Bold",
              color: "#2E5684",
              textAlign: "center",

              fontSize: {
                xs: "14px",
                md: "18px",
              },

              mt: 1,
              mb: 4,
            }}
          >
            Want to reach us? Drop in your details and we'll contact you
          </Typography>

          {/* OVERLAP BOXES */}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: {
                xs: "column",
                lg: "row",
              },

              minHeight: {
                lg: "300px",
              },
            }}
          >
            {/* LEFT FORM BOX */}
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                x: -120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              sx={{
                width: {
                  xs: "90%",
                  lg: "40%",
                },

                background: "#F4F4F4",

                borderRadius: "25px",

                p: {
                  xs: 3,
                  md: 6,
                },

                position: "relative",

                zIndex: 3,
              }}
            >
              {/* LEAF IMAGE */}
              <Box
                component={motion.img}
                src={getLeaf}
                alt=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: 0.9,
                }}
                viewport={{ once: true }}
                sx={{
                  position: "absolute",

                  left: {
                    xs: "-10px",
                    md: "-80px",
                  },

                  top: "50%",

                  transform: "translateY(-50%)",

                  width: {
                    xs: "70px",
                    md: "110px",
                  },

                  zIndex: 5,
                }}
              />

              <TextField
                fullWidth
                variant="standard"
                label="Full Name"
                sx={{ mb: 2, left: 10 }}
              />

              <TextField
                fullWidth
                variant="standard"
                label="Email Address"
                sx={{ mb: 2, left: 10 }}
              />

              <TextField
                fullWidth
                variant="standard"
                label="Contact Number"
                sx={{ mb: 2, left: 10 }}
              />

              <TextField
                fullWidth
                variant="standard"
                label="Message"
                sx={{ mb: 2, left: 10 }}
              />

              <Box textAlign="center">
                <Button
                  sx={{
                    background: "#315786",
                    color: "#D7AF64",
                    px: 5,
                    borderRadius: "40px",
                    ml: 20,
                    mt: 2,
                    height: "30px",
                    width: "90px",

                    "&:hover": {
                      background: "#D7AF64",
                      color: "#fff",
                    },
                    ml: {
                      xs: 30, // mobile
                      md: 20, // tablet/desktop
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>

            {/* RIGHT OFFICE BOX */}
            <Box
              component={motion.div}
              initial={{
                opacity: 0,
                x: 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              sx={{
                width: {
                  xs: "90%",
                  lg: "34%",
                },

                backgroundImage: `linear-gradient(
      rgba(35,76,122,0.0),
      rgba(35,76,122,0.0)
    ), url(${addBg})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                borderRadius: "25px",

                color: "#fff",

                px: {
                  xs: 3,
                  md: 5,
                  lg: 6,
                },

                py: {
                  xs: 4,
                  md: 5,
                  lg: 6,
                },

                mt: {
                  xs: 4,
                  lg: 0,
                },

                ml: {
                  lg: "-80px",
                },

                minHeight: {
                  xs: "320px",
                  lg: "470px",
                },

                display: "flex",
                alignItems: "center",

                position: "relative",

                zIndex: 2,
              }}
            >
              {/* HALDI IMAGE */}
              <Box
                component={motion.img}
                src={haldi}
                alt=""
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 3,
                  delay: 0.9,
                }}
                viewport={{ once: true }}
                sx={{
                  position: "absolute",

                  bottom: {
                    xs: "-30px",
                    md: "-10px",
                  },

                  right: {
                    xs: "-20px",
                    md: "-100px",
                  },

                  width: {
                    xs: "120px",
                    md: "200px",
                  },

                  zIndex: 5,
                }}
              />

              <Box>
                <Typography
                  sx={{
                    color: "#D7AF64",
                    fontFamily: "Nunito-Bold",
                    fontSize: {
                      xs: "24px",
                      md: "28px",
                      lg: "32px",
                    },
                    mb: 4,
                    pl: 6, // left spacing
                  }}
                >
                  Head Office
                </Typography>

                {/* ADDRESS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    mb: 3,
                    pl: 6,
                  }}
                >
                  <Box
                    component="img"
                    src={locationIcon}
                    alt="location"
                    sx={{
                      width: "18px",
                      mt: "3px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Nunito-Regular",
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                      lineHeight: 1.45,
                    }}
                  >
                    Taste L Fine Food Pvt. Ltd.
                    <br />
                    5th Floor, GYS Infinity, 19-20
                    <br />
                    Netaji Subhash Road, Vile Parle East
                    <br />
                    Mumbai - 400057
                    <br />
                    Maharashtra, INDIA
                  </Typography>
                </Box>

                {/* PHONE */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    pl: 6,
                  }}
                >
                  <Box
                    component="img"
                    src={callIcon}
                    alt="call"
                    sx={{
                      width: "18px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Nunito-Regular",
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                    }}
                  >
                    +91 22 42080050
                  </Typography>
                </Box>

                {/* EMAIL */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    pl: 6,
                  }}
                >
                  <Box
                    component="img"
                    src={mailIcon}
                    alt="mail"
                    sx={{
                      width: "18px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: "Nunito-Regular",
                      fontSize: {
                        xs: "15px",
                        md: "16px",
                      },
                    }}
                  >
                    info@tastelfinefood.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
