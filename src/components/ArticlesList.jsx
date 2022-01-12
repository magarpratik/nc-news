import React from "react";
import { useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";

const ArticlesList = ({ topic }) => {
  const [articlesList, setArticlesList] = React.useState([]);

  useEffect(() => {
    getArticles(topic).then((articles) => {
      setArticlesList(articles);
    });
  }, [topic]);

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {articlesList.map((article) => (
          <Grid item key={article.article_id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea
                component={Link}
                to={{
                  pathname: `/articles/${article.article_id}`,
                  state: {
                    number: 500
                  },
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticlesList;
