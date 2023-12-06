import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../ProfissionalDash/Table.css";

const ITEMS_PER_PAGE = 2;

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
  const [currentPage, setCurrentPage] = useState(1);

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

  const handleDelete = async (id: string) => {
    setSelectedAppointment(id);
    setDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento/${selectedAppointment}`,
        {
          headers,
        }
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
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentAcompanhamentos = acompanhamentos.slice(startIndex, endIndex);

    return currentAcompanhamentos.map((acompanhamento) => (
      <tr key={acompanhamento.id}>
        <td>{acompanhamento.idPaciente.nome}</td>
        <td>{acompanhamento.idPaciente.email}</td>
        <td>{acompanhamento.idPaciente.sexo}</td>
        <td>{acompanhamento.dtInicio}</td>
        <td>{acompanhamento.dtFim}</td>
        <td>
          <button
            className="button delete-button"
            onClick={() => handleDelete(acompanhamento.id)}
          >
            Deletar
          </button>
        </td>
      </tr>
    ));
  };

  const changePage = (newPage: number) => {
    if (newPage > 0 && newPage <= getTotalPages()) {
      setCurrentPage(newPage);
    }
  };

  const getTotalPages = () =>
    Math.ceil(acompanhamentos.length / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Email</th>
            <th>Sexo</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderAcompanhamentos()}</tbody>
      </table>

      {acompanhamentos.length === 0 && <p>Nenhum acompanhamento cadastrado.</p>}

      <Dialog
        open={dialogOpen}
        onClose={cancelDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmar exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja excluir este acompanhamento?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancelar</Button>
          <Button onClick={confirmDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      {getTotalPages() > 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="pagination"
        >
          <IconButton
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          ></IconButton>
          <Pagination
            count={getTotalPages()}
            page={currentPage}
            onChange={(_event, value) => changePage(value)}
          />
          <IconButton
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === getTotalPages()}
          ></IconButton>
        </Stack>
      )}
    </div>
  );
};

export default FollowPatient;
