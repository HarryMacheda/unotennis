import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import EmbededMap from "../views/embedMap";
import ContactForm from "../views/contactForm";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function ContactPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontWeight={700}
        color="primary"
        fontSize={isMobile ? "3rem" : "5rem"}
        textAlign="center"
      >
        CONTACT US
      </Typography>

      <Stack
        direction={isMobile ? "column" : "row"}
        gap={3}
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", maxWidth: "1200px" }}
      >
        <Stack
          direction="column"
          gap={2}
          sx={{
            width: isMobile ? "100%" : "50%",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
           <Paper
            sx={{
              p: 2,
              maxWidth: 800,
              minWidth: 400,
              mx: "auto",
              mt: 4,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Typography
              fontWeight={700}
              color="primary"
              fontSize="2rem"
              mb={1}
              textAlign={isMobile ? "center" : "left"}
            >
              FIND US
            </Typography>
            <Stack direction="column" spacing={0.5}>
              <Button variant="text" startIcon={<FacebookIcon />}
                onClick={() => {window.open("https://www.facebook.com/profile.php?id=100063698647720&ref=br_tf#", "_blank");}}
              >
                Facebook
              </Button>
              <Button variant="text" startIcon={<InstagramIcon />}
                onClick={() => {window.open("https://www.instagram.com/unotennis/", "_blank");}}
              >
                Instagram
              </Button>
              <Button variant="text" startIcon={<TwitterIcon />}
                onClick={() => {window.open("https://x.com/UnoTennisAus", "_blank");}}
              >
                Twitter
              </Button>
            </Stack>
          </Paper>
          <EmbededMap />
        </Stack>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <ContactForm />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default ContactPage;