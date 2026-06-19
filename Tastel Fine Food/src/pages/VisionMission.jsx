import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import banner from "../assets/visionmissionbanner.png";
import bgforpage from "../assets/visionmissionbg.png";

import vision1 from "../assets/vission_1.png";
import mission1 from "../assets/mission_1.png";
import mission2 from "../assets/mission_2.png";
import mission3 from "../assets/mission_3.png";

import visionMain from "../assets/vission.png";
import missionMain from "../assets/mission.png";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const slide = (inView, direction = "left", delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView
    ? "translateX(0)"
    : direction === "left"
      ? "translateX(-80px)"
      : "translateX(80px)",
  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
});

function VisionMission() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [visionRef, visionInView] = useInView(0.2);
  const [missionRef, missionInView] = useInView(0.2);

  return (
    <>
      {/* ── Banner ── */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={banner}
          alt="Vision Mission Banner"
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
              md: "120px",
              lg: "130px",
              xl: "130px",
            },
            animation: "fadeUp 1.5s ease-out forwards",
            "@keyframes fadeUp": {
              from: { opacity: 0, marginTop: "80px" },
              to: { opacity: 1, marginTop: "0px" },
            },
          }}
        >
          Spreading the joy of taste
        </Typography>
      </Box>

      {/* ── Content area with bg ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundImage: `url(${bgforpage})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          py: { xs: 6, md: 10 },
          overflow: "hidden",
        }}
      >
        {/* ════════════════ VISION SECTION ════════════════ */}
        {/* vision_1 — absolutely placed top-right of the entire vision section */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
            mb: { xs: 8, md: 14 },
          }}
        >
          {/* vision_1 — top right corner of the vision block, no animation */}
          <Box
            component="img"
            src={vision1}
            alt=""
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: { xs: "-10px", md: "-20px" },
              right: { xs: "0px", md: "-170px" },
              width: { xs: "100px", md: "240px" },
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          <Box
            ref={visionRef}
            sx={{
              px: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 8 },
              position: "relative",
            }}
          >
            {/* Main image — slides in from LEFT */}
            <Box
              sx={{
                flex: "0 0 auto",
                width: { xs: "100%", md: "45%" },
                ...slide(visionInView, "left", 0),
              }}
            >
              <Box
                component="img"
                src={visionMain}
                alt="Vision"
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  display: "block",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              />
            </Box>

            {/* Text block — slides in from RIGHT */}
            <Box
              sx={{
                flex: 1,
                position: "relative",
                ...slide(visionInView, "right", 0.2),
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Mattiface",
                  fontSize: { xs: "40px", md: "96px" },
                  color: "#c9a44a",
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                Vision
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Nunito-Regular",
                  fontSize: { xs: "15px", md: "16px" },
                  color: "#0a0808",
                  lineHeight: "25px",
                  maxWidth: "480px",
                  letterSpacing: 1,
                }}
              >
                To be the leading manufacturer and preferred provider of
                processed foods by virtue of exciting brands, superior taste,
                innovative packaging, and highest quality of ambient and frozen
                products, whilst being committed to ethical business practices
                in domestic as well as international markets.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ════════════════ MISSION SECTION ════════════════ */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* mission_1 — left side of the component, no animation, no padding */}
          <Box
            component="img"
            src={mission1}
            alt=""
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: { xs: "0px", md: "0px" },
              left: { xs: "0px", md: "-180px" },
              width: { xs: "70px", md: "200px" },
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* mission_3 — right side of the component, no animation, no padding */}
          <Box
            component="img"
            src={mission3}
            alt=""
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: { xs: "0px", md: "0px" },
              right: { xs: "0px", md: "-140px" },
              width: { xs: "55px", md: "160px" },
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          <Box
            ref={missionRef}
            sx={{
              px: { xs: 3, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 8 },
              position: "relative",
            }}
          >
            {/* Text — slides in from LEFT */}
            <Box
              sx={{
                flex: 1,
                position: "relative",
                order: { xs: 2, md: 1 },
                ...slide(missionInView, "left", 0),
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Mattiface",
                  fontSize: { xs: "40px", md: "96px" },
                  color: "#c9a44a",
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                Mission
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Nunito-Regular",
                  fontSize: { xs: "15px", md: "16px" },
                  color: "#0a0808",
                  lineHeight: "25px",
                  letterSpacing: 1,
                  maxWidth: "480px",
                }}
              >
                To manufacture healthy and nutritive products through continual
                research and innovations, by using applied technical training
                and adhering to health and food safety standards, with a view to
                exceeding customer expectations with premium quality products
                and service.
              </Typography>

              {/* mission_2 — below the paragraph text, no animation */}
              <Box
                component="img"
                src={mission2}
                alt=""
                aria-hidden="true"
                sx={{
                  position: "absolute",
                  bottom: { xs: "-60px", md: "-150px" },
                  right: { xs: "0px", md: "250px" },
                  width: { xs: "80px", md: "150px" },
                  pointerEvents: "none",
                }}
              />
            </Box>

            {/* Main image — slides in from RIGHT */}
            <Box
              sx={{
                flex: "0 0 auto",
                width: { xs: "100%", md: "48%" },
                order: { xs: 1, md: 2 },
                ...slide(missionInView, "right", 0.2),
              }}
            >
              <Box
                component="img"
                src={missionMain}
                alt="Mission"
                sx={{
                  width: "100%",
                  borderRadius: "12px",
                  display: "block",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default VisionMission;
