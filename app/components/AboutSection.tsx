import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function AboutMe() {
  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Grid container spacing={4} alignItems="center">
      
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: { xs: 120, sm: 150, md: 200 },
              height: { xs: 120, sm: 150, md: 200 },
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff", 
            }}
          >
            <Image
              src="/passportpic.jpg"
              alt="Developer"
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>

        
        <Grid
          xs={12}
          md={8}
          sx={{
            pr: {},
            textAlign: { xs: "center", md: "left" },
            pl: { xs: 3, sm: 3, md: 2 },
          }}
        >
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" >
            Front-end developer with a strong foundation in web design and modern web technologies.
          </Typography>
          <Typography variant="body1" color="text.secondary" >
            Holds a Master's degree in Computer Applications and certifications in Project Management (PMP) and Scrum (CSM), with a track record of delivering projects efficiently and collaboratively.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Specializes in developing responsive, accessible, and SEO-optimized web applications, focused on creating seamless user experiences.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
