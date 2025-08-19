import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../assets/images/logo-white.png";
import { useStyles } from "../styles/style";

export function Footer() {
  const classes = useStyles();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0A2E4D",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Stack spacing={2}>
                <img
                  src={logo}
                  alt="cloudhcarelogo"
                  className={classes.footerlogo}
                />
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  Empowering healthcare with expertise, people, and care. Your
                  trusted partner in building healthier futures.
                </Typography>
                <Stack spacing={1}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Email
                      sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      info@cloudhcare.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Phone
                      sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      +91 44 2345 6789
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn
                      sx={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      123 Healthcare Drive Anna Salai, Chennai - 600002, Tamil Nadu, India
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            {/* Services */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Our Services
              </Typography>
              <Stack spacing={1}>
                {[
                  { label: "Healthcare Consulting", id: "services" },
                  { label: "Workforce Solutions", id: "services" },
                  { label: "Home Healthcare", id: "services" },
                  { label: "Specialized Programs", href: "#" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    onClick={() =>
                      item.id ? scrollToSection(item.id) : undefined
                    }
                    sx={{
                      justifyContent: "flex-start",
                      p: 0,
                      minWidth: "auto",
                      color: "rgba(255, 255, 255, 0.7)",
                      "&:hover": {
                        color: "#EB9846",
                        backgroundColor: "transparent",
                      },
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {[
                  { label: "About Us", id: "about" },
                  { label: "Why Choose Us", id: "why-us" },
                  { label: "Contact", id: "contact" },
                ].map((item, index) => (
                  <Button
                    key={index}
                    onClick={() =>
                      item.id ? scrollToSection(item.id) : undefined
                    }
                    sx={{
                      justifyContent: "flex-start",
                      p: 0,
                      minWidth: "auto",
                      color: "rgba(255, 255, 255, 0.7)",
                      "&:hover": {
                        color: "#EB9846",
                        backgroundColor: "transparent",
                      },
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "0.875rem",
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Social Media & Newsletter */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Connect With Us
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                {[
                  { icon: Facebook, href: "#" },
                  { icon: XIcon, href: "#" },
                  { icon: LinkedIn, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#1E90FF",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#EB9846",
                      },
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <social.icon sx={{ fontSize: 20 }} />
                  </IconButton>
                ))}
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  mb: 2,
                }}
              >
                Stay updated with healthcare insights
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="outlined"
                  placeholder="Your email"
                  size="small"
                  sx={{
                    flexGrow: 1,
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#EB9846",
                      },
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#EB9846",
                    "&:hover": { backgroundColor: "#D4853A" },
                    px: 3,
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar */}
        <Box>
          <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.2)", mb: 3 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              pb: 4,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              © 2025 Cloudhcare. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={3}>
              {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map(
                (link, index) => (
                  <Button
                    key={index}
                    href="#"
                    sx={{
                      p: 0,
                      minWidth: "auto",
                      color: "rgba(255, 255, 255, 0.7)",
                      "&:hover": {
                        color: "#EB9846",
                        backgroundColor: "transparent",
                      },
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "0.875rem",
                    }}
                  >
                    {link}
                  </Button>
                )
              )}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
