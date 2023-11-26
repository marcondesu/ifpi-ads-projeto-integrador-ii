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
      console.log(response.data);

      setEmotions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: 500,
        flexDirection: "column",
        gap: "1rem",
        paddingTop: "2rem",
        paddingBottom: "4rem",
      }}
    >
      {emotions.map((emotion) => (
        <GridItem key={emotion.id} {...emotion} />
      ))}
    </div>
  );
};

export default ComplexGrid;
