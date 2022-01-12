import React from "react";
import { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [topicsList, setTopicsList] = React.useState([]);
  const [selectedTab, setSelectedTab] = React.useState(0);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Tabs
      value={selectedTab}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      <Tab label="All articles" key="All articles" component={Link} to="/" />
      {topicsList.map(({ slug }) => {
        return <Tab label={slug} key={slug} component={Link} to={`/${slug}`} />;
      })}
    </Tabs>
  );
};

export default NavBar;
