'use client';

import React, { useState } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { styled } from "@mui/material/styles";

const NavbarBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const HamburgerOrClose = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Printer Support", path: "/PrinterSupport" },
    { name: "Contact", path: "/contact" },
    { name: "Signup", path: "/signup" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#e5097f",
          color: "white",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "1.5rem",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Events Management
          </Typography>
        </Box>
        <NavbarBox>
          {navLinks.map((item, index) => (
            <Typography
              key={index}
              component={Link}
              href={item.path}
              sx={{
                margin: "0 1rem",
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
                "&:hover": { color: "#ff69b4" },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </NavbarBox>
        <HamburgerOrClose>
          <IconButton onClick={toggleMenu} sx={{ color: "white", fontSize: "1.5rem" }}>
            <MenuIcon />
          </IconButton>
        </HamburgerOrClose>
      </Box>

      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
        <Box sx={{ width: 250, padding: "1rem", backgroundColor: "#e5097f", height: "100%", color: "white" }}>
          <IconButton onClick={toggleMenu} sx={{ color: "white", fontSize: "1.5rem" }}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((item, index) => (
              <ListItem button key={index} component={Link} href={item.path} onClick={toggleMenu}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontSize: "20px", color: "white", textAlign: "center" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
