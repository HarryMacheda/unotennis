import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";


function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
        <Typography fontWeight={700} color="primary" fontSize={isMobile ? "3rem" : "5rem"} textAlign="center">
            CONTACT US
        </Typography>
        <Stack direction={isMobile ? "column" : "row"} gap={1} >
        </Stack>
    </Box>
  )

}