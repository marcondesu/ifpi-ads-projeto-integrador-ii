import * as React from "react";
import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  InputAdornment,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormValidation } from "../../../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignUp() {
  const { emailError, passwordError, handleEmailBlur, handlePasswordBlur } =
    useFormValidation();
  const navegacao = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [especialidade, setEspacialidade] = useState("");
  const [crm, setCRM] = useState("");

  const [formValid, setFormValid] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = async () => {
    setFormValid(null);

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

    setLoading(true);

    try {
      await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/profissional",
        {
          nome: name,
          email: emailInput,
          senha: passwordInput,
          crm: crm,
          especialidade: especialidade,
          sexo: gender,
          nascimento: dateOfBirth
        }
      );

      // console.log("Usuário cadastrado com sucesso:", response.data);
      navegacao("/profissional/login");
    } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error.message);
    } finally {
      setLoading(false);
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
            Cadastre-se
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(event) => setName(event.target.value)}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Data de Nascimento"
                  name="dateOfBirth"
                  type="date"
                  value={dateOfBirth}
                  onChange={handleDateChange}
                  InputLabelProps={{
                    shrink: true,
                    className: "always-shrink-label", // Add a class for custom styling
                  }}
                  sx={{
                    "& .always-shrink-label": {
                      transform: "translate(14px, -6px) scale(0.75)", // Adjust the position
                      pointerEvents: "none", // Avoid interference with the input
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth margin="normal" required>
                  <InputLabel id="gender-label">Gênero</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    label="Gênero"
                    value={gender}
                    onChange={(event) =>
                      setGender(event.target.value as string)
                    }
                  >
                    <MenuItem value="masculino">Masculino</MenuItem>
                    <MenuItem value="feminino">Feminino</MenuItem>
                    <MenuItem value="outro">Outro</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="crm"
                  label="CRM"
                  name="crm"
                  autoComplete="crm"
                  onChange={(event) => setCRM(event.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="epecialidade"
                  label="Especialidade"
                  name="especialidade"
                  autoComplete="especialidade"
                  onChange={(event) => setEspacialidade(event.target.value)}
                />
              </Grid>
            </Grid>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
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
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Cadastrar"
              )}
            </Button>
            <Box
              sx={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 100 }}
            >
              {formValid && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {formValid}
                </Alert>
              )}
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/profissional/login" variant="body2">
                  Já tem uma conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
