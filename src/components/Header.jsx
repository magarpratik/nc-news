import { AppBar, Typography } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Header = () => {
  return (
    <AppBar position="relative">
      <Typography variant="h3" align="center">
        <NewspaperIcon fontSize="large" sx={{ mr: 1.5 }} />
        North News
      </Typography>
    </AppBar>
  );
};

export default Header;
