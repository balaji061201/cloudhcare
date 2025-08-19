import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useStyles } from "../styles/style";
import homecare from "../assets/videos/homecare.mp4";

export function HeroSection() {
  const classes = useStyles();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        height: "100vh",
        mt: "70px",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Single Background Video */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          src={homecare}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(0.48)",
          }}
        />
      </Box>

      {/* 🔹 Foreground Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={4}>
          <Typography
            variant="h1"
            className={classes.herosectionTitle}
          >
            Empowering Healthcare with{" "}
            <span>
              Expertise, Compassion & Care
            </span>
          </Typography>

          <Typography
            variant="h5"
            className={classes.herosubtitle}
          >
            Cloudhcare provides consulting, staffing, and home healthcare
            services for hospitals, clinics, and families. We're committed to
            making healthcare more efficient, accessible, and compassionate.
          </Typography>

          {/* CTA Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              className={classes.primarybutton}
              onClick={() => scrollToSection("services")}
            >
              Explore Services
            </Button>
            <Button
              variant="outlined"
              onClick={() => scrollToSection("contact")}
              className={classes.secondarybutton}
              sx={{ color: "white", borderColor: "white" }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
