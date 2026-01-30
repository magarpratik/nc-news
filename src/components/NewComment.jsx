import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { addComment } from "../utils/api";
import { avatarSrc } from "../utils/avatar";

const NewComment = ({ article_id, renderKey, setRenderKey }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    addComment(article_id, user, comment)
      .then((res) => {
        setComment("");
        setRenderKey(!renderKey);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        mb: 4,
      }}
    >
      <Box>
        <Avatar alt={user} src={avatarSrc(user)} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mt: 0.5,
          }}
        >
          {user}
        </Typography>
      </Box>

      <FormControl fullWidth>
        <TextField
          value={comment}
          multiline
          rows={2}
          onChange={handleComment}
          sx={{
            ml: 2,
            mr: 2,
          }}
        />
      </FormControl>
      <Button
        onClick={handleSubmit}
        variant="contained"
        size="large"
        sx={{
          mb: 4,
          mr: 1,
        }}
      >
        Post
      </Button>
    </Container>
  );
};

export default NewComment;
