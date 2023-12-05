import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import { LuEye, LuEyeOff } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useFormValidation } from "../../../hooks/useForm";

const defaultTheme = createTheme();

export default function SignIn() {
  const { emailError, passwordError, handleEmailBlur, handlePasswordBlur } =
  useFormValidation();

  const navegacao = useNavigate();
  const [loading, setLoading] = useState(false); // E

  const [showPassword, setShowPassword] = useState(false);

  // Inputs
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // Overall Form Validity
  const [formValid, setFormValid] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setSuccess(null);

    if (emailError || !emailInput) {
      setFormValid("Email inválido.");
      setTimeout(() => {
        setFormValid(null);
      }, 5000);
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Senha deve ter no mínimo 4 caracteres");
      setTimeout(() => {
        setFormValid(null);
      }, 5000);
      return;
    }

    // console.log("Email: " + emailInput);
    // console.log("Password: " + passwordInput);
    
    try {
      setLoading(true);

      const response = await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/auth/login",
        {
          email: emailInput,
          senha: passwordInput,
        }
      );

      navegacao("/formulario");
      localStorage.setItem("token", response.data.access_token);
      console.log("token", response.data.access_token);
    } catch (error: any) {
      console.log("Erro ao fazer login:", error.message);
    } finally {
      setLoading(false); // Indicar que a requisição foi concluída (bem-sucedida ou com erro)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            <CiLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Bem vindo(a) de volta!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmailInput(event.target.value)}
              onBlur={handleEmailBlur}
              error={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              onBlur={handlePasswordBlur}
              onChange={(event) => setPasswordInput(event.target.value)}
              error={passwordError}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <LuEye /> : <LuEyeOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> // Mostrar indicador de carregamento
              ) : (
                "Entrar"
              )}
            </Button>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                zIndex: 100,
              }}
            >
              {formValid && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {formValid}
                </Alert>
              )}
              {success && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  {success}
                </Alert>
              )}
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/cadastro" variant="body2">
                  {"Não tem uma conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
