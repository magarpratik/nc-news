import React from "react";
import { useEffect } from "react";
import { Tab, Tabs } from "@mui/material";
import { getTopics } from "../utils/api";

const NavBar = () => {
  const [topicsList, setTopicsList] = React.useState([]);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    getTopics().then(({ data: { topics } }) => {
      setTopicsList(topics);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All articles" key="All articles" />
        {topicsList.map(({ slug }) => {
          return <Tab label={slug} key={slug} />;
        })}
      </Tabs>
    </>
  );
};

export default NavBar;
