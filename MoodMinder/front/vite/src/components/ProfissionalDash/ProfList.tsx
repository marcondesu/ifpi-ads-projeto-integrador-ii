import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Acompanhamento } from './FollowProf';
import { jwtDecode } from "jwt-decode";
import './Table.css'
interface ProfessionalWithAcompanhamento extends ProfissionalProps {
  idAcompanhamento?: string; // Assuming you have an ID for the associated appointment
}

interface ProfissionalProps {
  id: string;
  icon: React.ReactNode;
  nome: string;
  especialidade: string;
  crm: string;
  email: string;
}

const ComplexGrid: React.FC = () => {
  const token = localStorage.getItem("token") ?? "";
  const decoded = jwtDecode(token);
  const id = decoded.sub ?? ""; //não aceita undefined
  const [professionals, setProfessionals] = useState<ProfessionalWithAcompanhamento[]>([]);
  const [_acompanhamentos, setAcompanhamentos] = useState<Acompanhamento[]>([]);

  const fetchProfessionals = async () => {
    try {
      const response = await axios.get<ProfessionalWithAcompanhamento[]>('https://ifpi-projeto-integrador-ii.onrender.com/profissional');
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
          idPaciente: id, // Replace with the actual patient ID
          dtInicio: new Date(),
          dtFim: '2025-11-23', // Set the initial value for dtFim, or you can leave it empty if it's not mandatory
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
          },
        }
      );
      setAcompanhamentos((prevAcompanhamentos) => [...prevAcompanhamentos, response.data]);
      window.location.reload();
      // console.log('Acompanhamento criado com sucesso.', response.data);
    } catch (error: any) {
      console.error('Erro ao criar acompanhamento:', error.message);
    }
  };

  useEffect(() => {
    fetchProfessionals();
  }, []);

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
        <tbody>
          {professionals.map((professional) => (
            <tr key={professional.id}>
              <td>{professional.nome}</td>
              <td>{professional.crm}</td>
              <td>{professional.especialidade}</td>
              <td>{professional.email}</td>
              <td>
                <button className='button add-button' onClick={() => handleAddAcompanhamento(professional.id)}>Adicionar Acompanhamento</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplexGrid;
