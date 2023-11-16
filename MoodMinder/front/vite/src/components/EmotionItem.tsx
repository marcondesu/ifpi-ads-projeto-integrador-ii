import {
  styled,
  ButtonBase,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import axios from "axios";
import {
  HiOutlineFaceSmile,
  HiOutlineFaceFrown,
  HiOutlineLockClosed,
  HiOutlineUsers,
} from "react-icons/hi2";

const CustomButtonBase = styled(ButtonBase)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  fontSize: "3rem",
  padding: "1rem",
  cursor: "default",
});

export interface GridItemProps {
  id: string;
  icon: React.ReactNode;
  categoria: string;
  intensidade: number;
  descricao: string;
  contexto: string;
  privacidade: string;
  data: string;
}

const GridItem: React.FC<GridItemProps> = ({
  id,
  categoria,
  intensidade,
  // descricao,
  contexto,
  privacidade,
  data,
}) => {
  const emojiIcon =
    intensidade > 5 ? <HiOutlineFaceSmile /> : <HiOutlineFaceFrown />;
    const emojiPrivacidade = privacidade === "publico" ? (
      <HiOutlineUsers />
    ) : (
      <HiOutlineLockClosed />
    );
  const handleRemover = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/emocao/${id}`);

    } catch (error: any) {
      console.error("Erro ao remover emoção:", error.message);
    }
  };

  // const handleEditar = async () => {
  // };

  const handleMudarPrivacidade = async (id: string) => {
    try {
      await axios.patch(`http://localhost:3000/emocao/${id}/mudar-privacidade`);
    } catch (error: any) {
      console.error("Erro ao mudar a privacidade da emoção:", error.message);
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
          {data}
        </Typography>
      </CustomButtonBase>

      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div
                className="titulo"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography gutterBottom variant="subtitle1" component="div">
                  {categoria}
                </Typography>
                {emojiPrivacidade}
              </div>
              <Typography variant="body2" gutterBottom>
                {contexto}
              </Typography>
            </Grid>

            <Grid item>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={() => handleRemover(id)}
                >
                  Remover
                </Typography>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  Editar
                </Typography>
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                  onClick={() => handleMudarPrivacidade(id)}
                >
                  Mudar privacidade
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GridItem;
