import {
  styled,
  ButtonBase,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi2";

const CustomButtonBase = styled(ButtonBase)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "3rem",
  padding: "1rem",
  cursor: "default",
});

export interface PatientProps {
  id: string;
  icon: React.ReactNode;
  nome: string;
  sexo: string;
  email: string;
}

const GridItem: React.FC<PatientProps> = ({ id, nome, sexo, email }) => {
  const emojiIcon = <HiOutlineUsers />;

  const [acompanhamentoAssociado, setAcompanhamentoAssociado] = useState(false);

  const token = localStorage.getItem("token") ?? "";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const decoded = jwtDecode(token);
  const profissionalId = decoded.sub ?? ""; //não aceita undefined

  const handleRemoverAcompanhamento = async () => {
    try {
      const response = await axios.get(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        { headers }
      );

      const acompanhamentos = response.data;
      console.log(acompanhamentos);

      const acompanhamentoParaRemover = acompanhamentos.find(
        (acompanhamento: any) =>
          acompanhamento.idPaciente.id === id &&
          acompanhamento.idProfissional.id === profissionalId
      );
      setAcompanhamentoAssociado(false);

      if (acompanhamentoParaRemover) {
        await axios.delete(
          `https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento/${acompanhamentoParaRemover.id}`,
          { headers }
        );
        console.log("Acompanhamento removido com sucesso.");
      } else {
        console.log("Acompanhamento não encontrado para remoção.");
      }
    } catch (error: any) {
      console.error("Erro ao remover acompanhamento:", error.message);
    }
  };

  const handleCriarAcompanhamento = async (dtInicio: string, dtFim: string) => {
    try {
      const response = await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        {
          idProfissional: profissionalId,
          idPaciente: id,
          dtInicio,
          dtFim,
        },
        { headers }
      );
      setAcompanhamentoAssociado(true);
      console.log("Acompanhamento criado com sucesso.", response.data);
    } catch (error: any) {
      console.error("Erro ao criar acompanhamento:", error.message);
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        maxWidth: 500,
        flexGrow: 1,
        display: "flex",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <CustomButtonBase>
        {emojiIcon}
        <Typography
          style={{ width: "max-content" }}
          variant="body2"
          component="div"
        >
          {sexo}
        </Typography>
      </CustomButtonBase>

      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {nome}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {email}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                {!acompanhamentoAssociado ? (
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant="body2"
                    onClick={() =>
                      handleCriarAcompanhamento("2023-01-01", "2024-02-01")
                    }
                  >
                    Adicionar
                  </Typography>
                ) : (
                  <Typography
                    sx={{ cursor: "pointer" }}
                    variant="body2"
                    onClick={() => handleRemoverAcompanhamento()}
                  >
                    Remover
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GridItem;
