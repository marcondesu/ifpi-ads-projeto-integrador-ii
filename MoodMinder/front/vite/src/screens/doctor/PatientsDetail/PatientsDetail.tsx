import axios from "axios";
import { useEffect } from "react";

export default function PacientDetails() {
  interface Emocao {
    nome: "";
    categoria: "";
    privacidade: "";
    descricao: "";
    contexto: "";
    data: "";
  }

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ifpi-projeto-integrador-ii.onrender.com/profissional/emocoes-pacientes",
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}
