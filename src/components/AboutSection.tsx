import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import { useStyles } from "../styles/style";
import homecareimg from "../assets/images/homecareimg.jpg";

export function AboutSection() {
  const classes = useStyles();
  return (
    <Box id="about" sx={{ py: 12, backgroundColor: "white" }}>
      <Container>
        <Grid container spacing={8} alignItems="center">
          {/* Content */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{ mb: 2 }}
                  className={classes.sectiontitle}
                >
                  About Cloud Health Care
                </Typography>
                <Divider
                  sx={{
                    width: 64,
                    height: 4,
                    backgroundColor: "#EB9846",
                    borderRadius: 2,
                    border: "none",
                  }}
                />
              </Box>

              <Stack spacing={2}>
                <Typography variant="body1" className={classes.sectionbody}>
                  At Cloud Health Care, we believe that exceptional healthcare begins
                  with exceptional people and innovative solutions. Our mission
                  is to transform the healthcare landscape by making it more
                  efficient, accessible, and compassionate for everyone.
                </Typography>

                <Typography variant="body1" className={classes.sectionbody}>
                  We partner with healthcare organizations, families, and
                  communities to deliver comprehensive solutions that address
                  the evolving challenges in modern healthcare. From strategic
                  consulting to specialized staffing and personalized home care
                  services, we're committed to excellence in every interaction.
                </Typography>

                <Typography variant="body1" className={classes.sectionbody}>
                  With a team of experienced professionals and a patient-first
                  approach, we're not just providing services - we're building
                  healthier futures together.
                </Typography>
              </Stack>

              {/* Stats */}
              <Grid container spacing={3} sx={{ pt: 3 }}>
                {[
                  { number: "500+", label: "Healthcare Partners" },
                  { number: "100K+", label: "Patients Served" },
                  { number: "15+", label: "Years Experience" },
                ].map((stat, index) => (
                  <Grid size={{ xs: 4 }} key={index}>
                    <Box textAlign="center">
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#1E90FF",
                          fontWeight: 700,
                          fontSize: "2rem",
                          mb: 0.5,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#6b7280",
                          fontSize: "1rem",
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          {/* Visual */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack spacing={2}>
              <img
                src={homecareimg}
                alt="Healthcare consultation"
                style={{
                  width: "100%",
                  height: "720px",
                  objectFit: "cover",
                  borderRadius: "20px",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
