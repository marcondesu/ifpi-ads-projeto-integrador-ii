import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface Emotion {
  idPaciente: string;
  intensidade: number;
  categoria: string;
  descricao: string;
  contexto: string;
  privacidade: string;
}

function useEmotion() {
  const token = localStorage.getItem("token") ?? "";
  const decoded = jwtDecode(token);
  const userId = decoded.sub ?? "" //não aceita undefined

  const [emotion, setEmotion] = useState<Emotion>({
    idPaciente: userId,
    intensidade: 0,
    categoria: "",
    descricao: "",
    contexto: "",
    privacidade: "privada",
  });

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setEmotion({
      ...emotion,
      [field]: e.target.value,
    });
  };

  const handleSliderChange = (intensidade: number) => {
    setEmotion({
      ...emotion,
      intensidade,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/emocao",
        emotion,
        {headers}
      );
      // console.log("Emoção cadastrada com sucesso:", response.data);
      navigate("/historico");
    } catch (error: any) {
      console.error("Erro ao cadastrar emoção:", error.message);
    }
  };

  return {
    emotion,
    handleChange,
    handleSliderChange,
    handleSubmit,
  };
}

export default useEmotion;
