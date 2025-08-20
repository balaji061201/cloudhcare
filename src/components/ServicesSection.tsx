import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";
import {
  Psychology,
  People,
  Favorite,
  FiberManualRecord,
} from "@mui/icons-material";
import { useStyles } from "../styles/style";

export function ServicesSection() {
  const classes = useStyles();
  const services = [
    {
      icon: People,
      title: "Workforce & Staffing Solutions",
      description:
        "Connecting healthcare organizations with skilled professionals across all specialties.",
      features: [
        "Nursing & Clinical Staff",
        "Allied Health Professionals",
        "Administrative Personnel",
        "Temporary & Permanent Placement",
        "Credentialing & Compliance",
      ],
    },
    {
      icon: Psychology,
      title: "Healthcare Consulting & Advisory",
      description:
        "Strategic guidance to optimize operations, ensure compliance, and drive financial performance.",
      features: [
        "Strategic Planning & Operations",
        "Regulatory Compliance",
        "Financial Planning & Analysis",
        "Quality Improvement Programs",
        "Technology Implementation",
      ],
    },
    {
      icon: Favorite,
      title: "Patient & Home Healthcare Services",
      description:
        "Compassionate care delivered in the comfort of your home with professional expertise.",
      features: [
        "Skilled Nursing Care",
        "Physical & Occupational Therapy",
        "Elder Care & Companionship",
        "Medical Equipment Support",
        "Chronic Disease Management",
      ],
    },
  ];

  return (
    <Box
      id="services"
      sx={{ py: 12, backgroundColor: "rgba(244, 246, 247, 0.5)" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            className={classes.sectiontitle}
            sx={{ mb: 2 }}
          >
            Our Healthcare Solutions
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
          <Typography variant="h5" className={classes.sectionbody}>
            Comprehensive healthcare services designed to meet the diverse needs
            of healthcare organizations, families, and communities.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "none",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                  "&:hover": {
                    boxShadow:
                      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                  borderRadius: 3,
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Icon */}
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        background:
                          "linear-gradient(135deg, #1E90FF 0%, rgba(30, 144, 255, 0.8) 100%)",
                        mx: "auto",
                        mb: 2,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <service.icon sx={{ fontSize: 32, color: "white" }} />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: "#0A2E4D" }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#6b7280",
                      textAlign: "center",
                      mb: 3,
                      fontSize: "1rem",
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Features List */}
                  <List sx={{ flexGrow: 1, py: 0, mb: 2 }}>
                    {service.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <FiberManualRecord
                            sx={{
                              fontSize: 8,
                              color: "#EB9846",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          sx={{
                            "& .MuiListItemText-primary": {
                              fontSize: "1rem",
                              color: "#6b7280",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Learn More Button */}
                  <Button
                    variant="outlined"
                    fullWidth
                    className={classes.secondarybutton}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
