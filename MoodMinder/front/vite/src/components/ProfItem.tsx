import {
  styled,
  ButtonBase,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi2";

const CustomButtonBase = styled(ButtonBase)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "3rem",
  padding: "1rem",
  cursor: "default",
});

export interface ProfissionalProps {
  id: string;
  icon: React.ReactNode;
  nome: string;
  especialidade: string;
  crm: string;
  email: string;
}

const GridItem: React.FC<ProfissionalProps> = ({
  id,
  nome,
  especialidade,
  email,
  crm,
}) => {
  const emojiIcon = <HiOutlineUsers />;
  const [acompanhamento, setAcompanhamento] = useState(false)

  const handleRemoverAcompanhamento = async (
    idPaciente: string,
  ) => {
    try {
      const response = await axios.get(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento"
      );

      const acompanhamentos = response.data;
      console.log(acompanhamentos);

      const acompanhamentoParaRemover = acompanhamentos.find(
        (acompanhamento: any) =>
          acompanhamento.idPaciente.id === idPaciente &&
          acompanhamento.idProfissional.id === id
      );

      if (acompanhamentoParaRemover) {
        await axios.delete(
          `https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento/${acompanhamentoParaRemover.id}`
        );
        setAcompanhamento(false)
        console.log("Acompanhamento removido com sucesso.");
      } else {
        console.log("Acompanhamento não encontrado para remoção.");
      }
    } catch (error: any) {
      console.error("Erro ao remover acompanhamento:", error.message);
    }
  };

  const handleCriarAcompanhamento = async (
    idPaciente: string,
    dtInicio: string,
    dtFim: string
  ) => {
    try {
      const response = await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        {
          idProfissional: id,
          idPaciente,
          dtInicio,
          dtFim,
        }
      );
      setAcompanhamento(true)
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
          {crm}
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
              <Typography variant="body2" gutterBottom>
                {especialidade}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                {acompanhamento ?
                  (
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() =>
                        handleRemoverAcompanhamento(
                          "46858068-e8d6-4ff6-b732-16d69163e477",
                        )
                      }
                    >
                      Remover
                    </Typography>
                  ) : (
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      onClick={() =>
                        handleCriarAcompanhamento(
                          "46858068-e8d6-4ff6-b732-16d69163e477",
                          "2023-01-01",
                          "2024-02-01"
                        )
                      }
                    >
                      Adicionar
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
