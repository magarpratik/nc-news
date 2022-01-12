import React from "react";
import { useLocation } from "react-router-dom";
import Article from "./Article";
import Comments from "./Comments";
import NewComment from "./NewComment";

const ArticlePage = () => {
  const location = useLocation();
  const splitString = location.pathname.split("/");
  const article_id = splitString[splitString.length - 1];

  return (
    <>
          <Article article_id={article_id}/>
      <Comments />
      <NewComment />
    </>
  );
};

export default ArticlePage;
