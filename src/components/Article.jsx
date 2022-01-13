import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { getArticleById } from "../utils/api";
import dayjs from "dayjs";

const Article = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const date = dayjs(article.created_at);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 3,
        mb: 5,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          mt: 4,
          mb: 3,
        }}
      >
        {article.title}
      </Typography>
      <Typography variant="body2" align="right">
        {date.format("dddd, MMMM D YYYY")}
      </Typography>
      <Typography
        variant="subtitle2"
        align="right"
        color="textSecondary"
        sx={{ mb: 5 }}
      >
        - {article.author}
      </Typography>
      <Typography variant="body1" align="justify">
        {article.body}
      </Typography>
    </Container>
  );
};

export default Article;
