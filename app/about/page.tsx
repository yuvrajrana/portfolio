"use client";

import AboutMe from "../components/AboutSection";
import { Box, Typography, Paper, Grid, Chip, Divider } from "@mui/material";
import React from "react";
import ContactSection from "../components/Contact";

// ------------ Skill Arrays ------------
const frontendSkills: readonly string[] = [
  "React.js", "Fusion.js", "Redux", "Redux Toolkit", "TypeScript",
  "HTML5", "CSS3", "SASS", "Styled Components", "Bootstrap",
  "Ant Design", "Material UI", "jQuery"
];

const jsTooling: readonly string[] = [
  "JavaScript (ES6+)", "Webpack", "Babel", "Node.js",
  "NPM/Yarn", "Git", "CI/CD – Jenkins"
];

const architectureSkills: readonly string[] = [
  "Frontend Architecture", "Modular UI Development",
  "Component Libraries", "Design Systems",
  "Performance Optimization", "Caching",
  "Code Splitting", "SSR & Client-Side Rendering"
];

const testingSkills: readonly string[] = [
  "Jest", "React Testing Library", "TDD",
  "LoadRunner"
];

const projectManagementSkills: readonly string[] = [
  "Agile (Scrum)", "Scrum Ceremonies", "Sprint Planning",
  "Backlog Prioritization", "Velocity Tracking",
  "User Story Writing", "Burndown Tracking",
  "Risk Management", "Stakeholder Management",
  "Waterfall Delivery", "Hybrid Delivery Models",
  "Project Scheduling",
  "Resource Planning", "Cross-functional Coordination",
];

const leadershipSkills: readonly string[] = [
  "Team Mentoring", "1:1 Coaching", "Code Reviews",
  "Cross-Team Collaboration", "Technical Roadmapping",
  "Requirement Analysis", "Conflict Resolution"
];

const certifications: readonly string[] = [
  "Project Management Professional (PMP®), PMI",
  "Certified ScrumMaster® (CSM®), Scrum Alliance"
];

// ------------ Types ------------
interface SectionProps {
  title: string;
  items: readonly string[];
}

// ------------ Reusable Section Component ------------
const Section: React.FC<SectionProps> = ({ title, items }) => (
  <Paper sx={{ p: 3, mb: 4 }} elevation={2}>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>

    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item key={item}>
          <Chip label={item} variant="outlined" color="primary" />
        </Grid>
      ))}
    </Grid>
  </Paper>
);

// ------------ Main Page ------------
const Projects: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <AboutMe />

      <Divider sx={{ my: 4 }} />
      
      <ContactSection />
      <Section title="Frontend Engineering" items={frontendSkills} />
      <Section title="JavaScript & Tooling" items={jsTooling} />
      <Section title="Architecture & Performance" items={architectureSkills} />
      <Section title="Testing & Quality Engineering" items={testingSkills} />
      <Section title="Project Management & Delivery" items={projectManagementSkills} />
      <Section title="Leadership & Team Skills" items={leadershipSkills} />

      {/* Certifications */}
      <Paper sx={{ p: 3 }} elevation={2}>
        <Typography variant="h5" gutterBottom>
          Certifications
        </Typography>
        {certifications.map((cert) => (
          <Typography key={cert} variant="body1" sx={{ mb: 1 }}>
            • {cert}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};

export default Projects;
