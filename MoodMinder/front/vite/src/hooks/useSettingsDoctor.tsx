import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

interface UserData {
  nome: string;
  email: string;
  sexo: string;
  nascimento: string;
}

const useSettings = () => {
  const token = localStorage.getItem("token") ?? "";
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const decoded = jwtDecode(token);
  const id = decoded.sub ?? ""; //não aceita undefined

  const [dadosDoUsuario, setDadosDoUsuario] = useState<UserData>({
    nome: "",
    email: "",
    sexo: "",
    nascimento: "2000-12-01",
  });

  const navegate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ifpi-projeto-integrador-ii.onrender.com/profissional/${id}`,
          { headers }
        );
        setDadosDoUsuario(response.data);
      } catch (error: any) {
        console.error("Erro ao obter dados do usuário:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: { target: { value: any } }, field: any) => {
    setDadosDoUsuario({
      ...dadosDoUsuario,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `https://ifpi-projeto-integrador-ii.onrender.com/profissional/${id}`,
        dadosDoUsuario,
        { headers }
      );
      navegate("/profissional/acompanhamento")
      // console.log("Usuário alterado com sucesso:", response.data);
    } catch (error: any) {
      console.error("Erro ao alterar usuário:", error.message);
    }
  };

  const handleRemover = async () => {
    // console.log("Delete pressionado");
    try {
      await axios.delete(
        `https://ifpi-projeto-integrador-ii.onrender.com/profissional/${id}`,
        { headers }
      );
      navegate("profissional/acompanhamento")
    } catch (error: any) {
      console.error("Erro ao remover profissional:", error.message);
    }
  };

  return {
    dadosDoUsuario,
    handleChange,
    handleSubmit,
    handleRemover,
  };
};

export default useSettings;
