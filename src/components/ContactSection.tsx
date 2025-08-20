import { Email, LocationOn, Phone, Schedule } from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useStyles } from "../styles/style";

export function ContactSection() {
  const classes = useStyles();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactDetails = [
    {
      icon: Email,
      title: "Email Us",
      details: ["info@Cloud Health Care.com", "support@Cloud Health Care.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (415) 555-2671", "+1 (415) 555-4829"],
    },
    {
      icon: LocationOn,
      title: "Visit Us",
      details: ["Cloud Health Care Solutions 245 Market Street, Suite 1200 San Francisco, CA 94105 United States"],
    },
    {
      icon: Schedule,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "24/7 Emergency Support Available",
      ],
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background:
          "linear-gradient(135deg, rgba(244, 246, 247, 0.3) 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }} className={classes.sectiontitle}>
            Let's Build a Healthier Future Together
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
            Ready to transform your healthcare operations? Contact us today to
            discuss how we can help you achieve your goals.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                borderRadius: 3,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: "#0A2E4D" }}>
                  Send us a message
                </Typography>

                {showAlert && (
                  <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                    Thank you for your inquiry! We'll get back to you within 24
                    hours.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Grid container spacing={2}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="First Name"
                          required
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#1E90FF",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#1E90FF",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#1E90FF",
                            },
                          }}
                        />
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          required
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "&:hover fieldset": {
                                borderColor: "#1E90FF",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#1E90FF",
                              },
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                              color: "#1E90FF",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#1E90FF",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1E90FF",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#1E90FF",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Organization (Optional)"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#1E90FF",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1E90FF",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#1E90FF",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={5}
                      required
                      variant="outlined"
                      placeholder="Tell us about your healthcare needs and how we can help..."
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: "#1E90FF",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#1E90FF",
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#1E90FF",
                        },
                      }}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      className={classes.primarybutton}
                    >
                      Submit Inquiry
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h4" sx={{ mb: 3, color: "#0A2E4D" }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
                  We're here to answer your questions and discuss how our
                  healthcare solutions can benefit your organization or family.
                  Reach out to us through any of the channels below.
                </Typography>
              </Box>

              {/* Contact Details */}
              <Stack spacing={3}>
                {contactDetails.map((contact, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                  >
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: "rgba(30, 144, 255, 0.1)",
                        flexShrink: 0,
                      }}
                    >
                      <contact.icon sx={{ fontSize: 24, color: "#1E90FF" }} />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "#0A2E4D",
                          mb: 0.5,
                        }}
                      >
                        {contact.title}
                      </Typography>
                      {contact.details.map((detail, detailIndex) => (
                        <Typography
                          key={detailIndex}
                          variant="body1"
                          sx={{ color: "#6b7280", lineHeight: 1.4 }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Emergency Contact */}
              <Card
                sx={{
                  backgroundColor: "rgba(235, 152, 70, 0.1)",
                  border: "none",
                  boxShadow: "none",
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#0A2E4D",
                      mb: 1,
                    }}
                  >
                    Emergency Healthcare Support
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 1 }}>
                    For urgent staffing needs or healthcare emergencies:
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#EB9846",
                    }}
                  >
                    +1 (555) 999-HELP (4357)
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
