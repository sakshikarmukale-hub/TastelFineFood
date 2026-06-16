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
    <Box sx={{ m:0, p:0, backgroundColor: "#fff" }}> 
      <Box
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pt: { xs: 5, md: 6 },
          pb: { xs: 5, md: 8 },
          px: {
            xs: 2, // Mobile = 16px
            sm: 3, // Small tablet = 24px
            md: 5, // Tablet = 40px
            lg: 10, // Laptop = 80px
            xl: 15, // Large screen = 120px
          },
          fontFamily: "Segoe UI, Tahoma, sans-serif",
          overflowX: "hidden",
          "& .MuiTypography-root": {
            fontFamily: "Segoe UI, Tahoma, sans-serif",
            letterSpacing: "1.5px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          <Box sx={{ borderTop: "1px solid #d4b16a", pt: { xs: 4, md: 6 } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                flexWrap: "nowrap", 
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: { xs: 3, sm: 1.5, md: 2, lg: 5 },
                mb: 4,
                width: "100%",
                boxSizing: "border-box",
                overflowX: "hidden", 
              }}
            >
              {/* Who We Are */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                {" "}
                {/* ✅ minWidth: 0 */}
                <Typography
                  sx={{
                    fontWeight: 500,
                    mb: 1,
                    color: "#333",
                    whiteSpace: "nowrap",
                  }}
                >
                  Who We Are
                </Typography>
                <Typography
                  sx={{
                    color: "#6e6e6e",
                    cursor: "pointer",
                    fontWeight: 300,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/#")}
                >
                  Our History
                </Typography>
                <Typography
                  sx={{
                    color: "#6e6e6e",
                    cursor: "pointer",
                    fontWeight: 300,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/#")}
                >
                  Vision & Mission
                </Typography>
              </Box>

              {/* What We Do */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                {" "}
                {/* ✅ */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/#")}
                >
                  What We Do
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  color="text.secondary"
                  onClick={() => navigate("/#")}
                >
                  Our Products
                </Typography>
              </Box>

              {/* Innovation */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                {" "}
                {/* ✅ */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/#")}
                >
                  Innovation
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  color="text.secondary"
                  onClick={() => navigate("/#")}
                >
                  Sustainability
                </Typography>
              </Box>

              {/* Careers */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                {" "}
                {/* ✅ */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/#")}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
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
                  gap: 1,
                  minWidth: 0, // ✅
                  flexShrink: 1,
                  cursor: "pointer",
                }}
              >
                <DownloadIcon
                  sx={{
                    bgcolor: "#337ab7",
                    color: "#fff",
                    borderRadius: "50%",
                    p: 1,
                    fontSize: { xs: 30, sm: 32, md: 30 },
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
                  Download Brochure
                </Typography>
              </Box>

              {/* Follow us on */}
              <Box sx={{ minWidth: 0, flexShrink: 0 }}>
                {" "}
                {/* ✅ */}
                <Typography
                  sx={{ mb: 1, fontWeight: 600, whiteSpace: "nowrap" }}
                >
                  Follow us on
                </Typography>
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  <IconButton
                    disableRipple
                    sx={{
                      width: { xs: 48, sm: 36, md: 48 },
                      height: { xs: 48, sm: 36, md: 48 },
                      bgcolor: "#d5b06d",
                      color: "#fff",
                      "&:hover": { bgcolor: "#d5b06d" },
                    }}
                    onClick={() =>
                      window.open("https://www.facebook.com/", "_blank")
                    }
                  >
                    <FacebookIcon
                      sx={{ fontSize: { xs: 24, sm: 18, md: 24 } }}
                    />
                  </IconButton>
                  <IconButton
                    disableRipple
                    sx={{
                      width: { xs: 48, sm: 36, md: 48 },
                      height: { xs: 48, sm: 36, md: 48 },
                      bgcolor: "#d5b06d",
                      color: "#fff",
                      "&:hover": { bgcolor: "#d5b06d" },
                    }}
                    onClick={() =>
                      window.open("https://www.linkedin.com/", "_blank")
                    }
                  >
                    <LinkedInIcon
                      sx={{ fontSize: { xs: 24, sm: 18, md: 24 } }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              borderTop: "1px solid #d4b16a",
              my: 5,
              boxSizing: "border-box",
            }}
          />

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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                fontFamily: "Segoe UI, Tahoma, sans-serif",
              }}
            >
              {/* MADE / BY */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#d4b16a",
                    color: "#fff",
                    px: 1,
                    py: 0.3,
                    fontSize: "10px",
                    fontWeight: 600,
                    borderRadius: "2px",
                    textAlign: "center",
                  }}
                >
                  MADE
                </Box>

                <Box
                  sx={{
                    bgcolor: "#d4b16a",
                    color: "#fff",
                    px: 1,
                    py: 0.3,
                    fontSize: "10px",
                    fontWeight: 600,
                    borderRadius: "2px",
                    textAlign: "center",
                    width: "fit-content",
                    minWidth: "fit-content",
                    alignSelf: "flex-end",
                  }}
                >
                  BY
                </Box>
              </Box>

              {/* ting */}
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontFamily: "Segoe UI, Tahoma, sans-serif",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#000",
                }}
              >
                ting
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
}

export default Footer;
