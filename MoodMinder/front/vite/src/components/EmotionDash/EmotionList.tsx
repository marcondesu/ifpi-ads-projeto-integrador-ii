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
      // console.log(response.data);
      setEmotions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    // const intervalId = setInterval(fetchData, 3600);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: 'center',
        gap: "1rem",
        margin: "0 auto",
        flexWrap: "wrap"
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
