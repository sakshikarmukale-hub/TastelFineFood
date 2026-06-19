import { useState, useEffect, useRef } from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import ourbg from "../assets/ourbg.jpg";
import ourbg1 from "../assets/ourbg1.jpg";
import ourdhaniya from "../assets/ourdhaniya.png";
import ourgrlic from "../assets/ourgrlic.png";
import ourman from "../assets/ourman.jpg";
import ouryear from "../assets/ouryear.jpg";
import ourcircule from "../assets/ourcircule.png";
import ourarrow from "../assets/ourarrow.png";

// Same fonts.css as Careers / Contact pages
import "../styles/fonts.css";

const ASSETS = {
  banner: ourbg1,
  founded: ourcircule,
  greenLeaf: ourdhaniya,
  eachLogo: ourgrlic,
  ourImg: ourman,
  bg: ourbg,
  timelineBg: ouryear,
  arrow: ourarrow,
};

const PARAGRAPHS = [
  "Taste\u2019L Fine Food Pvt. Ltd. is the brainchild of Mr. A.K. Talwar, who now serves as the Managing Director of the company. Mr. Talwar started his professional career by working as a chef with Taj Hotels and spent another decade in the hospitality industry. He then transitioned to international sales and product management for a large foods company where he developed over 150 products.",
  "Armed with 20 years of experience in the food industry, Mr. Talwar set out on his entrepreneurial venture in the world of processed foods and founded Taste\u2019L Fine Food Pvt. Ltd.",
  "Mr. Talwar set high quality standards from the very start and sought to offer competitive prices using highly efficient processes. This has continued to be the hallmark of the company\u2019s success. The company was started on slow but sure grounds with diligent hard work and steadfast dedication to quality. Almost 2 decades later, it has grown to larger offices, multiple product lines, multiple factories, and a noteworthy presence in the global markets. Besides being the preferred choice of food companies domestically, Taste\u2019L also exports to Australia, Canada, USA, Europe, and the Middle East. Some Asian and UK markets are all set to join the league.",
];

const TIMELINE = [
  {
    year: "2003",
    text: "Taste'L Fine Food Pvt. Ltd. starts in a 200 sq. ft. office with a two-people staff. Sourcing and manufacturing was supported by the QA team in the initial years.",
  },
  {
    year: "2006",
    text: "First investment into a Frozen Products manufacturing plant at Nasik, Maharashtra.",
  },
  {
    year: "2008",
    text: "Significant investment in a new manufacturing plant for ambient products at Karad, Maharashtra, with a view to shift manufacturing operations entirely to the new facility. Further investment for a new frozen products manufacturing facility.",
  },
  {
    year: "2009",
    text: "Taste'L Fine Food and Honeytop Foods UK draw a joint venture agreement for Naan and Tortilla manufacturing in India.",
  },
  {
    year: "2010",
    text: "Inauguration of the new frozen product manufacturing plant in Karad, Maharashtra. Administrative operations moved to a larger office in Goregaon West, Mumbai.",
  },
  {
    year: "2012",
    text: "Taste'L Fine Food establishes itself on a global scale by exporting to the USA, Canada, Middle East, Australia, and some parts of Europe. Taste\u2019L Fine Food now runs two fully-owned ambient and frozen manufacturing facilities.",
  },
  {
    year: "2013",
    text: "Further investment in the existing sites with a view to fully automate the manufacturing facilities.",
  },
];

// Fires once when element scrolls into view
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function HistoryHero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 380, sm: 460, md: 440 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${ASSETS.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0, background: "transparent" }} />
      <Typography
        className="script-heading"
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Mattiface, cursive",
          fontSize: { xs: "2.4rem", sm: "3.2rem", md: "8.2rem" },
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        17 years and beyond
      </Typography>

      {/* "Founded in 2003" badge straddles the hero/content boundary */}
      <Box
        component="img"
        src={ASSETS.founded}
        alt="Founded in 2003"
        sx={{
          position: "absolute",
          zIndex: 2,
          bottom: { xs: -45, md: -70 },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 90, md: 150 },
        }}
      />
    </Box>
  );
}

function IntroSection() {
  const [textRef, textVisible] = useReveal(0.15);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${ASSETS.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundColor: "var(--bg-cream)",
        pt: { xs: 9, md: 12 },
        pb: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={ASSETS.greenLeaf}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 90, lg: 120 },
          left: { md: -20, lg: 10 },
          width: { md: 110, lg: 140 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.eachLogo}
        alt=""
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          top: 40,
          right: "6%",
          width: 100,
          mt: 52,
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />

      <Stack
        ref={textRef}
        spacing={3}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 3, sm: 4, md: 6 },
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {PARAGRAPHS.map((p, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Nunito-Regular, sans-serif",
              color: "var(--text-dark)",
              fontSize: { xs: "0.98rem", md: "1.05rem" },
              lineHeight: 1.8,
            }}
          >
            {p}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

function QuoteSection() {
  const [rowRef, rowVisible] = useReveal(0.15);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${ASSETS.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundColor: "var(--bg-cream)",
        py: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      <Box
        ref={rowRef}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1300,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, sm: 4, md: 5 },
        }}
      >
        {/* Photo slides in from LEFT */}
        <Box
          component="img"
          src={ASSETS.ourImg}
          alt="Mr. A.K. Talwar, Managing Director"
          sx={{
            width: { xs: "100%", md: "46%" },
            maxWidth: 480,
            borderRadius: "4px",
            objectFit: "cover",
            position: "relative",
            zIndex: 1,
            opacity: rowVisible ? 1 : 0,
            transform: {
              xs: rowVisible ? "translateY(0)" : "translateY(40px)",
              md: rowVisible ? "translateX(0)" : "translateX(-80px)",
            },
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        />

        {/* Quote card slides in from RIGHT */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            bgcolor: "#ffffff",
            boxShadow: "0 18px 50px rgba(20,30,45,0.14)",
            borderRadius: "20px",
            px: { xs: 4, md: 6 },
            py: { xs: 5, md: 6 },
            width: { xs: "100%", md: "58%" },
            ml: { xs: 0, md: -6 },
            mt: { xs: -4, md: 0 },
            opacity: rowVisible ? 1 : 0,
            transform: {
              xs: rowVisible ? "translateY(0)" : "translateY(40px)",
              md: rowVisible ? "translateX(0)" : "translateX(80px)",
            },
            transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "block",
              fontFamily: "Georgia, serif",
              color: "var(--gold)",
              fontSize: "3rem",
              lineHeight: 0.5,
              mb: 2,
            }}
          >
            &ldquo;
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito-SemiBold, sans-serif",
              color: "#32577e",
              fontSize: { xs: "1.2rem", md: "2rem" },
              lineHeight: 1.2,
            }}
          >
            Our ultimate goal is to create organic and sustainable products,
            with a unique combination of healthy, nutritive, ingredients through
            research and innovation
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito-Regular, sans-serif",
              color: "#0a0808",
              mt: 3,
            }}
          >
            - Mr. A.K. Talwar, Managing Director
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Timeline: current content animates up from below on change.
// Next year peeks at the bottom so you can see what's coming.
function TimelineSection() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  // Reveal the "Timeline of Events" heading once on scroll
  useEffect(() => {
    const node = titleRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const navigate = (newIndex) => {
    if (animating) return;
    setAnimating(true);
    // Immediately update index so the new content renders and animates in
    setIndex(newIndex);
    setAnimKey((k) => k + 1);
    setTimeout(() => setAnimating(false), 600);
  };

  const goPrev = () => navigate(index === 0 ? TIMELINE.length - 1 : index - 1);
  const goNext = () => navigate(index === TIMELINE.length - 1 ? 0 : index + 1);

  const current = TIMELINE[index];
  const nextIndex = index === TIMELINE.length - 1 ? 0 : index + 1;
  const nextYear = TIMELINE[nextIndex].year;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 560, md: 660 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: `url(${ASSETS.timelineBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        overflow: "hidden",
        pt: { xs: 6, md: 8 },

        pb: 0,
      }}
    >
      {/* Dark overlay */}
      <Box sx={{ position: "absolute", inset: 0, background: "transparent" }} />

      {/* Prev arrow */}
      <IconButton
        onClick={goPrev}
        aria-label="Previous event"
        sx={{
          position: "absolute",
          zIndex: 2,
          left: { xs: 12, md: 60 },
          top: "45%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.95)",
          width: 44,
          height: 44,
          "&:hover": { bgcolor: "#ffffff" },
        }}
      >
        <Box
          component="img"
          src={ASSETS.arrow}
          alt=""
          sx={{ width: 16, transform: "scaleX(-1)", filter: "brightness(0)" }}
        />
      </IconButton>

      {/* Next arrow */}
      <IconButton
        onClick={goNext}
        aria-label="Next event"
        sx={{
          position: "absolute",
          zIndex: 2,
          right: { xs: 12, md: 60 },
          top: "45%",
          transform: "translateY(-50%)",
          bgcolor: "rgba(255,255,255,0.95)",
          width: 44,
          height: 44,
          "&:hover": { bgcolor: "#ffffff" },
        }}
      >
        <Box
          component="img"
          src={ASSETS.arrow}
          alt=""
          sx={{ width: 16, filter: "brightness(0)" }}
        />
      </IconButton>

      {/* "Timeline of Events" heading — animates up once on scroll into view */}
      <Box
        ref={titleRef}
        sx={{
          position: "relative",
          zIndex: 1,
          mb: { xs: 3, md: 4 },
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <Typography
          className="script-heading"
          sx={{
            fontFamily: "Mattiface, cursive",
            fontSize: { xs: "2rem", sm: "2.4rem", md: "7.8rem" },
          }}
        >
          Timeline of Events
        </Typography>
      </Box>

      {/* Current year + text — re-mounts on key change so CSS transition re-fires */}
      <Box
        key={animKey}
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 5, md: 0 },
          maxWidth: 800,
          width: "100%",
          "@keyframes slideUp": {
            from: { opacity: 0, transform: "translateY(60px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
          animation: "slideUp 0.6s ease forwards",
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Nunito-Bold, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "3rem", md: "8.5rem" },
            lineHeight: 1,
          }}
        >
          {current.year}
        </Typography>
        <Box
          sx={{
            width: "2px",
            height: 32,
            bgcolor: "var(--gold)",
            mx: "auto",
            my: 2,
          }}
        />
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Nunito-Regular, sans-serif",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
          }}
        >
          {current.text}
        </Typography>
      </Box>

      {/* Next year peek — sits below, partially visible, hinting there's more */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          mt: { xs: 4, md: 5 },
          pb: 0,
          textAlign: "center",
          opacity: 0.45,
        }}
      >
        <Box
          sx={{
            width: "2px",
            height: 40,
            bgcolor: "var(--gold)",
            mx: "auto",
            mb: 1,
          }}
        />
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Nunito-Bold, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.8rem" },
            lineHeight: 1,
          }}
        >
          {nextYear}
        </Typography>
      </Box>
    </Box>
  );
}

export default function OurHistory() {
  return (
    <Box component="main">
      <HistoryHero />
      <IntroSection />
      <QuoteSection />
      <TimelineSection />
    </Box>
  );
}
