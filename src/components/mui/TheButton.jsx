import { Button } from "@mui/material";

export default function TheButton() {
  return (
    <Button
      sx={{ background: (theme) => theme.palette.gradient.main }}
      variant="contained"
      value={"test"}
    >
      hello world
    </Button>
  );
}
