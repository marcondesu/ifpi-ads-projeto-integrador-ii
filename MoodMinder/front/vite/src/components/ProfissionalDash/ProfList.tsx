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
    // const intervalId = setInterval(fetchData, 100);
    // return () => clearInterval(intervalId);
  }, []);
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", // Ou ajuste os valores conforme necessário
      gap: "1rem",
      margin: "0 auto", 
      flexWrap: "wrap"
    }} 
    className="element-container"
    >
      {professional.map((professional) => (
        <GridItem key={professional.id} {...professional} />
      ))}
    </div>
  );
};

export default ComplexGrid;
