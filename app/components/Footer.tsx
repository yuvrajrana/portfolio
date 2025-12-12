import React from "react";
import { Box, Container, Typography, Link, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: "#000",
        py: 2,
        mt: "auto",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",   // ← Top shadow
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          {/* Left: Copyright */}
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Yuvraj Singh. All rights reserved.
          </Typography>

          {/* Right: Contact Links */}
          <Stack direction="row" spacing={2} flexWrap="nowrap">
            <Link
              href="mailto:yuvraj_raj87@yahoo.co.in"
              color="inherit"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <EmailIcon fontSize="small" />{" "}
              <Typography variant="body1">Email</Typography>
            </Link>

            <Link
              href="https://www.linkedin.com/in/yuvraj-singh-ui/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              underline="hover"
              sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
            >
              <LinkedInIcon fontSize="small" />{" "}
              <Typography variant="body1">LinkedIn</Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
