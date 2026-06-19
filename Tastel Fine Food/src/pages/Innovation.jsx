import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Banner from "../assets/Inobanner.png";

import haldiImg from "../assets/overview_img_2.png";
import eachLogo from "../assets/overview_img_1.png";
import eachImg from "../assets/overview_img.png";
import Bg1 from "../assets/idation_bg.png";
import Bg2 from "../assets/bg_1.png";

import Icon1 from "../assets/we_offer_icon_1.png";
import Icon2 from "../assets/we_offer_icon_2.png";
import Icon3 from "../assets/we_offer_icon_3.png";
import Icon4 from "../assets/we_offer_icon_4.png";

import leaf from "../assets/center_leaf.png";

const offerData = [
  {
    image: Icon1,
    text: "Product testing and sensory analysis for multi-cuisine palates.",
  },
  {
    image: Icon2,
    text: "New concepts and product development",
  },
  {
    image: Icon3,
    text: "Packaging design and concepts",
  },
  {
    image: Icon4,
    text: "Innovative technologies for packaging",
  },
];

const Innovation = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      {/* Hero Section */}

      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={Banner}
          alt="Innovation Banner"
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
          Wide range of food solutions
        </Typography>
      </Box>

      {/* Section 2 */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          component={motion.img}
          src={haldiImg}
          alt="haldi"
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
              xs: "10px",
              md: "20px",
              lg: "420px",
            },

            left: {
              xs: "-10px",
              md: "20px",
              lg: "1350px",
            },

            width: {
              xs: "20px",
              sm: "40px",
              md: "90px",
              lg: "170px",
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
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 3, // jitna bada, utna slow fade
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
              md: "120px",
              lg: "180px",
            },

            height: "auto",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

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
              Overview
            </Typography>
          </Box>

          {/* IMAGE */}
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
                  md: "550px",
                  lg: "550px",
                },

                height: {
                  xs: "300px",
                  sm: "400px",
                  md: "500px",
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
            initial={{
              opacity: 0,
              x: 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
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
            {/* DESKTOP HEADING */}
            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },

                fontFamily: "Mattiface",
                color: "#D7AF64",

                fontSize: {
                  md: "70px",
                  lg: "100px",
                },

                lineHeight: 1,

                position: "absolute",

                left: {
                  md: "-60px",
                  lg: "-10px",
                },

                top: {
                  md: "-2px",
                  lg: "40px",
                },

                zIndex: 5,
                width: "900px",
              }}
            >
              Overview
            </Typography>

            <Box
              sx={{
                mt: {
                  xs: 0,
                  md: 18,
                  lg: 18,
                },

                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              {/* Description */}
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
                Trying new innovations in our products and processes is the best
                way to keep up with the evolving food industry. We constantly
                strive to offer new food products and beverages to meet the ever
                changing preferences of our customers. The influx of new, highly
                experimentative market players have kept us on our toes, pushing
                us to constantly evolve in order to retain our long-term
                patrons.
              </Typography>

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
                  mt: 2,
                  mx: {
                    xs: "auto",
                    lg: 0,
                  },
                }}
              >
                Driving innovation with integration in the food and beverage
                industry is important for creating value and product
                differentiation. It has become important to integrate the latest
                technology, digitalization, trends and sustainability with the
                market preferences at all times.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${Bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* WE ARE MORE THAN SECTION */}
        <Box
          sx={{
            width: "100%",
            backgroundImage: `url(${Bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            py: {
              xs: 6,
              sm: 7,
              md: 8,
              lg: 10,
            },

            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
          }}
        >
          {/* HEADING */}
          <Box
            component={motion.div}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
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
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mattiface",
                color: "#D7AF64",

                fontSize: {
                  xs: "42px",
                  sm: "50px",
                  md: "65px",
                  lg: "85px",
                },

                lineHeight: 1,
              }}
            >
              We are More than
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito-Bold",
                color: "#355D89",

                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "18px",
                  lg: "22px",
                },

                mt: 0.5,
              }}
            >
              just products and services
            </Typography>
          </Box>

          {/* ICONS */}
          <Box
            sx={{
              maxWidth: "1000px",
              mx: "auto",

              mt: {
                xs: 5,
                md: 7,
              },

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              },

              gap: {
                xs: 5,
                sm: 4,
                md: 5,
                lg: 1,
              },
            }}
          >
            {offerData.map((item, index) => (
              <Box
                key={index}
                component={motion.div}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: isDesktop ? 0 : index * 0.2,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                sx={{
                  textAlign: "center",
                }}
              >
                {/* ICON */}
                <Box
                  component="img"
                  src={item.image}
                  alt=""
                  sx={{
                    width: {
                      xs: "85px",
                      sm: "95px",
                      md: "110px",
                      lg: "110px",
                    },

                    height: "auto",

                    display: "block",
                    mx: "auto",

                    mb: 1,
                  }}
                />

                {/* TEXT */}
                <Typography
                  sx={{
                    fontFamily: "Nunito-Regular",
                    color: "#222",

                    fontSize: {
                      xs: "11px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },

                    lineHeight: 1.6,
                    letterSpacing: 1,

                    maxWidth: {
                      xs: "220px",
                      sm: "240px",
                      md: "260px",
                    },

                    mx: "auto",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Section 4 */}
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: {
            xs: 5,
            sm: 6,
            md: 7,
            lg: 8,
          },
          px: {
            xs: 2,
            sm: 3,
            md: 5,
          },
        }}
      >
        {/* 🌿 TOP LEFT LEAF IMAGE */}
        <Box
          component={motion.img}
          src={leaf}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            position: "absolute",
            top: { xs: 10, md: 20 },
            left: { xs: 10, md: 40 },
            width: { xs: "60px", md: "190px" },
            height: "auto",
            zIndex: 1,
          }}
        />

        {/* MAIN CONTAINER */}
        <Box
          sx={{
            maxWidth: "1300px",
            mx: "auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* TITLE (BOTTOM TO TOP ANIMATION) */}
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{
              fontFamily: "Mattiface",
              color: "#D7AF64",
              fontSize: {
                xs: "42px",
                sm: "50px",
                md: "65px",
                lg: "85px",
              },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Innovation Center
          </Typography>

          {/* TEXT GROUP (FADE IN TOGETHER) */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* SUB HEADING */}
            <Typography
              sx={{
                fontFamily: "Nunito-Bold",
                color: "#355D89",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "18px",
                  lg: "22px",
                },
                letterSpacing: 0.9,
                mb: 3,
                px: {
                  xs: 1,
                  sm: 2,
                  md: 6,
                },
              }}
            >
              We are always looking for new ways to help our patrons experience
              food.
            </Typography>

            {/* PARAGRAPH 1 */}
            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                color: "#333",
                fontWeight: 300,
                fontSize: {
                  xs: "11px",
                  sm: "14px",
                  md: "15px",
                  lg: "17px",
                },
                lineHeight: 1.4,
                px: {
                  xs: 1,
                  sm: 3,
                  md: 8,
                },
              }}
            >
              A variety of health issues and the rise in active lifestyles are
              creating a greater demand for innovative and customized foods.
              Clients are investing more in themselves as people and it quickly
              trickles down to their sustenance needs.
            </Typography>

            {/* PARAGRAPH 2 */}
            <Typography
              sx={{
                fontFamily: "Nunito-Regular",
                color: "#333",
                fontWeight: 300,
                fontSize: {
                  xs: "11px",
                  sm: "14px",
                  md: "15px",
                  lg: "17px",
                },
                lineHeight: 1.4,
                px: {
                  xs: 1,
                  sm: 3,
                  md: 8,
                },
                mt: 2,
              }}
            >
              Our biggest challenge has been to satisfy the palette without
              having them compromise their principles (plant-based food) or
              encourage a sedentary lifestyle (low-fat options). At the same
              time, they have an inherent need for fresh, functional options in
              terms of food and beverages.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Innovation;
