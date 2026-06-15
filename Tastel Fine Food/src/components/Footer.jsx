import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router-dom";

import footerBg from "../assets/our_bg.png";

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pt: { xs: 5, md: 6 },
          pb: { xs: 5, md: 8 },
          px: { xs: 2, sm: 4, md: 8 },
          fontFamily: "Segoe UI, Tahoma, sans-serif",
          overflowX: "hidden",
          "& .MuiTypography-root": {
            fontFamily: "Segoe UI, Tahoma, sans-serif",
            letterSpacing: "1.5px",
          },
        }}
      >
        <Box sx={{ width: "85%", mx: "auto", boxSizing: "border-box" }}>
          <Box sx={{ borderTop: "1px solid #d4b16a", pt: { xs: 4, md: 6 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "nowrap",                // ✅ no wrapping
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: { xs: 3, sm: 1.5, md: 2, lg: 5 },
                mb: 4,
                width: "100%",
                boxSizing: "border-box",
                overflowX: "hidden",               // ✅ no scrollbar on tablet
              }}
            >
              {/* Who We Are */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>  {/* ✅ minWidth: 0 */}
                <Typography sx={{ fontWeight: 500, mb: 1, color: "#333", whiteSpace: "nowrap" }}>
                  Who We Are
                </Typography>
                <Typography
                  sx={{ color: "#6e6e6e", cursor: "pointer", fontWeight: 300, whiteSpace: "nowrap" }}
                  onClick={() => navigate("/#")}
                >
                  Our History
                </Typography>
                <Typography
                  sx={{ color: "#6e6e6e", cursor: "pointer", fontWeight: 300, whiteSpace: "nowrap" }}
                  onClick={() => navigate("/#")}
                >
                  Vision & Mission
                </Typography>
              </Box>

              {/* What We Do */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>  {/* ✅ */}
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  onClick={() => navigate("/#")}
                >
                  What We Do
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  color="text.secondary"
                  onClick={() => navigate("/#")}
                >
                  Our Products
                </Typography>
              </Box>

              {/* Innovation */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>  {/* ✅ */}
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  onClick={() => navigate("/#")}
                >
                  Innovation
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  color="text.secondary"
                  onClick={() => navigate("/#")}
                >
                  Sustainability
                </Typography>
              </Box>

              {/* Careers */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>  {/* ✅ */}
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  onClick={() => navigate("/#")}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{ fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
                  color="text.secondary"
                  onClick={() => navigate("/#")}
                >
                  Contact Us
                </Typography>
              </Box>

             {/* Download Brochure */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 0.75,
    minWidth: 0,
    flexShrink: 1,
    cursor: "pointer",
  }}
>
  <DownloadIcon
    sx={{
      bgcolor: "#337ab7",
      color: "#fff",
      borderRadius: "50%",
      p: 0.4,                              // ✅ smaller padding
      fontSize: { xs: 18, sm: 18, md: 20 }, // ✅ was 30-32, now tiny
      flexShrink: 0,
    }}
  />
  <Typography sx={{ fontWeight: 600, whiteSpace: "nowrap", fontSize: { xs: "11px", sm: "11px", md: "13px" } }}>
    Download Brochure
  </Typography>
</Box>

{/* Follow us on */}
<Box sx={{ minWidth: 0, flexShrink: 0 }}>
  <Typography sx={{ mb: 0.5, fontWeight: 600, whiteSpace: "nowrap", fontSize: { xs: "11px", sm: "11px", md: "13px" } }}>
    Follow us on
  </Typography>
  <Box sx={{ display: "flex", gap: 0.75 }}>
    <IconButton
      disableRipple
      sx={{
        width: { xs: 26, sm: 26, md: 28 },   // ✅ was 48/36/48
        height: { xs: 26, sm: 26, md: 28 },
        bgcolor: "#d5b06d",
        color: "#fff",
        "&:hover": { bgcolor: "#d5b06d" },
      }}
      onClick={() => window.open("https://www.facebook.com/", "_blank")}
    >
      <FacebookIcon sx={{ fontSize: { xs: 14, sm: 14, md: 16 } }} />  {/* ✅ was 24/18/24 */}
    </IconButton>
    <IconButton
      disableRipple
      sx={{
        width: { xs: 26, sm: 26, md: 28 },
        height: { xs: 26, sm: 26, md: 28 },
        bgcolor: "#d5b06d",
        color: "#fff",
        "&:hover": { bgcolor: "#d5b06d" },
      }}
      onClick={() => window.open("https://www.linkedin.com/", "_blank")}
    >
      <LinkedInIcon sx={{ fontSize: { xs: 14, sm: 14, md: 16 } }} />
    </IconButton>
  </Box>
</Box>
            </Box>
          </Box>

          <Box sx={{ borderTop: "1px solid #d4b16a", my: 5, boxSizing: "border-box" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "center",
              gap: 2,
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography sx={{ color: "#6e6e6e" }}>
              Copyright © Tastel Designed By Fierce Hound
            </Typography>
            <Typography sx={{ fontWeight: 700, letterSpacing: 1 }}>
              MADE BY ting
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;