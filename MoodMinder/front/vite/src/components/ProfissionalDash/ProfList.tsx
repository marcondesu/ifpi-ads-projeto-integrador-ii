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
  // Button,
} from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { Acompanhamento } from "./FollowProf";

interface Professional {
  id: string;
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
}

const ComplexGrid: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  const token = localStorage.getItem("token") ?? "";
  const decoded = jwtDecode(token);
  const userId = decoded.sub ?? "";

  const [_acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);

  const fetchProfessionals = async () => {
    try {
      const response = await axios.get<Professional[]>(
        "https://ifpi-projeto-integrador-ii.onrender.com/profissional"
      );
      setProfessionals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAcompanhamento = async (idProfissional: string) => {
    try {
      const response = await axios.post<Acompanhamento>(
        "https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento",
        {
          idProfissional,
          idPaciente: userId,
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
    fetchProfessionals();
  }, []);

  const renderProfessionals = () => {
    return professionals.map((professional) => (
      <TableRow key={professional.id}>
        <TableCell>{professional.nome}</TableCell>
        <TableCell>{professional.crm}</TableCell>
        <TableCell>{professional.especialidade}</TableCell>
        <TableCell>{professional.email}</TableCell>
        <TableCell>
          <button onClick={() => handleAddAcompanhamento(professional.id)}
            style={{ padding: '10px 15px', backgroundColor: 'rgb(255, 255, 255)', border: '1px solid rgb(51, 51, 51)', borderRadius: ' 5px', color: ' rgb(51, 51, 51)', cursor: 'pointer', transition: 'backgroundColor 0.3s ease 0s, color 0.3s ease 0s,' }}>Adicionar Acompanhamento</button>

          {/* <Button
            variant="outlined"
            className="button add-button"
          >

          </Button> */}
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
              <TableCell>CRM</TableCell>
              <TableCell>Especialidade</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderProfessionals()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComplexGrid;
