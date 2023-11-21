import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Emotion {
  idPaciente: string;
  intensidade: number;
  categoria: string;
  descricao: string;
  contexto: string;
  privacidade: string;
}

function useEmotion() {
  const [emotion, setEmotion] = useState<Emotion>({
    idPaciente: "46858068-e8d6-4ff6-b732-16d69163e477",
    intensidade: 0,
    categoria: "",
    descricao: "",
    contexto: "",
    privacidade: "privada",
  });

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
      const response = await axios.post(
        "https://ifpi-projeto-integrador-ii.onrender.com/emocao",
        emotion
      );
      console.log("Emoção cadastrada com sucesso:", response.data);
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
