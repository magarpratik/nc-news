import { useLocation } from "react-router-dom";
import { useState } from "react";
import Article from "./Article";
import Comments from "./Comments";
import NewComment from "./NewComment";

const ArticlePage = () => {
  const [renderKey, setRenderKey] = useState(false);

  const location = useLocation();
  const splitString = location.pathname.split("/");
  const article_id = splitString[splitString.length - 1];

  return (
    <>
      <Article article_id={article_id} />
      <Comments article_id={article_id} renderKey={renderKey}/>
      <NewComment article_id={article_id} renderKey={renderKey} setRenderKey={setRenderKey}/>
    </>
  );
};

export default ArticlePage;
