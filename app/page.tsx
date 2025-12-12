import { Box, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "80vh",                 // full screen height
        display: "flex",
        justifyContent: "center",           // horizontal centering
        alignItems: "center",               // vertical centering
        bgcolor: "zinc.50",
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        textAlign={{ xs: "center", md: "left" }}
        gap={4}
      >
        {/* Avatar */}
        <Avatar
          src="/passportpic.jpg"
          sx={{
            width: 200,
            height: 200,
            boxShadow: 3,
          }}
        />

        {/* Text Section */}
        <Box>
          <Typography variant="h4">Hello, I'm</Typography>
          <Typography variant="h3" fontWeight="bold">
            Yuvraj Singh
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Technical Delivery Lead (React.js) | PMP® | CSM®
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={3}
            justifyContent={{ xs: "center", md: "flex-start" }}
            flexWrap="wrap"
          >
            <Button
              variant="contained"
              size="large"
              component="a"
              href="/Yuvraj_Singh.pdf"
              download
            >
              Download CV
            </Button>

            <IconButton
              color="primary"
              component="a"
              href="https://www.linkedin.com/in/yuvraj-singh-ui/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              color="primary"
              component="a"
              href="https://github.com/yuvrajrana"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
