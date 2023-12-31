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
  } from "@mui/material";import SideBarDoctor from "../../../components/SideBar/SideBarDoctor";

interface Feedback {
    data: string;
    id: string;
    idAcompanhamento: any;
    nota: number;
    texto: string;
}

const PFeedbackList: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [filteredFeedbacks, setFilteredFeedbacks] = useState<Feedback[]>([]);
    const [filterDate, setFilterDate] = useState("");
    const [filterNomePaciente, setfilterNomePaciente] = useState("");
  
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const fetchData = async () => {
        try {
            const response = await axios.get<Feedback[]>(
                "https://ifpi-projeto-integrador-ii.onrender.com/feedback",
                { headers }
            );
            setFeedbacks(response.data);
            setFilteredFeedbacks(response.data);
            // console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleFilter = () => {
        let filteredData = feedbacks;
    
        if (filterDate) {
          filteredData = filteredData.filter((item) =>
            item.data.includes(filterDate)
          );
        }
    
        if (filterNomePaciente) {
          filteredData = filteredData.filter((item) =>
            item.idAcompanhamento.idPaciente.nome
              .toLowerCase()
              .includes(filterNomePaciente.toLowerCase())
          );
        }
    
        setFilteredFeedbacks(filteredData);
      };
    

    return (
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <SideBarDoctor />
      <div className="content-container">
        <h1>Comentários enviados</h1>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            padding: "0px 0px 1rem 0px",
          }}
        >
          <div>
            <TextField
              label="Data"
              variant="outlined"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Paciente"
              variant="outlined"
              value={filterNomePaciente}
              onChange={(e) => setfilterNomePaciente(e.target.value)}
            />
          </div>
          <div>
            <button className="filter-button" onClick={handleFilter}>Aplicar Filtros</button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            margin: "0 auto",
            flexWrap: "wrap",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Nome do Paciente</TableCell>
                  <TableCell>Nota</TableCell>
                  <TableCell>Texto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredFeedbacks.map((feedback) => (
                  <TableRow key={feedback.id}>
                    <TableCell>{feedback.data}</TableCell>
                    <TableCell>
                      {feedback.idAcompanhamento.idPaciente.nome}
                    </TableCell>
                    <TableCell>{feedback.nota}</TableCell>
                    <TableCell>{feedback.texto}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
};

export default PFeedbackList;
