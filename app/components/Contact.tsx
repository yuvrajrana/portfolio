import { Paper, Typography } from "@mui/material";

const ContactSection = () => (
  <Paper sx={{ p: 3, mb: 4 }} elevation={2}>
    <Typography variant="h5" gutterBottom>
      Contact
    </Typography>

    <Typography variant="body1" sx={{ mb: 1 }}>
      📧 Email:{" "}
      <a href="mailto:yuvraj_raj87@yahoo.co.in" style={{ color: "#1976d2" }}>
        yuvraj_raj87@yahoo.co.in
      </a>
    </Typography>

    <Typography variant="body1">
      🔗 LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/in/yuvraj-singh-ui/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1976d2" }}
      >
        https://www.linkedin.com/in/yuvraj-singh-ui/
      </a>
    </Typography>
  </Paper>
);

export default ContactSection;