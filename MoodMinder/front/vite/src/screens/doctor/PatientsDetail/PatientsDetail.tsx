import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SideBarDoctor from "../../../components/SideBar/SideBarDoctor";

interface Emocao {
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
  categoria: string;
  intensidade: number;
  descricao: string;
  contexto: string;
  privacidade: string;
  data: string;
}

export default function PacientDetails() {
  const [emocoes, setEmocoes] = useState<Emocao[]>([]);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get<Emocao[]>(
        "https://ifpi-projeto-integrador-ii.onrender.com/profissional/emocoes-pacientes",
        { headers }
      );
      setEmocoes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Organiza as emoções por nome do paciente
  const emocoesPorPaciente: Record<string, Emocao[]> = {};
  emocoes.forEach((emocao) => {
    const nomePaciente = emocao.idPaciente.nome;
    if (!emocoesPorPaciente[nomePaciente]) {
      emocoesPorPaciente[nomePaciente] = [];
    }
    emocoesPorPaciente[nomePaciente].push(emocao);
  });

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <SideBarDoctor />
      <div className="content-container">
        <h1>Emoções dos Pacientes</h1>
        {Object.keys(emocoesPorPaciente).map((nomePaciente) => (
          <div
            className="emocoes table-container" // Adicione a classe de estilo específica
            style={{ maxHeight: "70vh" }}
            key={nomePaciente}
          >
            <h2>{nomePaciente}</h2>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Intensidade</TableCell>
                    <TableCell>Contexto</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Data</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {emocoesPorPaciente[nomePaciente].map((emocao) => (
                    <TableRow key={emocao.id}>
                      <TableCell>{emocao.categoria}</TableCell>
                      <TableCell>{emocao.intensidade}</TableCell>
                      <TableCell>{emocao.contexto}</TableCell>
                      <TableCell>{emocao.descricao}</TableCell>
                      <TableCell>{emocao.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
