import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import ArticlePage from "./components/ArticlePage";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticlesList topic="" />} />
        <Route path="/coding" element={<ArticlesList topic="coding" />} />
        <Route path="/football" element={<ArticlesList topic="football" />} />
        <Route path="/cooking" element={<ArticlesList topic="cooking" />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
