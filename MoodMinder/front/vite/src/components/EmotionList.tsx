import GridItem, { GridItemProps } from "./EmotionItem";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ComplexGrid = () => {
  const [emotions, setEmotions] = useState<GridItemProps[]>([]);
  const { token } = useAuth();
  console.log(token);
  
  const fetchData = async () => {
    try {
      console.log(token);
      
      const response = await axios.get("https://ifpi-projeto-integrador-ii.onrender.com/emocao", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      setEmotions(response.data);
    } catch (error) {
      // console.log(`Authorization: Bearer ${token}`);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 6000);
    return () => clearInterval(intervalId);
  }, [token]);

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