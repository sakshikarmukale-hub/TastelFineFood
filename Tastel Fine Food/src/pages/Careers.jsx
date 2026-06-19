import { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import careerarrow from "../assets/careerarrow.png"
import careerbanner from "../assets/careerbanner.jpg"
import careerbg from "../assets/careerbg.jpg"
import careerdhaniya from "../assets/careerdhaniya.jpg"
import careerspun from "../assets/careerspun.png"
import careertamato from "../assets/careertamato.jpg"
import Dhaniya from "../assets/Dhaniya.png"
// Loads your Nunito + Mattiface @font-face rules.
// Adjust this path to wherever fonts.css actually sits in your project.
import "../styles/fonts.css";

const ASSETS = {
  banner: careerbanner,
  bg: careerbg ,
  greenLeaf: Dhaniya,
  haldi: careerdhaniya,
  shapeLine: careerarrow,
  rai: careerspun,
  // bottom-right decorative photo — this corner was empty before
  mission: careertamato,
};

const FIELDS = [
  { name: "fullName", label: "Full Name" },
  { name: "email", label: "Email" },
  { name: "department", label: "Department" },
  { name: "experience", label: "Years of experience" },
];

// Small inline "+" icon so we don't depend on @mui/icons-material
function PlusIcon({ size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

// Fires once when the element scrolls into view
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function CareersHero() {
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
        minHeight: { xs: 280, sm: 460, md: 440 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${ASSETS.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "transparent",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: 3,
          maxWidth: 900,
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Typography
          className="script-heading"
          sx={{
            fontFamily: "Mattiface, cursive",
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "7.2rem" },
          }}
        >
          Love food as much as we do?
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Nunito-Regular, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.04em",
            fontSize: { xs: "1.05rem", md: "1.5rem" },
            mt: 1,
          }}
        >
          You&rsquo;ll fit right in.
        </Typography>
      </Box>
    </Box>
  );
}

function ApplicationForm({ visible }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    experience: "",
  });
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const handleChange = (name) => (e) =>
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));

  const handleSubmit = () => {
    // Wire this up to your backend / form endpoint.
    console.log("Application submitted:", formData, { resume, coverLetter });
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 700,
        mx: "auto",
        bgcolor: "#ffffff",
        borderRadius: "30px",
        boxShadow: "0 18px 50px rgba(20,30,45,0.14)",
        px: { xs: 3, sm: 5, md: 6 },
        py: { xs: 4, md: 5.5 },
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(60px)",
        transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
      }}
    >
      <Stack spacing={3.5}>
        {FIELDS.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            variant="standard"
            fullWidth
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            InputLabelProps={{
              sx: {
                fontFamily: "Nunito-Regular, sans-serif",
                color: "var(--text-muted)",
                fontSize: "1.05rem",
                "&.MuiInputLabel-shrink": { fontSize: "0.85rem" },
              },
            }}
            InputProps={{
              sx: { fontFamily: "Nunito-Regular, sans-serif" },
            }}
            sx={{
              "& .MuiInput-underline:before": { borderBottomColor: "var(--border-soft)" },
              "& .MuiInput-underline:after": { borderBottomColor: "var(--gold)" },
            }}
          />
        ))}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} pt={1}>
          <Button
            component="label"
            variant="outlined"
            endIcon={<PlusIcon size={18} />}
            sx={{
              borderRadius: "999px",
              borderColor: "var(--border-soft)",
              color: "var(--text-dark)",
              textTransform: "none",
              fontFamily: "Nunito-Regular, sans-serif",
              px: 3,
              py: 1,
              flex: 1,
              justifyContent: "space-between",
              "&:hover": { borderColor: "var(--gold)", color: "var(--gold)" },
            }}
          >
            Attach resume
            <input
              type="file"
              hidden
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            />
          </Button>
          <Button
            component="label"
            variant="outlined"
            endIcon={<PlusIcon size={18} />}
            sx={{
              borderRadius: "999px",
              borderColor: "var(--border-soft)",
              color: "var(--text-dark)",
              textTransform: "none",
              fontFamily: "Nunito-Regular, sans-serif",
              px: 3,
              py: 1,
              flex: 1,
              justifyContent: "space-between",
              "&:hover": { borderColor: "var(--gold)", color: "var(--gold)" },
            }}
          >
            Attach cover letter
            <input
              type="file"
              hidden
              onChange={(e) => setCoverLetter(e.target.files?.[0] ?? null)}
            />
          </Button>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }} pt={1}>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  bgcolor: "var(--navy)",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontFamily: "Nunito-SemiBold, sans-serif",
                  fontWeight: 500,
                  px: 4,
                  py: 1.1,
                  "&:hover": { bgcolor: "var(--navy-deep)" },
                }}
              >
                Send
              </Button>
            </Box>
      </Stack>
    </Box>
  );
}

function ContactSection() {
  const [sectionRef, inView] = useInView(0.12);

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundImage: `url(${ASSETS.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundColor: "var(--bg-cream)",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Decorative imagery — hidden on small screens, fades in with a stagger once in view */}
      <Box
        component="img"
        src={ASSETS.greenLeaf}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 60, lg: 90 },
          left: { md: -20, lg: 20 },
          width: { md: 120, lg: 150 },
          opacity: inView ? 0.95 : 0,
          transition: "opacity 1s ease 0.3s",
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.shapeLine}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 210, lg: 250 },
          right: { md: "18%", lg: "20%" },
          width: { md: 150, lg: 190 },
          opacity: inView ? 0.9 : 0,
          transition: "opacity 1s ease 0.6s",
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.haldi}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 90, lg: 120 },
          right: { md: -10, lg: 30 },
          width: { md: 190, lg: 230 },
          opacity: inView ? 0.95 : 0,
          transition: "opacity 1s ease 0.9s",
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.rai}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { md: 30, lg: 60 },
          left: { md: -30, lg: 10 },
          width: { md: 180, lg: 220 },
          opacity: inView ? 0.95 : 0,
          transition: "opacity 1s ease 1.2s",
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.mission}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { md: 30, lg: 60 },
          right: { md: -30, lg: 10 },
          width: { md: 180, lg: 220 },
          opacity: inView ? 0.95 : 0,
          transition: "opacity 1s ease 1.5s",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: 2,
          mb: { xs: 5, md: 7 },
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <Typography
          className="script-heading"
          sx={{ fontFamily: "Mattiface, cursive", fontSize: { xs: "2.1rem", sm: "2.6rem", md: "6.2rem" } }}
        >
          Drop us a line at
        </Typography>
        <Typography
          component="a"
          href="mailto:careers@tastelfinefood.com"
          sx={{
            display: "block",
            color: "var(--blue-link)",
            fontFamily: "Nunito-SemiBold, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            mt: 1,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          info@tastelfinefood.com
        </Typography>
        <Typography
          sx={{
            fontFamily: "Nunito-Regular, sans-serif",
            color: "var(--text-dark)",
            mt: 1,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
          }}
        >
          or fill the form below.
        </Typography>
      </Box>

      <Box sx={{ position: "relative", zIndex: 1, px: { xs: 2, sm: 3 } }}>
        <ApplicationForm visible={inView} />
      </Box>
    </Box>
  );
}

export default function Careers() {
  return (
    <Box component="main" sx={{ pt: { xs: 0, md: 0 } }}>
      <CareersHero />
      <ContactSection />
    </Box>
  );
}