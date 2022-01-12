import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://northnews.herokuapp.com/api/",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticles = (topic) => {
  return newsApi.get(`/articles?topic=${topic}`).then((res) => {
    return res.data.articles;
  })
};
