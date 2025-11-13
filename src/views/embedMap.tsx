import { Paper, Typography, Box } from "@mui/material";

export default function EmbededMap() {
  return (
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
        mb={2} 
      >
        FIND US
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          paddingBottom: "56.25%", 
          height: 0,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.813591093392!2d144.84377347588583!3d-37.82294927197328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad660e6903b0c45%3A0x1a2a007dea04acee!2sBrooklyn%20Tennis%20Club!5e1!3m2!1sen!2sau!4v1763020224167!5m2!1sen!2sau"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - Brooklyn Tennis Club"
        ></iframe>
      </Box>
    </Paper>
  );
}
