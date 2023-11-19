import { ChangeEvent, useEffect, useState } from 'react';
import BottomBar from '../../components/BottomBar';
import SubmitButton from '../../components/SubmitButton';
import axios from 'axios';

const Settings = () => {
  const [dadosDoUsuario, setDadosDoUsuario] = useState({
    nome: '',
    email: '',
    sexo: '',
    // nascimento: '2000-12-01',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ifpi-projeto-integrador-ii.onrender.com/paciente/46858068-e8d6-4ff6-b732-16d69163e477'
        );
        setDadosDoUsuario(response.data);
      } catch (error: any) {
        console.error('Erro ao obter dados do usuário:', error.message);
      }
    };

    fetchData();
  }, []);

//   const formatarData = (data: string | number | Date) => {
//     const dataFormatada = new Date(data);
//     const ano = dataFormatada.getFullYear();
//     const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
//     const dia = dataFormatada.getDate().toString().padStart(2, '0');
//     return `${ano}-${mes}-${dia}`;
//   };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    field: string
  ) => {
    setDadosDoUsuario({
      ...dadosDoUsuario,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
    //   const dataFormatada = formatarData(dadosDoUsuario.nascimento);
      const response = await axios.patch(
        `https://ifpi-projeto-integrador-ii.onrender.com/paciente/46858068-e8d6-4ff6-b732-16d69163e477`,
        dadosDoUsuario
        // { ...dadosDoUsuario, nascimento: dataFormatada }
      );
      console.log('Usuário alterado com sucesso:', response.data);
    } catch (error: any) {
      console.error('Erro ao alterar usuário:', error.message);
    }
  };

  const [editMode, setEditMode] = useState(false);
  const [notificationsExpanded, setNotificationsExpanded] = useState(false);
  const [trackingExpanded, setTrackingExpanded] = useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleNotificationsClick = () => {
    setNotificationsExpanded(!notificationsExpanded);
  };

  const handleTrackingClick = () => {
    setTrackingExpanded(!trackingExpanded);
  };

  return (
    <div>
      <div
        onClick={handleEditClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        <span>Perfil</span>
        <span style={{ marginLeft: '5px', fontSize: '20px' }}>
          {editMode ? '🔽' : '▶️'}
        </span>
      </div>

      {editMode && (
        <div>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={dadosDoUsuario.nome}
              onChange={(e) => handleChange(e, 'nome')}
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              value={dadosDoUsuario.email}
              onChange={(e) => handleChange(e, 'email')}
            />
          </div>
          <div>
            <label>Gênero:</label>
            <select
              value={dadosDoUsuario.sexo}
              onChange={(e) => handleChange(e, 'sexo')}
            >
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>
          {/* <div>
            <label>Nascimento:</label>
            <input
              type="date"
              value={dadosDoUsuario.nascimento}
              onChange={(e) => handleChange(e, 'nascimento')}
            />
          </div> */}
          <SubmitButton onClick={handleSubmit} label={'Salvar Alterações'} />
        </div>
      )}

      <h3
        onClick={handleNotificationsClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        Notificações
        <span style={{ marginLeft: '5px', fontSize: '20px' }}>
          {notificationsExpanded ? '🔽' : '▶️'}
        </span>
      </h3>
      {notificationsExpanded && (
        <div>
          <p>Configurações de Notificações</p>
        </div>
      )}

      <h3
        onClick={handleTrackingClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        Acompanhamentos
        <span style={{ marginLeft: '5px', fontSize: '20px' }}>
          {trackingExpanded ? '🔽' : '▶️'}
        </span>
      </h3>
      {trackingExpanded && (
        <div>
          <p>Configurações de Acompanhamentos</p>
        </div>
      )}

      <SubmitButton
        onClick={() => {
          console.log('Logout');
        }}
        label={'Logout'}
      />
      <BottomBar />
    </div>
  );
};

export default Settings;
