import GridItem, { ProfissionalProps } from "./ProfItem";
import axios from "axios";
import { useState, useEffect } from "react";

const ComplexGrid = () => {
  const [professional, setprofessional] = useState<ProfissionalProps[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://ifpi-projeto-integrador-ii.onrender.com/profissional");
      setprofessional(response.data);
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
      {professional.map((professional) => (
        <GridItem key={professional.id} {...professional} />
      ))}
    </div>
  );
};

export default ComplexGrid;
