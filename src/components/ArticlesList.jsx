import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

const PAGE_LIMIT = 9;

const ArticlesList = ({ topic }) => {
  const [articlesList, setArticlesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getArticles(topic, page).then(({ articles, total_count }) => {
      setArticlesList(articles);
      setTotalCount(total_count);
    });
  }, [topic, page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container maxWidth="md">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid container spacing={4}>
          {articlesList.map((article) => (
            <Grid item key={article.article_id} xs={12} sm={6} md={4}>
              <Card>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardActionArea
                    component={Link}
                    to={{
                      pathname: `/articles/${article.article_id}`,
                    }}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {article.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Button
                    startIcon={<ThumbUpRoundedIcon />}
                  >
                    {article.votes}
                  </Button>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(totalCount / PAGE_LIMIT)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};

export default ArticlesList;
