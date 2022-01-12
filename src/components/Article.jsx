import React from "react";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { getArticleById } from "../utils/api";

const Article = ({ article_id }) => {
  const [article, setArticle] = React.useState({});

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center"  gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body1"  paragraph>
        {article.body}
      </Typography>
    </Container>
  );
};

export default Article;
