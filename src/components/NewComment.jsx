import { Button, Container, FormControl, TextField } from "@mui/material";

const NewComment = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        mb: 4,
      }}
    >
      <FormControl fullWidth>
        <TextField
          label="Comment"
          multiline
          rows={2}
          sx={{
            ml: 2,
            mr: 2
          }}
        />
      </FormControl>
      <Button variant="contained" size="large" sx={{
        mb: 4,
        mr: 1
      }}>Post</Button>
    </Container>
  );
};

export default NewComment;
