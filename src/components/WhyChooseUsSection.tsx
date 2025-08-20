import { Favorite, Lightbulb, People, Security } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useStyles } from "../styles/style";

export function WhyChooseUsSection() {
  const classes = useStyles();
  const pillars = [
    {
      icon: Security,
      title: "Trusted Expertise",
      description:
        "Over 15 years of experience in healthcare solutions with a proven track record of success.",
    },
    {
      icon: People,
      title: "Skilled Professionals",
      description:
        "Rigorously vetted healthcare professionals committed to excellence and continuous learning.",
    },
    {
      icon: Favorite,
      title: "Patient-First Approach",
      description:
        "Every decision we make is guided by what's best for patient outcomes and satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description:
        "Cutting-edge technology and forward-thinking strategies to meet evolving healthcare needs.",
    },
  ];

  const stats = [
    { value: "99%", label: "Client Satisfaction Rate" },
    { value: "24/7", label: "Support Availability" },
    { value: "100%", label: "HIPAA Compliant" },
  ];

  return (
    <Box
      id="why-us"
      sx={{
        py: 12,
        background:
          "linear-gradient(135deg, rgba(30, 144, 255, 0.05) 0%, #ffffff 50%, rgba(30, 144, 255, 0.1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }} className={classes.sectiontitle}>
            Why Choose Cloud Health Care?
          </Typography>
          <Divider
            sx={{
              width: 64,
              height: 4,
              backgroundColor: "#EB9846",
              borderRadius: 2,
              border: "none",
              mx: "auto",
              mb: 3,
            }}
          />
          <Typography
            variant="h5"
            className={classes.sectionbody}
          >
            We're not just another healthcare company. We're your partners in
            building a healthier, more efficient, and more compassionate
            healthcare system.
          </Typography>
        </Box>

        {/* Pillars Grid */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {pillars.map((pillar, index) => (
            <Grid size={{ xs: 12 }} key={index}>
              <Box
                textAlign="center"
                sx={{
                  "&:hover .pillar-icon": {
                    transform: "scale(1.05)",
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  className="pillar-icon"
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 3,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      background:
                        "linear-gradient(135deg, #1E90FF 0%, rgba(30, 144, 255, 0.8) 100%)",
                    }}
                  >
                    <pillar.icon sx={{ fontSize: 32, color: "white" }} />
                  </Avatar>
                </Box>

                {/* Content */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#0A2E4D",
                    mb: 2,
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Commitment Card */}
        <Card
          sx={{
            maxWidth: "900px",
            mx: "auto",
            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
            borderRadius: 4,
          }}
        >
          <CardContent sx={{ p: 6, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "#0A2E4D",
                mb: 3,
              }}
            >
              Our Commitment to Excellence
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#6b7280",
                lineHeight: 1.7,
                mb: 4,
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              We believe that healthcare is more than just a service - it's a
              calling. That's why we maintain the highest standards in
              everything we do, from the professionals we hire to the solutions
              we deliver.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid size={{ xs: 12, sm: 4 }} key={index}>
                  <Box textAlign="center">
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#1E90FF",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6b7280",
                        fontSize: "0.875rem",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
