import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import './Table.css';

export interface Acompanhamento {
  id: string;
  idPaciente: {
    id: string;
    nome: string;
    cpf: string;
    sexo: string;
    email: string;
    senha: string;
    nascimento: string;
  };
  idProfissional: {
    id: string;
    nome: string;
    crm: string;
    especialidade: string;
    sexo: string;
    email: string;
    senha: string;
    nascimento: string;
  };
  dtInicio: string;
  dtFim: string;
}

const FollowProf: React.FC = () => {
  const [acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(
    null
  );
  const [dialogOpenDelete, setDialogOpenDelete] = useState<boolean>(false);
  const [dialogOpenFeedback, setDialogOpenFeedback] = useState<boolean>(false);
  const [nota, setNota] = useState<number>(0);
  const [texto, setTexto] = useState<string>("");

  const token = localStorage.getItem("token") || "";
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get<Acompanhamento[]>(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        {
          headers,
        }
      );
      setAcompanhamentos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    setSelectedAppointment(id);
    setDialogOpenDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.patch(
        `https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento/${selectedAppointment}/finalizar/${format(
          new Date(),
          "yyyy-MM-dd"
        )}`,
        null,
        { headers }
      );
      fetchData();
      setSelectedAppointment(null);
      setDialogOpenDelete(false);
    } catch (error: any) {
      console.error("Error deleting appointment:", error.message);
    }
  };

  const cancelDelete = () => {
    setSelectedAppointment(null);
    setDialogOpenDelete(false);
  };

  const openFeedbackDialog = (id: string) => {
    setSelectedAppointment(id);
    setDialogOpenFeedback(true);
  };

  const closeFeedbackDialog = () => {
    setSelectedAppointment(null);
    setNota(0);
    setTexto("");
    setDialogOpenFeedback(false);
  };

  const handleNotaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNota = parseInt(event.target.value, 10);
    setNota(newNota);
  };

  const handleTextoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTexto = event.target.value;
    setTexto(newTexto);
  };

  const handleConfirmFeedbackDialog = async () => {
    try {
      await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/feedback",
        {
          idAcompanhamento: selectedAppointment,
          nota,
          texto,
        },
        {
          headers,
        }
      );
      fetchData();
      closeFeedbackDialog();
      navigate("/feedback");
    } catch (error: any) {
      console.error("Error adding feedback:", error.message);
    }
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Médico</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Data de Início</TableCell>
              <TableCell>Data de Fim</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {acompanhamentos.map((acompanhamento) => (
              <TableRow key={acompanhamento.id}>
                <TableCell>{acompanhamento.idProfissional.nome}</TableCell>
                <TableCell>{acompanhamento.idProfissional.email}</TableCell>
                <TableCell>{acompanhamento.idProfissional.especialidade}</TableCell>
                <TableCell>{acompanhamento.dtInicio}</TableCell>
                <TableCell>{acompanhamento.dtFim}</TableCell>
                <TableCell style={{display:'flex', gap: '.5rem', flexWrap: 'wrap'}}>
            
                  <button onClick={() => openFeedbackDialog(acompanhamento.id)}
                    style={{ padding: '10px 15px', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(51, 51, 51)', borderRadius: ' 5px', color: ' rgb(51, 51, 51)', cursor: 'pointer', transition: 'backgroundColor 0.3s ease 0s, color 0.3s ease 0s,' }}>Feedback</button>

                  <button onClick={() => handleDelete(acompanhamento.id)}
                    style={{ padding: '10px 15px', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid red', borderRadius: ' 5px', color: ' rgb(51, 51, 51)', cursor: 'pointer', transition: 'backgroundColor 0.3s ease 0s, color 0.3s ease 0s,' }}>Encerrar</button>

                  {/* <Button
                    variant="outlined"
                    className="button delete-button"
                    onClick={() => openFeedbackDialog(acompanhamento.id)}
                  >
                    Feedback
                  </Button>
                  <Button
                    variant="outlined"
                    className="button delete-button"
                    onClick={() => handleDelete(acompanhamento.id)}
                  >
                    Encerrar
                  </Button> */}

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {acompanhamentos.length === 0 && <p>Nenhum acompanhamento cadastrado.</p>}

      <Dialog
        open={dialogOpenDelete}
        onClose={cancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar encerramento</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja encerrar este acompanhamento?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancelar</Button>
          <Button onClick={confirmDelete} autoFocus>
            Encerrar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
      open={dialogOpenFeedback}
      onClose={closeFeedbackDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Adicionar Feedback</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <TextField
            label="Nota"
            type="number"
            id="nota"
            name="nota"
            value={nota}
            onChange={handleNotaChange}
            fullWidth
            margin="dense"
            variant="outlined"
          />
          <TextField
            label="Texto"
            type="text"
            id="texto"
            name="texto"
            value={texto}
            onChange={handleTextoChange}
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeFeedbackDialog}>Cancelar</Button>
        <Button onClick={handleConfirmFeedbackDialog} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default FollowProf;
