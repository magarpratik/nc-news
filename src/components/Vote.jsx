import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import { Button } from "@mui/material";
import { useState } from "react";
import { addVote } from "../utils/api";

const Vote = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [isError, setIsError] = useState(false);

  const article_id = article.article_id;

  const handleClick = () => {
    setIsError(false);
    setVotes((currVotes) => currVotes + 1);
    addVote(article_id).catch((err) => {
      console.log(err);
      setVotes((currVotes) => currVotes - 1);
      setIsError(true);
    });
  };

  return (
    <>
      <Button onClick={handleClick} startIcon={<ThumbUpRoundedIcon />}>
        {votes}
      </Button>
      {isError ? <p>Error occured</p> : null}
    </>
  );
};

export default Vote;
