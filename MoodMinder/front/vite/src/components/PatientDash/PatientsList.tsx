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
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { Acompanhamento } from "../../components/ProfissionalDash/FollowProf";

interface Patient {
  id: string;
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
}

const ComplexGrid: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

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

  const renderPatients = () => {
    return patients.map((patient) => (
      <TableRow key={patient.id}>
        <TableCell>{patient.nome}</TableCell>
        <TableCell>{patient.cpf}</TableCell>
        <TableCell>{patient.sexo}</TableCell>
        <TableCell>{patient.email}</TableCell>
        <TableCell>
          <button
            onClick={() => handleAddAcompanhamento(patient.id)}
            style={{
              padding: "10px 15px",
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid green",
              borderRadius: "5px",
              color: "rgb(51, 51, 51)",
              cursor: "pointer",
              transition: "backgroundColor 0.3s ease 0s, color 0.3s ease 0s",
            }}
          >
            Adicionar Acompanhamento
          </button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderPatients()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComplexGrid;
