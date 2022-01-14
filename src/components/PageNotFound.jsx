import { Box, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        height: "85vh",
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mr: 1,
          }}
        >
          404 |
        </Typography>
        <Typography variant="body1">This page could not be found.</Typography>
      </Box>
    </Box>
  );
};

export default PageNotFound;
