import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import { CiUser } from "react-icons/ci";

export const UserTypeSelection = () => {
  const navegacao = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <CiUser />
        </Avatar>
        <Typography component="h1" variant="h5">
        Inicie sua jornada em direção ao bem-estar e autoconhecimento. </Typography>
        <Button
          onClick={() => navegacao("/login")}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Usuário comum
        </Button>
        <Button
          onClick={() => navegacao("/login/profissional")}
          fullWidth
          variant="contained"
        >
          Profissional da saúde
        </Button>
      </Box>
    </Container>
  );
};
