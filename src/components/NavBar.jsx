import React from "react";
import { Box, LinkTab, Tab, Tabs, TabPanel } from "@mui/material";

const NavBar = () => {
  return (
    <Tabs centered variant="scrollable" scrollButtons="auto">
      <Tab label="All Articles" />
      <Tab label="Football" />
      <Tab label="Politics" />
      <Tab label="All Articles" />
      <Tab label="Football" />
      <Tab label="Politics" />
    </Tabs>
  );
};

export default NavBar;
