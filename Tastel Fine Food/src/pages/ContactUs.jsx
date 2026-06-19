import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import contactbg from "../assets/contactbg.jpg";
import contactchatni from "../assets/contactchatni.png";
import contactdown from "../assets/contactdown.jpg";
import contactFrom from "../assets/contactFrom.jpg";
import contactlavang from "../assets/contactlavang.jpg";
import contactleaf from "../assets/contactleaf.jpg";
import contactleaf2 from "../assets/contactleaf2.jpg";
import contactspun from "../assets/contactspun.jpg";
import phone from "../assets/phone.png";
import pin from "../assets/pin.png";
import gmail from "../assets/gmail.png";
// Same fonts.css as the Careers page — adjust path to match your project structure.
import "../styles/fonts.css";

const ASSETS = {
  banner: contactbg,
  bg: contactdown,
  twigs: contactlavang,
  spoonSpice: contactspun,
  rosemary: contactleaf,
  bayLeaf: contactleaf2,
  bowl: contactchatni,
  bigPhoto: contactFrom,
  pin: pin,
  phone: phone,
  mail: gmail,
};

const FIELDS = [
  { name: "fullName", label: "Full Name", multiline: false },
  { name: "email", label: "Email Address", multiline: false },
  { name: "company", label: "Company", multiline: false },
  { name: "message", label: "Message", multiline: true },
];

// Fires once a ref'd element scrolls into view
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

function ContactHero() {
  const [headingRef, headingVisible] = useReveal(0.1);

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
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "transparent",
        }}
      />
      <Typography
        ref={headingRef}
        className="script-heading"
        sx={{
          position: "relative",
          zIndex: 1,
          fontFamily: "Mattiface, cursive",
          fontSize: { xs: "2.6rem", sm: "3.4rem", md: "7.4rem" },
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        Let&rsquo;s talk!
      </Typography>
    </Box>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (name) => (e) =>
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));

  const handleSubmit = () => {
    // Wire this up to your backend / form endpoint.
    console.log("Contact form submitted:", formData);
  };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: 640,
        bgcolor: "#ffffff",
        borderRadius: "30px",
        boxShadow: "0 18px 50px rgba(20,30,45,0.14)",
        px: { xs: 3, sm: 5 },
        py: { xs: 4, md: 4.5 },
      }}
    >
      <Stack spacing={1.5}>
        {FIELDS.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            variant="standard"
            fullWidth
            multiline={field.multiline}
            minRows={field.multiline ? 1 : undefined}
            maxRows={field.multiline ? 4 : undefined}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
            InputLabelProps={{
              shrink: true,
              sx: {
                fontFamily: "Nunito-Regular, sans-serif",
                color: "var(--text-muted)",
                fontSize: "0.95rem",
              },
            }}
            InputProps={{
              sx: { fontFamily: "Nunito-Regular, sans-serif" },
            }}
            sx={{
              "& .MuiInput-underline:before": {
                borderBottomColor: "var(--border-soft)",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "var(--gold)",
              },
            }}
          />
        ))}

        <Box
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          pt={1}
        >
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              bgcolor: "var(--navy)",
              borderRadius: "999px",
              textTransform: "none",
              fontFamily: "Nunito-SemiBold, sans-serif",
              fontWeight: 500,
              px: 6,
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

function ContactFormSection() {
  const [rowRef, rowVisible] = useReveal(0.15);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      {/* Decorative imagery — hidden on small screens to avoid clutter */}
      <Box
        component="img"
        src={ASSETS.twigs}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 20, lg: 30 },
          right: { md: "6%", lg: "10%" },
          width: { md: 90, lg: 110 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.spoonSpice}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { md: 40, lg: 60 },
          left: { md: -20, lg: 10 },
          width: { md: 120, lg: 145 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />

      <Box
        ref={rowRef}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1400,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: 0,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            flex: 1,
            position: "relative",
            zIndex: 2,
            opacity: rowVisible ? 1 : 0,
            mr: { md: -10 },
            mt: { md: 25 },
            transform: {
              xs: rowVisible ? "translateY(0)" : "translateY(30px)",
              md: rowVisible ? "translateX(0)" : "translateX(-90px)",
            },
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <ContactForm />
        </Box>
        <Box
          component="img"
          src={ASSETS.bigPhoto}
          alt="Chopping fresh herbs"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: { xs: 500, md: 520 },
            borderRadius: "20px",
            objectFit: "cover",
            opacity: rowVisible ? 1 : 0,
            mt: { md: 15 },
            transform: {
              xs: rowVisible ? "translateY(0)" : "translateY(30px)",
              md: rowVisible ? "translateX(0)" : "translateX(90px)",
            },
            transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          }}
        />
      </Box>
    </Box>
  );
}

function OfficeColumn({ heading, lines, phone, email }) {
  return (
    <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: 260 } }}>
      <Typography
        sx={{
          color: "var(--blue-link)",
          fontFamily: "Nunito-Bold, sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          mb: 2.5,
        }}
      >
        {heading}
      </Typography>
      <Stack spacing={2}>
        {lines.map((line, i) =>
          i === 0 ? (
            <Typography
              key={i}
              sx={{
                fontFamily: "Nunito-SemiBold, sans-serif",
                color: "var(--text-dark)",
              }}
            >
              {line}
            </Typography>
          ) : (
            <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
              <Box
                component="img"
                src={ASSETS.pin}
                alt=""
                sx={{ width: 16, height: 16, mt: "4px" }}
              />
              <Typography
                sx={{
                  fontFamily: "Nunito-Regular, sans-serif",
                  color: "var(--text-dark)",
                  whiteSpace: "pre-line",
                  lineHeight: 1.7,
                }}
              >
                {line}
              </Typography>
            </Box>
          ),
        )}
        {phone && (
          <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
            <Box
              component="img"
              src={ASSETS.phone}
              alt=""
              sx={{ width: 16, height: 16 }}
            />
            <Typography
              component="a"
              href={`tel:${phone}`}
              sx={{
                fontFamily: "Nunito-Regular, sans-serif",
                color: "var(--text-dark)",
              }}
            >
              {phone}
            </Typography>
          </Box>
        )}
        {email && (
          <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
            <Box
              component="img"
              src={ASSETS.mail}
              alt=""
              sx={{ width: 16, height: 16 }}
            />
            <Typography
              component="a"
              href={`mailto:${email}`}
              sx={{
                fontFamily: "Nunito-Regular, sans-serif",
                color: "var(--text-dark)",
              }}
            >
              {email}
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

function VisitUsSection() {
  const [headingRef, headingVisible] = useReveal(0.15);
  const [columnsRef, columnsVisible] = useReveal(0.1);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      {/* Decorative imagery — hidden on small screens to avoid clutter */}
      <Box
        component="img"
        src={ASSETS.bayLeaf}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { md: 30, lg: 50 },
          right: { md: "6%", lg: "9%" },
          width: { md: 80, lg: 95 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.rosemary}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { md: 60, lg: 90 },
          left: { md: -20, lg: 20 },
          width: { md: 150, lg: 180 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />
      <Box
        component="img"
        src={ASSETS.bowl}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: { md: 20, lg: 40 },
          right: { md: "6%", lg: "10%" },
          width: { md: 110, lg: 130 },
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />

      <Box
        ref={headingRef}
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: 2,
          mb: { xs: 5, md: 7 },
          opacity: headingVisible ? 1 : 0,
          transform: headingVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <Typography
          className="script-heading"
          sx={{
            fontFamily: "Mattiface, cursive",
            fontSize: { xs: "2.1rem", sm: "2.6rem", md: "6.2rem" },
          }}
        >
          You can also choose to visit us
        </Typography>
        <Typography
          sx={{
            fontFamily: "Nunito-SemiBold, sans-serif",
            color: "var(--blue-link)",
            mt: 1,
            fontSize: { xs: "0.95rem", md: "2.05rem" },
          }}
        >
          or drop an email.
        </Typography>
      </Box>

      <Box
        ref={columnsRef}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 5, sm: 6 },
          px: { xs: 3, sm: 4 },
          opacity: columnsVisible ? 1 : 0,
          transform: columnsVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
        }}
      >
        <OfficeColumn
          heading="Head Office"
          lines={[
            "Tastel Fine Food Pvt. Ltd.",
            "5th Floor ; GYS Infinity,\n19-20 ; Netaji Subhash Road,\nVile Parle East ;\nMumbai,-400057\nMaharastra. INDIA",
          ]}
          phone="+91 22 42080050"
          email="info@tastelfinefood.com"
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", sm: "block" } }}
        />
        <OfficeColumn
          heading="Factory Address"
          lines={[
            "KARAD",
            "Gut Number 710, 788, at Post Surli,\nKarad Vita Road, Taluka Karad,\nDistrict Satara : 415105\nMaharashtra.",
          ]}
        />
      </Box>
    </Box>
  );
}

export default function ContactUs() {
  return (
    <Box component="main">
      <ContactHero />
      <Box
        sx={{
          backgroundImage: `url(${ASSETS.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "var(--bg-cream)",
          // gap below the hero — raise/lower these to taste
          mt: { xs: 4, md: 8 },
        }}
      >
        <ContactFormSection />
        <VisitUsSection />
      </Box>
    </Box>
  );
}
