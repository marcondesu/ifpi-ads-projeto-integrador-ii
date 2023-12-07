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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { format } from "date-fns";

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

const FollowPatient: React.FC = () => {
  const [acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const token = localStorage.getItem("token") || "";
  const headers = {
    Authorization: `Bearer ${token}`,
  };

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

  const handleFinish = async (id: string) => {
    setSelectedAppointment(id);
    setDialogOpen(true);
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
      setDialogOpen(false);
    } catch (error: any) {
      console.error("Error deleting appointment:", error.message);
    }
  };
  
  const cancelDelete = () => {
    setSelectedAppointment(null);
    setDialogOpen(false);
  };

  const renderAcompanhamentos = () => {
    return acompanhamentos.map((acompanhamento) => (
      <TableRow key={acompanhamento.id}>
        <TableCell>{acompanhamento.idPaciente.nome}</TableCell>
        <TableCell>{acompanhamento.idPaciente.email}</TableCell>
        <TableCell>{acompanhamento.idPaciente.sexo}</TableCell>
        <TableCell>{acompanhamento.dtInicio}</TableCell>
        <TableCell>{acompanhamento.dtFim}</TableCell>
        <TableCell>
          <button
            className="button delete-button"
            onClick={() => handleFinish(acompanhamento.id)}
            style={{
              padding: "10px 15px",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid red",
              borderRadius: "5px",
              color: "rgb(51, 51, 51)",
              cursor: "pointer",
              transition: "backgroundColor 0.3s ease 0s, color 0.3s ease 0s",
            }}
          >
            Encerrar
          </button>
        </TableCell>
      </TableRow>
    ));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Paciente</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Data de Início</TableCell>
              <TableCell>Data de Fim</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderAcompanhamentos()}</TableBody>
        </Table>
      </TableContainer>

      {acompanhamentos.length === 0 && <p>Nenhum acompanhamento cadastrado.</p>}

      <Dialog
        open={dialogOpen}
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
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FollowPatient;
