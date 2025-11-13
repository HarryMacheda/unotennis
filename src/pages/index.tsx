import { alpha, Divider, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 4,
        px: 2,
      }}
    >
      <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
      >
        <Typography fontWeight={700} color="primary" fontSize={isMobile ? "3rem" : "5rem"} textAlign="center" sx={{userSelect: "none"}}>
          UNOTENNIS
        </Typography>
        <Divider
          sx={{
            bgcolor: "primary.main", 
            height: "4px",           
            width: "65%",
            mt: isMobile ? -1 : -2,
            mb: 2           
          }}
        />
        <Typography fontWeight={700} color="primary" fontSize="1rem" textAlign="center" sx={{userSelect: "none"}}>
          25 years of coaching experience
        </Typography>
      </Box>
      <Stack direction={isMobile ? "column" : "row"} gap={1} >
        <Paper
          onClick={() => navigate("/learn")}
          sx={(theme) => ({
            padding: 1,
            bgcolor: theme.palette.background.paper,
            transition: "background-color 0.3s",
            "&:hover": {
              cursor: "pointer",
              bgcolor: alpha(theme.palette.background.paper, 0.5),
              boxShadow:"none"
            },
          })}
        >
          <Typography fontWeight={700} color="tertiary" fontSize="3rem" textAlign="center" sx={{userSelect: "none"}}>
            LEARN
          </Typography>
        </Paper>

        <Paper
          onClick={() => navigate("/bookings")}
          sx={(theme) => ({
            padding: 1,
            bgcolor: theme.palette.background.paper,
            transition: "background-color 0.3s",
            "&:hover": {
              cursor: "pointer",
              bgcolor: alpha(theme.palette.background.paper, 0.5),
              boxShadow:"none"
            },
          })}
        >
          <Typography fontWeight={700} color="secondary" fontSize="3rem" textAlign="center" sx={{userSelect: "none"}}>
            BOOKINGS
          </Typography>       
        </Paper>

        <Paper
          onClick={() => navigate("/contact")}
          sx={(theme) => ({
            padding: 1,
            bgcolor: theme.palette.background.paper,
            transition: "background-color 0.3s",
            "&:hover": {
              cursor: "pointer",
              bgcolor: alpha(theme.palette.background.paper, 0.5),
              boxShadow:"none"
            },
          })}
        >
          <Typography fontWeight={700} color="primary" fontSize="3rem" textAlign="center" sx={{userSelect: "none"}}>
            CONTACT
          </Typography>    
        </Paper>
      </Stack>
    </Box>
  );
}

export default Home;
