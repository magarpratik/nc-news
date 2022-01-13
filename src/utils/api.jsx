import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://northnews.herokuapp.com/api/",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic, page) => {
  return newsApi
    .get("/articles", {
      params: {
        topic,
        p: page,
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
