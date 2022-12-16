import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-emai.onrender.com  /api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = ({
  topic = "",
  page = 1,
  sort_by = "created_at",
  order = "desc",
}) => {
  return newsApi
    .get("/articles", {
      params: {
        topic,
        p: page,
        sort_by: sort_by,
        order: order,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const addVote = (article_id) => {
  return newsApi.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  });
};

export const addComment = (article_id, username, body) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    username: username,
    body: body,
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
