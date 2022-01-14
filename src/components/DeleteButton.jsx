import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteComment } from "../utils/api";

const DeleteButton = ({ comment_id, renderKey, setRenderKey }) => {
  const handleClick = () => {
    deleteComment(comment_id).then((res) => {
      setRenderKey(!renderKey);
    });
  };

  return (
    <IconButton color="error" onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
