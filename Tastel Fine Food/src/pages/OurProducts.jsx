import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import banner from "../assets/banner_our_products.png";
import bgall from "../assets/bg_all.png";

import MealKits from "../assets/MealKits.png";
import CurriesGrains from "../assets/Curries&Grains.png";
import SimmerSauces from "../assets/SimmerSauces.png";
import CurryPastes from "../assets/CurryPastes&Marinades.png";
import CondimentsSpices from "../assets/Condiments&Spices.png";
import DipsChutneys from "../assets/Dips&Chutneys.png";
import FrozenFood from "../assets/FrozenFood.png";
import ShowBigImg from "../assets/show_big_img.png";

import ShowImg1 from "../assets/show_img_1.png";
import ShowImg2 from "../assets/show_img_2.png";
import ShowImg3 from "../assets/show_img_3.png";

const productRows = [
  {
    rowId: 1,
    type: "grid",
    cards: [
      {
        id: 1,
        src: MealKits,
        alt: "Meal Kits",
        title: "Meal Kits",
        link: "/meal-kits",
        description:
          "If you're seeking a convenient yet wholesome lunch or dinner option, look no further than Taste'L's Meal Kits. Carefully selected ingredients are packaged in just the right proportions.",
      },
      {
        id: 2,
        src: CurriesGrains,
        alt: "Curries and Grains",
        title: "Ready to Serve \n Curries & Grains",
        link: "/ready-to-serve-curries-grains",
        description:
          "In the West, curries are synonymous with India, and for good reason too! We have generations of experience when it comes to making the perfect base to amp up the deliciousness of any food dish.",
      },
      {
        id: 3,
        src: SimmerSauces,
        alt: "Simmer Sauces",
        title: "Simmer Sauces & \n Stir Fry Sauces",
        link: "/simmer-sauces-stir-fry-sauces",
        description:
          "Bottled up and ready to turn simple ingredients into a grand feast, our simmer and stir fry sauces are the life of every meal. They make you the masterchef you've always wanted to be.",
      },
    ],
  },
  {
    rowId: 2,
    type: "grid",
    cards: [
      {
        id: 4,
        src: CurryPastes,
        alt: "Curry Pastes and Marinades",
        title: "Curry Pastes & \n  Marinades",
        link: "/curry-pastes-marinades",
        description:
          "Fancy cooking elaborate classic meals for your friends and family? Let our curry pastes and marinades lend you a helping hand and make the final results worth all the effort.",
      },
      {
        id: 5,
        src: CondimentsSpices,
        alt: "Condiments and Spices",
        title: "Condiments & \n  Spices",
        link: "/condiments-spices",
        description:
          "Flavour your dishes with the finest range of condiments and spices from Taste'L. Our high quality resources allow us to bring you the freshest and most fragrant flavours.",
      },
      {
        id: 6,
        src: DipsChutneys,
        alt: "Dips and Chutneys",
        title: "Dips & Chutneys",
        link: "/dips-chutneys",
        description:
          "Give your snacks an upgrade by pairing them with our hot, spicy, and mouth watering dips and chutneys! Perfect for both Indian and western savoury dishes.",
      },
    ],
  },
  {
    rowId: 3,
    type: "split",
    cards: [
      {
        id: 7,
        src: FrozenFood,
        alt: "Frozen Food",
        title: "Frozen Food",
        link: "/frozen-food",
        description:
          "Our frozen food packets will earn a permanent spot in your freezers. We bring you a wide range of snacks that will come to your rescue when you're famished and out of options. From paranthas to curries to rice dishes, you can now enjoy nutritionally balanced meals every day.",
      },
    ],
    decorativeImg: ShowBigImg,
  },
];

const ProductCard = ({ src, alt, title, description, link }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        maxWidth: {
          xs: "100%",
          md: 320,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        onClick={() => link && navigate(link)}
        sx={{
          width: {
            xs: "90%",
            sm: "100%",
          },
          height: {
            xs: 380,
            sm: 260,
            md: 300,
            lg: 340,
            xl: 390,
          },
          objectFit: "cover",
          borderRadius: "16px",
          cursor: link ? "pointer" : "default",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: link ? "scale(1.03)" : "none",
          },
        }}
      />

      <Typography
        sx={{
          mt: 2,
          fontWeight: 600,
          fontSize: {
            xs: "20px",
            sm: "18px",
            md: "20px",
            lg: "22px",
          },
          color: "#32577e",
          fontFamily: "Nunito-Bold",
          whiteSpace: "pre-line",
          textAlign: "center",

          minHeight: {
            xs: "60px",
            sm: "70px",
            md: "80px",
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: "16px",
          color: "#0a0808",
          lineHeight: "24px",
          letterSpacing: "0.5px",
          fontFamily: "Nunito-Regular",
          textAlign: "center",
          px: 1,

          minHeight: {
            xs: "130px",
            sm: "130px",
            md: "130px",
            lg: "140px",
          },

          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {description}
      </Typography>

      {link && (
        <Box
          component="button"
          onClick={() => navigate(link)}
          sx={{
            mt: 2,
            px: 3,
            py: 1,
            border: "none",
            borderRadius: "50px",
            bgcolor: "#32577e",
            color: "#d5b06d",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "Nunito-Bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#d5b06d",
              color: "#fff",
            },
          }}
        >
          Know More
        </Box>
      )}
    </Box>
  );
};
function OurProducts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={banner}
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
          Our Products
        </Typography>
      </Box>

      {/* ✅ Single bgall image — all 3 rows stacked inside it */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${bgall})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
        }}
      >
        {/* ✅ Left decorative image */}
        <Box
          component="img"
          src={ShowImg1}
          alt="Decorative left"
          sx={{
            position: "absolute",
            left: 0,
            top: "20%",
            width: { xs: 0, sm: 40, md: 50, lg: 100 },
            objectFit: "contain",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* ✅ Right decorative image */}
        <Box
          component="img"
          src={ShowImg2}
          alt="Decorative right"
          sx={{
            position: "absolute",
            right: 0,
            top: "20%",
            width: { xs: 0, sm: 40, md: 50, lg: 100 },
            objectFit: "contain",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* ✅ Left decorative image */}
        <Box
          component="img"
          src={ShowImg3}
          alt="Decorative left"
          sx={{
            position: "absolute",
            left: 0,
            top: "70%",
            width: { xs: 0, sm: 40, md: 50, lg: 100 },
            objectFit: "contain",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* All 3 rows stacked vertically inside one background */}
        <Box
          ref={sectionRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",

            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(100px)",
            transition: "all 1s ease",

            "@keyframes slideUp": {
              from: {
                opacity: 0,
                transform: "translateY(100px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          {productRows.map((row) => (
            <Box
              key={row.rowId}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 5, md: 7 }, // ✅ vertical breathing room per row
              }}
            >
              {row.type === "grid" ? (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 3, md: 5 },
                    width: "100%",
                    maxWidth: "1100px",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  {row.cards.map((card) => (
                    <ProductCard key={card.id} {...card} />
                  ))}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    maxWidth: "1100px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: 3, md: 4 },
                  }}
                >
                  {row.cards.map((card) => (
                    <ProductCard key={card.id} {...card} />
                  ))}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={row.decorativeImg}
                      alt="Decorative"
                      sx={{
                        width: "100%",
                        maxWidth: { xs: 0, md: 480 },
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default OurProducts;
