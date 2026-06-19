import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import bannerwhatwedo from "../assets/bannerwhatwedo.png";
import whatwedobg from "../assets/whatwedobg.png";
import ideation_img from "../assets/ideation_img.png";
import lines from "../assets/lines.png";
import lasan_img from "../assets/lasan_img.png";
import laung from "../assets/laung.png";
import product_img from "../assets/product_img.png";
import product_small_img from "../assets/product_small_img.png";
import img1 from "../assets/food_img_1.jpg";
import img2 from "../assets/food_img_2.jpg";
import img3 from "../assets/food_img_3.jpg";
import img4 from "../assets/food_img_4.jpg";
import food_small_img_1 from "../assets/food_small_img_1.jpg";
import food_img from "../assets/food_img.jpg";
import food_past from "../assets/food_past.png";
import frogen from "../assets/frogen.jpg";
import frogen1 from "../assets/frogen_small_img_1.png";
import frogen2 from "../assets/frogen_small_img_2.png";
import frogen3 from "../assets/frogen_small_img_3.png";
import spices_img from "../assets/spices_img.png";
import spicesimg from "../assets/spices_small_img_1.png";

// backgrounds
import retortingbg from "../assets/retortingbg.png";
import pastbg from "../assets/pastbg.png";
import frogenbg from "../assets/frogenbg.png";
import spicesbg from "../assets/spicesbg.png";
import productbg from "../assets/product_bg.png";

function useSlideIn(direction = "left", delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translateMap = {
    left: "translateX(-80px)",
    right: "translateX(80px)",
    up: "translateY(50px)",
    down: "translateY(-50px)",
  };

  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translate(0,0)" : translateMap[direction],
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
    },
  };
}

// ── Shared heading style ──
const headingSx = {
  fontFamily: "mattiface",
  fontStyle: "italic",
  color: "#c9a84c",
  lineHeight: 1.3,
  mb: 1,
};
const subHeadSx = {
  fontFamily: "Nunito-Bold",
  fontWeight: 700,
  color: "#32577e",
  mb: 1,
};
const bodySx = {
  fontFamily: "Nunito-Regular",
  color: "#333",
  lineHeight: 1.5,
};

// ── Shared section wrapper ──
function SectionWrapper({ bg, children, minHeight = "auto" }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        py: 8,
        overflow: "hidden",
      }}
    >
      {children}
    </Box>
  );
}

function Whatwedo() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Ideation
  const ideaImg = useSlideIn("left", 0.1);
  const ideaText = useSlideIn("right", 0.25);
  const lasanAnim = useSlideIn("right", 0.05);
  const laungAnim = useSlideIn("left", 0.05);

  // Product Development
  const prodImg = useSlideIn("right", 0.1);
  const prodText = useSlideIn("left", 0.25);
  const prodSmall = useSlideIn("right", 0.05);

  // Food Retorting
  const retHeading = useSlideIn("left", 0.1);
  const retText = useSlideIn("right", 0.2);
  const retImg1 = useSlideIn("up", 0.1);
  const retImg2 = useSlideIn("up", 0.2);
  const retImg3 = useSlideIn("up", 0.3);
  const retImg4 = useSlideIn("up", 0.4);
  const retSmall = useSlideIn("left", 0.05);

  // Food Pasteurization
  const pastImg = useSlideIn("right", 0.1);
  const pastText = useSlideIn("left", 0.25);
  const pastSmall = useSlideIn("right", 0.05);

  // Frozen Foods
  const froImg = useSlideIn("left", 0.1);
  const froText = useSlideIn("right", 0.25);
  const froSmall1 = useSlideIn("left", 0.05);
  const froSmall2 = useSlideIn("right", 0.05);
  const froSmall3 = useSlideIn("left", 0.08);

  // Spice Blending
  const spiceImg = useSlideIn("right", 0.1);
  const spiceText = useSlideIn("left", 0.25);
  const spiceSmall = useSlideIn("right", 0.05);

  return (
    <>
      {/* ══ BANNER ══ */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={bannerwhatwedo}
          alt="Banner"
          sx={{
            width: "100%",
            height: {
              xs: "400px",
              sm: "350px",
              md: "350px",
              lg: "400px",
              xl: "450px",
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
              md: "110px",
              lg: "120px",
              xl: "120px",
            },
            animation: "fadeUp 1.5s ease-out forwards",
            "@keyframes fadeUp": {
              from: { opacity: 0, marginTop: "80px" },
              to: { opacity: 1, marginTop: "0px" },
            },
          }}
        >
          Processes that safeguard health and taste
        </Typography>
      </Box>

      {/* ══════════════════════════════════════
          MAIN WRAPPER — ek hi lines image
      ══════════════════════════════════════ */}
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
        {/* ONE lines image spanning entire wrapper */}
        <Box
          component="img"
          src={lines}
          alt=""
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ══ 1. IDEATION ══ */}
        <SectionWrapper bg={whatwedobg}>
          {/* Garlic top-right */}
          <Box
            ref={lasanAnim.ref}
            component="img"
            src={lasan_img}
            alt="Garlic"
            style={lasanAnim.style}
            sx={{
              position: "absolute",
              top: "2%",
              right: 0,
              width: { xs: "100px", md: "180px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
          {/* Cloves bottom-left */}
          <Box
            ref={laungAnim.ref}
            component="img"
            src={laung}
            alt="Cloves"
            style={laungAnim.style}
            sx={{
              position: "absolute",
              bottom: "5%",
              left: 0,
              width: { xs: "80px", md: "120px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* LEFT image */}
              <Box
                ref={ideaImg.ref}
                style={ideaImg.style}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: "48%" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={ideation_img}
                  alt="Ideation"
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "450px" },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              {/* RIGHT text */}
              <Box ref={ideaText.ref} style={ideaText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "70px", md: "100px" } }}
                >
                  Ideation
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  Ideas for happy souls
                </Typography>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    maxWidth: "520px",
                  }}
                >
                  All ideas are not good, but experimenting with a lot of ideas
                  is what has enabled us to deliver some of the most innovative
                  solutions in the food industry. We make sure that our
                  innovative team gets full control when it comes to helping us
                  deliver ideal solutions for our clients. Our ~30+ years of
                  experience has demonstrated that when we arrive at the most
                  efficient solutions, business objectives are efficiently met
                  along the way. The perfect blend of curiosity and practicality
                  is what drives our ideation wing.
                </Typography>
              </Box>
            </Box>
          </Box>
        </SectionWrapper>

        {/* ══ 2. PRODUCT DEVELOPMENT ══ */}
        <SectionWrapper bg={productbg}>
          {/* product_small_img top-right */}
          <Box
            ref={prodSmall.ref}
            component="img"
            src={product_small_img}
            alt=""
            style={prodSmall.style}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "80px", md: "130px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* LEFT text */}
              <Box ref={prodText.ref} style={prodText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "50px", md: "80px" } }}
                >
                  Product Development
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  For the love of food
                </Typography>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    maxWidth: "520px",
                  }}
                >
                  Perhaps the biggest advantage of dealing with a chef-led
                  company is that you get a team that gets the perfect
                  environment to place quality food at the center of everything
                  they do. We pride ourselves on using the best available
                  resources, both human and logistical, to bring you the best
                  products you can possibly get within the price. We have been
                  able to grow in heaps and bounds solely on the basis of the
                  wide range of products developed every year.
                </Typography>
              </Box>
              {/* RIGHT image */}
              <Box
                ref={prodImg.ref}
                style={prodImg.style}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: "48%" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={product_img}
                  alt="Product Development"
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "450px" },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SectionWrapper>

        {/* ══ 3. FOOD RETORTING ══ */}
        <SectionWrapper bg={whatwedobg}>
          {/* food_small_img_1 left side */}
          <Box
            ref={retSmall.ref}
            component="img"
            src={food_small_img_1}
            alt=""
            style={retSmall.style}
            sx={{
              position: "absolute",
              top: "5%",
              left: 0,
              width: { xs: "70px", md: "110px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            {/* Top row: heading left, text right */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 8 },
                mb: 6,
              }}
            >
              <Box
                ref={retHeading.ref}
                style={retHeading.style}
                sx={{ flex: "0 0 auto", width: { xs: "100%", md: "35%" } }}
              >
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "50px", md: "70px" } }}
                >
                  Food Retorting
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  As fresh as the farm
                </Typography>
              </Box>
              <Box ref={retText.ref} style={retText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    mb: 2,
                  }}
                >
                  Ready-to-eat food packets are perhaps the most underrated
                  gifts of modern technology. Perfect for students, tourists,
                  and working professionals with hectic lifestyles, they are a
                  godsend for those who need a proper, nutritious meal without
                  the hassle.
                </Typography>
                <Typography
                  sx={{ ...bodySx, fontSize: { xs: "14px", md: "16px" } }}
                >
                  Retort processing is a batch-wise or continuous process that
                  provides in-container sterilisation for products with low acid
                  levels in order to extend their shelf life. At Taste'L, we
                  offer a wide range of options of food retorting with the
                  smartest technology available to ensure consumer safety.
                </Typography>
              </Box>
            </Box>

            {/* Bottom row: 4 images */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
              }}
            >
              {[
                { ref: retImg1.ref, style: retImg1.style, src: img1 },
                { ref: retImg2.ref, style: retImg2.style, src: img2 },
                { ref: retImg3.ref, style: retImg3.style, src: img3 },
                { ref: retImg4.ref, style: retImg4.style, src: img4 },
              ].map((item, i) => (
                <Box
                  key={i}
                  ref={item.ref}
                  style={item.style}
                  sx={{
                    flex: 1,
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                  }}
                >
                  <Box
                    component="img"
                    src={item.src}
                    alt={`food ${i + 1}`}
                    sx={{
                      width: "100%",
                      height: { xs: "200px", md: "230px" },
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </SectionWrapper>

        {/* ══ 4. FOOD PASTEURIZATION ══ */}
        <SectionWrapper bg={pastbg}>
          {/* food_past top-right */}
          <Box
            ref={pastSmall.ref}
            component="img"
            src={food_past}
            alt=""
            style={pastSmall.style}
            sx={{
              position: "absolute",
              top: "30%",
              right: 0,
              width: { xs: "80px", md: "120px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* LEFT text */}
              <Box ref={pastText.ref} style={pastText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "45px", md: "70px" } }}
                >
                  Food Pasteurization
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  What you can depend upon
                </Typography>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    maxWidth: "520px",
                  }}
                >
                  Food pasteurization is the process of killing pathogenic
                  microorganisms in certain foods and beverages by mildly
                  heating them under 100°C, thereby extending their shelf life.
                  While most people think of pasteurization as a process that
                  only increases the shelf life, reports suggest that if done
                  right, the method also increases the concentration of vitamins
                  in the food and beverages. At Taste'L, we provide
                  pasteurization services for all types of products.
                </Typography>
              </Box>
              {/* RIGHT image */}
              <Box
                ref={pastImg.ref}
                style={pastImg.style}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: "48%" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={food_img}
                  alt="Pasteurization"
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "450px" },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SectionWrapper>

        {/* ══ 5. FROZEN FOODS ══ */}
        <SectionWrapper bg={whatwedobg}>
          {/* frogen_small_img_1 — left bottom */}
          <Box
            ref={froSmall1.ref}
            component="img"
            src={frogen1}
            alt=""
            style={froSmall1.style}
            sx={{
              position: "absolute",
              bottom: "5%",
              left: 0,
              width: { xs: "70px", md: "110px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
          {/* frogen_small_img_3 — left top */}
          <Box
            ref={froSmall3.ref}
            component="img"
            src={frogen3}
            alt=""
            style={froSmall3.style}
            sx={{
              position: "absolute",
              top: "3%",
              left: 0,
              width: { xs: "70px", md: "110px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />
          {/* frogen_small_img_2 — right top */}
          <Box
            ref={froSmall2.ref}
            component="img"
            src={frogen2}
            alt=""
            style={froSmall2.style}
            sx={{
              position: "absolute",
              top: "3%",
              right: 0,
              width: { xs: "70px", md: "110px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* LEFT image */}
              <Box
                ref={froImg.ref}
                style={froImg.style}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: "48%" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={frogen}
                  alt="Frozen Foods"
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "450px" },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              {/* RIGHT text */}
              <Box ref={froText.ref} style={froText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "55px", md: "80px" } }}
                >
                  Frozen Foods
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  Quick fixes for every mood
                </Typography>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    maxWidth: "520px",
                  }}
                >
                  Over the years, the level of convenience expected by Indians
                  when it comes to food has increased steadily. On the other
                  hand, it is the complex preparation process that makes Indian
                  snacks so special. Enter frozen food options by Taste'L: Our
                  wide range of heat-to-eat options are a heaven-send for urban
                  Indians who have a Desi palette. These options also increase
                  the choices available to tourists and students, giving them
                  the much-desired satisfaction when away from home. Just pop,
                  heat, and eat!
                </Typography>
              </Box>
            </Box>
          </Box>
        </SectionWrapper>

        {/* ══ 6. SPICE BLENDING ══ */}
        <SectionWrapper bg={spicesbg}>
          {/* spices_small_img_1 — right side */}
          <Box
            ref={spiceSmall.ref}
            component="img"
            src={spicesimg}
            alt=""
            style={spiceSmall.style}
            sx={{
              position: "absolute",
              top: "5%",
              right: 0,
              width: { xs: "80px", md: "130px" },
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "1200px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 6, md: 10 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* LEFT text */}
              <Box ref={spiceText.ref} style={spiceText.style} sx={{ flex: 1 }}>
                <Typography
                  sx={{ ...headingSx, fontSize: { xs: "50px", md: "78px" } }}
                >
                  Spice Blending
                </Typography>
                <Typography
                  sx={{ ...subHeadSx, fontSize: { xs: "12px", md: "18px" } }}
                >
                  Tradition meets technology
                </Typography>
                <Typography
                  sx={{
                    ...bodySx,
                    fontSize: { xs: "14px", md: "16px" },
                    maxWidth: "520px",
                  }}
                >
                  For centuries, Indian spices have dominated global palettes,
                  thereby opening up new avenues for Indians. Traditionally,
                  Indian women blended spices at home for specific purposes, to
                  prepare certain dishes that needed those specific spices to
                  bring out the base flavour of the dishes at the forefront. We
                  use the freshest spices blended under the strictest
                  proportions to ensure quality and consistency in our spice
                  blends.
                </Typography>
              </Box>
              {/* RIGHT image */}
              <Box
                ref={spiceImg.ref}
                style={spiceImg.style}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "100%", md: "48%" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={spices_img}
                  alt="Spice Blending"
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "450px" },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </SectionWrapper>
      </Box>
      {/* ← Main wrapper end */}
    </>
  );
}

export default Whatwedo;
