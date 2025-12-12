"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          py: 0,
          mt: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            key={"Yuvraj Singh"}
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <Typography variant="h5">Yuvraj Singh</Typography>
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((nav: NavLink) => (
              <Link
                key={nav.label}
                href={nav.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="body1">{nav.label}</Typography>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile) */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((nav: NavLink) => (
              <ListItem key={nav.href} disablePadding>
                <ListItemButton onClick={toggleDrawer(false)}>
                  <Link
                    key={nav.label}
                    href={nav.href}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    {nav.label}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

    
      <Toolbar />
    </>
  );
}
