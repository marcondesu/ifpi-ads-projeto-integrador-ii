import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css'

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
  const [selectedAppointment, setSelectedAppointment] = useState<string | null>(null);

  const token = localStorage.getItem('token') ?? '';
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get<Acompanhamento[]>('https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento', {
        headers,
      });
      setAcompanhamentos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://ifpi-projeto-integrador-ii.onrender.com/acompanhamento/${id}`, {
        headers,
      });
      // After deletion, fetch updated data
      fetchData();
      setSelectedAppointment(null)
    } catch (error: any) {
      console.error('Error deleting appointment:', error.message);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Médico</th>
            <th>Email</th>
            <th>Especialidade</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {acompanhamentos.map((acompanhamento) => (
            <tr key={acompanhamento.id}>
              <td>{acompanhamento.idProfissional.nome}</td>
              <td>{acompanhamento.idProfissional.email}</td>
              <td>{acompanhamento.idProfissional.especialidade}</td>
              <td>{acompanhamento.dtInicio}</td>
              <td>{acompanhamento.dtFim}</td>
              <td>
                <button className='button delete-button' onClick={() => setSelectedAppointment(acompanhamento.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {acompanhamentos.length === 0 && (
        <p>Nenhum acompanhamento cadastrado.</p>
      )}

      {selectedAppointment && (
        <div>
          <p>Confirmar exclusão do acompanhamento?</p>
          <button className='button delete-button' onClick={() => handleDelete(selectedAppointment)}>Sim</button>
          <button className='button confirmation' onClick={() => setSelectedAppointment(null)}>Não</button>
        </div>
      )}
    </div>
  );
};

export default FollowProf;
