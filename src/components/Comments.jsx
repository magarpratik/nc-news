import React, { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const Comments = ({ article_id, renderKey }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id, renderKey]);

  return (
    <Container maxWidth="md" sx={{ padding: "20px 0" }}>
      <Typography variant="h6" sx={{ ml: 2 }}>
        Commments
      </Typography>
      <List>
        {comments.map((comment) => {
          return (
            <React.Fragment key={comment.comment_id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={comment.author}
                    src={`https://api.multiavatar.com/${comment.author}.svg`}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={comment.author}
                  secondary={comment.body}
                ></ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Container>
  );
};

export default Comments;
