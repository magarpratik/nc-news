import { useState } from "react";
import { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { getArticles } from "../utils/api";
import { Link } from "react-router-dom";
import Vote from "./Vote";
import dayjs from "dayjs";

const PAGE_LIMIT = 9;

const ArticlesList = ({ topic }) => {
  const [articlesList, setArticlesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [sort_by, setSort_by] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getArticles({ topic, page, sort_by, order }).then(
      ({ articles, total_count }) => {
        setArticlesList(articles);
        setTotalCount(total_count);
      }
    );
  }, [topic, page, sort_by, order]);

  const handlePage = (event, value) => {
    setPage(value);
  };

  const handleSort = (event) => {
    setSort_by(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        padding: "20px 0",
      }}
    >
      <Box sx={{ mb: 2, display: "flex", flexDirection: "row-reverse" }}>
        <FormControl sx={{ mr: 2, ml: 2 }}>
          <InputLabel>Sort by</InputLabel>
          <Select label="sort by" value={sort_by} onChange={handleSort}>
            <MenuItem value={"created_at"}>Date</MenuItem>
            <MenuItem value={"author"}>Author</MenuItem>
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"votes"}>Votes</MenuItem>
            <MenuItem value={"comment_count"}>Comments</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Order</InputLabel>
          <Select label="order" value={order} onChange={handleOrder}>
            <MenuItem value={"desc"}>Descending</MenuItem>
            <MenuItem value={"asc"}>Ascending</MenuItem>
          </Select>
        </FormControl>
      </Box>

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
                    <CardMedia
                      image={`https://source.unsplash.com/random?${article.title}`}
                      title={article.title}
                      sx={{
                        paddingTop: "56.25%",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {article.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <Typography color="textSecondary">
                          {new dayjs(article.created_at).format("D MMM YYYY")}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            alt={article.author}
                            src={`https://api.multiavatar.com/${article.author}.svg`}
                            sx={{ width: 35, height: 35, mr: 1 }}

                          />
                          <Typography color="textSecondary">
                            {article.author}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                  <Vote article={article} />
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(totalCount / PAGE_LIMIT)}
          page={page}
          onChange={handlePage}
        />
      </Stack>
    </Container>
  );
};

export default ArticlesList;
