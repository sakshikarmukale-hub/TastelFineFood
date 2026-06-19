import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import footerBg from "../assets/our_bg.png";
import logoImg from "../assets/download.png";
import facebookImg from "../assets/facebook.png";
import linkedinImg from "../assets/linkedin.png";

import brochurePdf from "../assets/brochure.pdf";

function Footer() {
  const navigate = useNavigate();

  return (
    <Box sx={{ m: 0, p: 0 }}>
      <Box
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          pt: { xs: 5, md: 6 },
          pb: { xs: 5, md: 8 },
          px: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 10,
            xl: 15,
          },
          fontFamily: "Nunito-SemiBold",
          overflowX: "hidden",
          "& .MuiTypography-root": {
            fontFamily: "Nunito-SemiBold",
            letterSpacing: "1.5px",
          },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1100px", mx: "auto" }}>
          {/* Top gold divider */}
          <Box sx={{ borderTop: "1px solid #d4b16a", pt: { xs: 4, md: 6 } }}>
            {/* ── DESKTOP / TABLET ROW ── */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: { sm: 2, md: 3, lg: 5 },
                mb: 4,
                width: "100%",
              }}
            >
              {/* Who We Are */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: "#0a0808",
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
                  onClick={() => navigate("/our-history")}
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
                  onClick={() => navigate("/vision-mission")}
                >
                  Vision & Mission
                </Typography>
              </Box>

              {/* What We Do */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    color: "#0a0808",
                    mb: 1,
                  }}
                  onClick={() => navigate("/what-we-do")}
                >
                  What We Do
                </Typography>
                <Typography
                  sx={{
                    color: "#0a0808",
                    cursor: "pointer",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/our-products")}
                >
                  Our Products
                </Typography>
              </Box>

              {/* Innovation */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    color: "#0a0808",
                    mb: 1,
                  }}
                  onClick={() => navigate("/innovation")}
                >
                  Innovation
                </Typography>
                <Typography
                  sx={{
                    color: "#0a0808",
                    cursor: "pointer",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/sustainability")}
                >
                  Sustainability
                </Typography>
              </Box>

              {/* Careers */}
              <Box sx={{ minWidth: 0, flexShrink: 1 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    color: "#0a0808",
                    mb: 1,
                  }}
                  onClick={() => navigate("/careers")}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{
                    color: "#0a0808",
                    cursor: "pointer",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </Typography>
              </Box>

              {/* Download Brochure */}
              <Box
                component="a"
                href={brochurePdf}
                download="Tastel_Brochure.pdf"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={logoImg}
                  alt="Download"
                  sx={{
                    width: { sm: 32, md: 40 },
                    height: { sm: 32, md: 40 },
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0a0808",
                  }}
                >
                  Download Brochure
                </Typography>
              </Box>

              {/* Follow us on */}
              <Box sx={{ minWidth: 0, flexShrink: 0 }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    color: "#0a0808",
                  }}
                >
                  Follow us on
                </Typography>
                <Box sx={{ display: "flex", gap: 0, alignItems: "center" }}>
                  <IconButton
                    disableRipple
                    sx={{
                      width: { sm: 36, md: 45 },
                      height: { sm: 36, md: 45 },
                      p: 0,
                      minWidth: 0,
                      cursor: "pointer",
                      borderRadius: 0,
                    }}
                    onClick={() =>
                      window.open("https://www.facebook.com/", "_blank")
                    }
                  >
                    <Box
                      component="img"
                      src={facebookImg}
                      alt="Facebook"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </IconButton>

                  <IconButton
                    disableRipple
                    sx={{
                      width: { sm: 36, md: 45 },
                      height: { sm: 36, md: 45 },
                      p: 0,
                      minWidth: 0,
                      cursor: "pointer",
                      borderRadius: 0,
                    }}
                    onClick={() =>
                      window.open("https://www.linkedin.com/", "_blank")
                    }
                  >
                    <Box
                      component="img"
                      src={linkedinImg}
                      alt="LinkedIn"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>

            {/* ── MOBILE GRID ── */}
            <Box
              sx={{
                display: { xs: "grid", sm: "none" },
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                mb: 4,
              }}
            >
              {/* Who We Are */}
              <Box>
                <Typography sx={{ fontWeight: 600, color: "#0a0808", mb: 1 }}>
                  Who We Are
                </Typography>
                <Typography
                  sx={{
                    color: "#6e6e6e",
                    fontWeight: 300,
                    cursor: "pointer",
                    mb: 0.5,
                  }}
                  onClick={() => navigate("/our-history")}
                >
                  Our History
                </Typography>
                <Typography
                  sx={{ color: "#6e6e6e", fontWeight: 300, cursor: "pointer" }}
                  onClick={() => navigate("/vision-mission")}
                >
                  Vision & Mission
                </Typography>
              </Box>

              {/* What We Do */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#30a080833",
                    mb: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/what-we-do")}
                >
                  What We Do
                </Typography>
                <Typography
                  sx={{ color: "#0a0808", fontWeight: 600, cursor: "pointer" }}
                  onClick={() => navigate("/our-products")}
                >
                  Our Products
                </Typography>
              </Box>

              {/* Innovation */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0a0808",
                    mb: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/innovation")}
                >
                  Innovation
                </Typography>
                <Typography
                  sx={{ color: "#0a0808", fontWeight: 600, cursor: "pointer" }}
                  onClick={() => navigate("/sustainability")}
                >
                  Sustainability
                </Typography>
              </Box>

              {/* Careers */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0a0808",
                    mb: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/careers")}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{ color: "#0a0808", fontWeight: 600, cursor: "pointer" }}
                  onClick={() => navigate("/contact-us")}
                >
                  Contact Us
                </Typography>
              </Box>

              {/* Download Brochure — full width */}
              <Box
                component="a"
                href={brochurePdf}
                download="Tastel_Brochure.pdf"
                sx={{
                  gridColumn: "1 / -1",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  src={logoImg}
                  alt="Download"
                  sx={{ width: 40, height: 40 }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#0a0808",
                  }}
                >
                  Download Brochure
                </Typography>
              </Box>

              {/* Follow us on — full width */}
              <Box sx={{ gridColumn: "1 / -1" }}>
                <Typography sx={{ fontWeight: 600, color: "#0a0808", mb: 1 }}>
                  Follow us on
                </Typography>
                <Box sx={{ display: "flex", gap: 0, alignItems: "center" }}>
                  <IconButton
                    disableRipple
                    sx={{
                      width: { sm: 36, md: 50 },
                      height: { sm: 36, md: 50 },
                      p: 0,
                      minWidth: 0,
                      cursor: "pointer",
                      borderRadius: 0,
                    }}
                    onClick={() =>
                      window.open("https://www.facebook.com/", "_blank")
                    }
                  >
                    <Box
                      component="img"
                      src={facebookImg}
                      alt="Facebook"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </IconButton>

                  <IconButton
                    disableRipple
                    sx={{
                      width: { sm: 36, md: 50 },
                      height: { sm: 36, md: 50 },
                      p: 0,
                      minWidth: 0,
                      cursor: "pointer",
                      borderRadius: 0,
                    }}
                    onClick={() =>
                      window.open("https://www.linkedin.com/", "_blank")
                    }
                  >
                    <Box
                      component="img"
                      src={linkedinImg}
                      alt="LinkedIn"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Gold divider */}
          <Box sx={{ borderTop: "1px solid #d4b16a", my: { xs: 3, md: 5 } }} />

          {/* Bottom row — copyright + logo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: { xs: "center", md: "left" },
              minWidth: "200px",
              gap: 2,
            }}
          >
            <Typography
              sx={{ color: "#6e6e6e", fontSize: { xs: "13px", md: "14px" } }}
            >
              Copyright © Tastel Designed By Fierce Hound
            </Typography>

            {/* MADE BY ting logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                    alignSelf: "flex-end",
                  }}
                >
                  BY
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontFamily: "Nunito-SemiBold",
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
  );
}

export default Footer;
