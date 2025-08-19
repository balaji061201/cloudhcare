import { FormatQuote } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useStyles } from "../styles/style";

export function TestimonialsSection() {
  const classes = useStyles();
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      organization: "Metropolitan General Hospital",
      content:
        "Cloudhcare transformed our staffing challenges into opportunities. Their team provided us with exceptional nurses who seamlessly integrated into our workflow. The level of professionalism and expertise they bring is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      title: "Healthcare Administrator",
      organization: "Riverside Medical Center",
      content:
        "The consulting services from Cloudhcare helped us streamline our operations and improve patient satisfaction scores by 40%. Their strategic insights were exactly what we needed to navigate the changing healthcare landscape.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      title: "Family Caregiver",
      organization: "Home Care Client",
      content:
        "The home healthcare services provided for my elderly mother exceeded all our expectations. The caregivers are not just skilled professionals – they're compassionate people who truly care. It's given our family such peace of mind.",
      rating: 5,
    },
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ mb: 2 }} className={classes.sectiontitle}>
            What Our Clients Say
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
            Don't just take our word for it. Hear from the healthcare
            organizations and families who trust Cloudhcare with their most
            important needs.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  position: "relative",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                  "&:hover": {
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  },
                  transition: "box-shadow 0.3s ease",
                  borderRadius: 3,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#1E90FF",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FormatQuote sx={{ fontSize: 24, color: "white" }} />
                  </Box>

                  {/* Rating */}
                  <Box sx={{ pt: 2, mb: 3 }}>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#EB9846",
                        },
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="body1"
                    className={classes.testimonialcontent}
                  >
                    "{testimonial.content}"
                  </Typography>

                  {/* Author */}
                  <Box sx={{ borderTop: "1px solid #e5e7eb", pt: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: "#0A2E4D",
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#6b7280",
                        mb: 0.5,
                      }}
                    >
                      {testimonial.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#1E90FF",
                        fontWeight: 500,
                      }}
                    >
                      {testimonial.organization}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Card
            sx={{
              background:
                "linear-gradient(135deg, rgba(30, 144, 255, 0.05) 0%, rgba(235, 152, 70, 0.05) 100%)",
              borderRadius: 4,
              border: "none",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ p: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: "#0A2E4D",
                  mb: 2,
                }}
              >
                Ready to Join Our Success Stories?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6b7280",
                  lineHeight: 1.6,
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                Let us help you achieve the same level of success and
                satisfaction. Contact us today to discuss your healthcare needs.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
