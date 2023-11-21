import { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
    nome: string;
    email: string;
    sexo: string;
    nascimento: string;
  }

const useSettings = () => {
  const [dadosDoUsuario, setDadosDoUsuario] = useState<UserData>({
    nome: '',
    email: '',
    sexo: '',
    nascimento: '2000-12-01',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ifpi-projeto-integrador-ii.onrender.com/paciente/46858068-e8d6-4ff6-b732-16d69163e477");
        setDadosDoUsuario(response.data);
      } catch (error: any) {
        console.error("Erro ao obter dados do usuário:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: { target: { value: any; }; }, field: any) => {
    setDadosDoUsuario({
      ...dadosDoUsuario,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch("https://ifpi-projeto-integrador-ii.onrender.com/paciente/46858068-e8d6-4ff6-b732-16d69163e477", dadosDoUsuario);
      console.log("Usuário alterado com sucesso:", response.data);
    } catch (error: any) {
      console.error("Erro ao alterar usuário:", error.message);
    }
  };

  return {
    dadosDoUsuario,
    handleChange,
    handleSubmit,
  };
};

export default useSettings;
