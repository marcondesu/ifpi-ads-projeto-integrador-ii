import GridItem, { GridItemProps } from "./EmotionItem";
import axios from "axios";
import { useState, useEffect } from "react";

const ComplexGrid = () => {
  const [emotions, setEmotions] = useState<GridItemProps[]>([]);

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ifpi-projeto-integrador-ii.onrender.com/emocao",
        { headers }
      );
      setEmotions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        gap: "1rem",
        margin: "0 auto",
        flexWrap: "wrap",
        maxHeight: "55vh", // Defina a altura máxima desejada
        overflowY: "auto",  // Adiciona scroll quando necessário
      }}
    >
      {emotions.map((emotion) => (
        <GridItem key={emotion.id} {...emotion} />
      ))}

      {emotions.length === 0 && (
        <p>Nenhuma emoção cadastrada.</p>
      )}
    </div>
  );
};

export default ComplexGrid;
