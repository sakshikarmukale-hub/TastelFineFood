import React, { useState, useEffect  } from "react";
import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import logo from "../assets/Logo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const [activeMenu, setActiveMenu] = useState(null);

  const [innerBorder, setInnerBorder] = useState(null);

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    "Who We Are",
    "What We Do",
    "Our Products",
    "Innovation",
    "Sustainability",
    "Careers",
    "Contact Us",
  ];

  const LINE_WIDTH = "100%";

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* HEADER */}
     <AppBar
  position="fixed"
  elevation={0}
  sx={{
    background: {
      xs: "#355D89",
      md: "#355D89",
      lg: scrolled ? "#355D89" : "transparent",
    },
    borderBottom: {
      xs: "1px solid rgba(255,255,255,0.6)",
      md: "1px solid rgba(255,255,255,0.6)",
      lg: scrolled ? "1px solid rgba(255,255,255,0.6)" : "1px solid rgba(0,0,0,0.1)",
    },
    boxShadow: "none",
    zIndex: 1300,
    transition: "background 0.4s ease",
  }}
>
  <Toolbar
    sx={{
      height: {
        xs: "75px",
        md: "90px",
        lg: "95px",
      },
      px: 0,
      minHeight: "unset !important",
    }}
  >
    {/* MOBILE + IPAD HEADER */}
    <Box
      sx={{
        display: {
          xs: "flex",
          md: "flex",
          lg: "none",
        },
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* MENU / CLOSE ICON */}
      <IconButton
        onClick={() => setOpenMenu(!openMenu)}
        sx={{
          width: 55,
          height: 55,
          position: "relative",
          ml: {
            xs: 0,
            sm: 2,
            md: 3,
          },
          pl: {
            xs: 0.5,
            sm: 0,
          },
        }}
      >
        {/* TOP LINE */}
        <Box
          sx={{
            position: "absolute",
            width: 30,
            height: "2.5px",
            background: "#fff",
            borderRadius: "20px",
            transition: "all .45s ease",
            transform: openMenu ? "rotate(45deg)" : "rotate(0deg)",
            top: openMenu ? "50%" : 16,
          }}
        />

        {/* MIDDLE LINE */}
        <Box
          sx={{
            position: "absolute",
            width: 30,
            height: "2.5px",
            background: "#fff",
            borderRadius: "20px",
            transition: "all .3s ease",
            opacity: openMenu ? 0 : 1,
          }}
        />

        {/* BOTTOM LINE */}
        <Box
          sx={{
            position: "absolute",
            width: 30,
            height: "2.5px",
            background: "#fff",
            borderRadius: "20px",
            transition: "all .45s ease",
            transform: openMenu ? "rotate(-45deg)" : "rotate(0deg)",
            bottom: openMenu ? "50%" : 16,
          }}
        />
      </IconButton>

      {/* RIGHT LOGO */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          height: {
            xs: 48,
            sm: 55,
            md: 62,
          },
          objectFit: "contain",
          mr: {
            xs: 1,
            sm: 3,
            md: 4,
          },
        }}
      />
    </Box>

    {/* DESKTOP HEADER */}
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        justifyContent: "space-between",
        alignItems: "center",
        width: "92%",
        mx: "auto",
      }}
    >
      {/* LEFT LOGO */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          height: 65,
          objectFit: "contain",
        }}
      />

      {/* DESKTOP MENU */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {menuItems.map((item, index) => (
          <Box
            key={item}
            onMouseEnter={() => setHoveredMenu(index)}
            onMouseLeave={() => setHoveredMenu(null)}
            sx={{ position: "relative" }}
          >
            <Box
              onClick={() => {
                setActiveMenu(index);
                setTimeout(() => {
                  setActiveMenu(`inner-${index}`);
                }, 10);
              }}
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 0.5,
                py: 0,
                cursor: "pointer",
                border:
                  activeMenu === index || activeMenu === `inner-${index}`
                    ? `1px solid ${scrolled ? "#fff" : "#000"}`
                    : "1px solid transparent",
                borderRadius: "4px",
              }}
            >
              {/* INNER BORDER */}
              <Box
                sx={{
                  position: "absolute",
                  inset: "2px",
                  border:
                    activeMenu === `inner-${index}`
                      ? "1px solid #000"
                      : "1px solid transparent",
                  pointerEvents: "none",
                }}
              />
              <Typography
                sx={{
                  color: scrolled ? "#fff" : "#000",
                  fontSize: "15px",
                  fontFamily: "Segoe UI, Tahoma, sans-serif",
                  letterSpacing: "1.5",
                  position: "relative",
                  zIndex: 2,
                  transition: "color 0.4s ease",
                }}
              >
                {item}
              </Typography>
            </Box>

            {/* DROPDOWN FOR WHO WE ARE */}
            {item === "Who We Are" && hoveredMenu === index && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  mt: 0,
                  pt: 0.5,
                  background: "#355D89",
                  zIndex: 1400,
                  minWidth: "200px",
                }}
              >
                {["Our History", "Vision & Mission"].map((subItem, subIndex) => (
                  <Box
                    key={subItem}
                    onClick={() =>
                      setActiveSubMenu(
                        activeSubMenu === subIndex ? null : subIndex
                      )
                    }
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      border:
                        activeSubMenu === subIndex
                          ? "1.5px solid white"
                          : "1.5px solid transparent",
                      transition: "all .2s ease",
                    }}
                  >
                    {/* INNER BLACK BORDER */}
                    {activeSubMenu === subIndex && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "1px",
                          left: "1px",
                          right: "1px",
                          bottom: "1px",
                          border: "1.5px solid black",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "14px",
                        fontFamily: "Segoe UI, Tahoma, sans-serif",
                        px: 2,
                        py: 1.5,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      {subItem}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  </Toolbar>
</AppBar>

      {/* LEFT TO RIGHT MENU SCREEN */}
      <Box
        sx={{
          position: "fixed",
          top: {
            xs: "75px",
            md: "90px",
            lg: "95px",
          },

          left: 0,
          width: LINE_WIDTH,
          mx: "auto",

          height: {
            xs: "calc(100vh - 75px)",
            md: "calc(100vh - 90px)",
          },

          background: "#355D89",

          zIndex: 1200,

          transform: openMenu ? "translateX(0)" : "translateX(-100%)",

          transition: "transform 0.5s ease-in-out",

          overflowY: "auto",

          display: {
            xs: "block",
            lg: "none",
          },
        }}
      >
        <Box
          sx={{
            pt: 2,

            px: {
              xs: 0,
              sm: 4,
              md: 5,
            },

            display: "flex",

            flexDirection: "column",

            alignItems: {
              xs: "stretch",
              // sm: "center",
              // md: "center",
            },
          }}
        >
          {menuItems.map((item, index) => (
            <Box
              key={item}
              sx={{
                width: {
                  xs: "100%",
                  // sm: "320px",
                },
              }}
            >
              {/* MAIN BUTTON */}
              <Box
                onClick={() => {
                  setActiveMenu(index);

                  setInnerBorder(index);
                  setActiveSubMenu(null);

                  if (item === "Who We Are") {
                    setOpenSubMenu(!openSubMenu);
                  }
                }}
                sx={{
                  position: "relative",
                  width: "100%",
                  mx: "auto",
                  // maxWidth: "92%",

                  py: 0.8,

                  px: {
                    xs: 2,
                    sm: 0,
                  },

                  cursor: "pointer",

                  transition: "all .3s ease",

                  /* WHO WE ARE NO BORDER */
                  border:
                    item !== "Who We Are" && activeMenu === index
                      ? "1.5px solid white"
                      : "1.5px solid transparent",

                  boxSizing: "border-box",
                }}
              >
                {/* INNER BLACK BORDER */}
                {item !== "Who We Are" && innerBorder === index && (
                  <Box
                    sx={{
                      position: "absolute",

                      top: "1px",
                      left: "1px",

                      right: "1px",

                      bottom: "1px",

                      border: "1.5px solid black",

                      pointerEvents: "none",

                      transition: "all .08s ease",
                    }}
                  />
                )}

                {/* Button size */}
                <Typography
                  sx={{
                    color: "#fff",

                    fontSize: {
                      xs: "15px",
                      sm: "20px",
                      md: "18px",
                    },

                    fontFamily: "Segoe UI, Tahoma, sans-serif",

                    textTransform: "uppercase",

                    position: "relative",

                    zIndex: 2,

                    mt: "5px",
                    mb: "16px",
                  }}
                >
                  {item}
                </Typography>
              </Box>

              {/* WHITE LINE BELOW WHO WE ARE */}
              {item === "Who We Are" && (
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(255,255,255,0.8)",

                    width: "100%",
                    
                  }}
                />
              )}

              {/* SUB MENU */}
              {item === "Who We Are" && openSubMenu && (
                <Box
                  sx={{
                    width: LINE_WIDTH,
                    mt: 1,
                  }}
                >
                  {["Our History", "Vision & Mission"].map(
                    (subItem, subIndex) => (
                      <Box key={subItem}>
                        <Box
                          onClick={() =>
                            setActiveSubMenu(
                              activeSubMenu === subIndex ? null : subIndex,
                            )
                          }
                          sx={{
                            position: "relative",

                            width: "100%",
                            //  mx: "auto",
                            //  maxWidth: LINE_WIDTH,

                            cursor: "pointer",

                            border:
                              activeSubMenu === subIndex
                                ? "1.5px solid white"
                                : "1.5px solid transparent",

                            transition: "all .2s ease",
                          }}
                        >
                          {/* BLACK BORDER */}
                          {activeSubMenu === subIndex && (
                            <Box
                              sx={{
                                position: "absolute",

                                top: "1px",

                                left: "1px",

                                right: "1px",

                                bottom: "1px",

                                border: "1.5px solid black",

                                pointerEvents: "none",
                              }}
                            />
                          )}

                          <Typography
                            sx={{
                              color: "#fff",

                              fontSize: {
                                xs: "15px",
                                sm: "24px",
                                md: "18px",
                              },

                              fontFamily: "Segoe UI, Tahoma, sans-serif",

                              py: {
                                xs: 3,
                                sm: 4,
                              },

                              px: 2,
mx: "auto",
maxWidth: "100%",

                              textAlign: "left",

                              position: "relative",

                              zIndex: 2,
                            }}
                          >
                            {subItem}
                          </Typography>
                        </Box>

                        {/* SUBMENU LINE */}
                        <Box
                          sx={{
                            borderBottom: "1px solid rgba(255,255,255,0.8)",

                            width: "100%",
                           
                          }}
                        />
                      </Box>
                    ),
                  )}
                </Box>
              )}

              {/* OTHER MENU LINE */}
              {item !== "Who We Are" && (
                <Box
                  sx={{
                    borderBottom: "1px solid rgba(255,255,255,0.8)",

                    width:"100%",
                   
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* HEADER SPACE */}
      <Box
        sx={{
          height: {
            xs: "75px",
            md: "90px",
            lg: "95px",
          },
        }}
      />
    </>
  );
};

export default Header;
