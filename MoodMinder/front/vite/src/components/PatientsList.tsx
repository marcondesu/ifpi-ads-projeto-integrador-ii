import GridItem, { PatientProps } from "./PatientItem";
import axios from "axios";
import { useState, useEffect } from "react";

const ComplexGrid = () => {
  const [patient, setpatient] = useState<PatientProps[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://ifpi-projeto-integrador-ii.onrender.com/paciente");
      setpatient(response.data);
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
      {patient.map((patient) => (
        <GridItem key={patient.id} {...patient} />
      ))}
    </div>
  );
};

export default ComplexGrid;
