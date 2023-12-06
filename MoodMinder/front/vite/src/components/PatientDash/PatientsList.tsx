import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { Acompanhamento } from "../../components/ProfissionalDash/FollowProf";
import { jwtDecode } from "jwt-decode";

interface Patient {
  id: string;
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
}

const ITEMS_PER_PAGE = 2;

const ComplexGrid: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const token = localStorage.getItem("token") ?? "";
  const decoded = jwtDecode(token);
  const userId = decoded.sub ?? "";

  const [_acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);

  const fetchPatients = async () => {
    try {
      const response = await axios.get<Patient[]>(
        "https://ifpi-projeto-integrador-ii.onrender.com/paciente",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
          },
        }
      );
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAcompanhamento = async (idPaciente: string) => {
    try {
      const response = await axios.post<Acompanhamento>(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        {
          idProfissional: userId,
          idPaciente,
          dtInicio: new Date(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`,
          },
        }
      );
      setAcompanhamentos((prevAcompanhamentos) => [
        ...prevAcompanhamentos,
        response.data,
      ]);
      window.location.reload();
    } catch (error: any) {
      console.error("Erro ao criar acompanhamento:", error.message);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const totalPages = Math.ceil(patients.length / ITEMS_PER_PAGE);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
  };

  const renderPatients = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return patients.slice(startIndex, endIndex).map((patient) => (
      <tr key={patient.id}>
        <td>{patient.nome}</td>
        <td>{patient.cpf}</td>
        <td>{patient.sexo}</td>
        <td>{patient.email}</td>
        <td>
          <button
            className="button add-button"
            onClick={() => handleAddAcompanhamento(patient.id)}
          >
            Adicionar Acompanhamento
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Sexo</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderPatients()}</tbody>
      </table>

      {totalPages > 1 && (
        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="pagination"
        >
          <IconButton
            onClick={(event) => handlePageChange(event, currentPage - 1)}
            disabled={currentPage === 1}
          ></IconButton>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
          <IconButton
            onClick={(event) => handlePageChange(event, currentPage + 1)}
            disabled={currentPage === totalPages}
          ></IconButton>
        </Stack>
      )}
    </div>
  );
};

export default ComplexGrid;
