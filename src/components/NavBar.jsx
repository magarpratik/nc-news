import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 480, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
