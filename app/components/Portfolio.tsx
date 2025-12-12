// Portfolio.tsx
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { PROJECTS } from '../constant';

export const Portfolio = () => (
  <Box py={5} p={2}>
    <Typography variant="h4" textAlign="center" mb={4}>
      Portfolio
    </Typography>
    <Grid container spacing={4}>
      {PROJECTS.map((project, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card
            sx={{
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: 3,
              "&:hover": {
                transform: "translateY(-5px)",  
                boxShadow: 8,                  
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" mb={2}>
                {project.description}
              </Typography>
              <Link href={project.link || '#'}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  View Project
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);
