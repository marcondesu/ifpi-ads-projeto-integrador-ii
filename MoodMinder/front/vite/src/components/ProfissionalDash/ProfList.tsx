import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { jwtDecode } from "jwt-decode";
import { Acompanhamento } from './FollowProf';

interface Professional {
  id: string;
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
}

const ITEMS_PER_PAGE = 2;

const ComplexGrid: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const token = localStorage.getItem("token") ?? "";
  const decoded = jwtDecode(token);
  const userId = decoded.sub ?? "" //não aceita undefined

  const [_acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);

  const fetchProfessionals = async () => {
    try {
      const response = await axios.get<Professional[]>('https://ifpi-projeto-integrador-ii.onrender.com/profissional');
      setProfessionals(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAcompanhamento = async (idProfissional: string) => {
    try {
      const response = await axios.post<Acompanhamento>(
        'https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento',
        {
          idProfissional,
          idPaciente: userId,
          dtInicio: new Date(),
          dtFim: null,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
          },
        }
      );
      setAcompanhamentos((prevAcompanhamentos) => [...prevAcompanhamentos, response.data]);
      window.location.reload();
    } catch (error: any) {
      console.error('Erro ao criar acompanhamento:', error.message);
    }
  };
  useEffect(() => {
    fetchProfessionals();
  }, []);

  const totalPages = Math.ceil(professionals.length / ITEMS_PER_PAGE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderProfessionals = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return professionals.slice(startIndex, endIndex).map((professional) => (
      <tr key={professional.id}>
        <td>{professional.nome}</td>
        <td>{professional.crm}</td>
        <td>{professional.especialidade}</td>
        <td>{professional.email}</td>
        <td>
          <button
            className="button add-button"
            onClick={() => handleAddAcompanhamento(professional.id)}
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
            <th>CRM</th>
            <th>Especialidade</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{renderProfessionals()}</tbody>
      </table>

      {totalPages > 1 && (
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center" className="pagination">
          <IconButton onClick={(event) => handlePageChange(event, currentPage - 1)} disabled={currentPage === 1}>
          </IconButton>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
          <IconButton onClick={(event) => handlePageChange(event, currentPage + 1)} disabled={currentPage === totalPages}>
          </IconButton>
        </Stack>
      )}
    </div>
  );
};

export default ComplexGrid;
