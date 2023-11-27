import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import BottomBar from "../../../components/SideBar/SideBarPatient";
import SubmitButton from "../../../components/SubmitButton";
import FormField from "../../../components/FormField/FormField";

export default function PacientDetails() {
  const { id } = useParams();
  const [paciente, setpaciente] = useState({
    nome: "",
    categoria: "",
    privacidade: "",
    descricao: "",
    contexto: "",
    data: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ifpi-projeto-integrador-ii.onrender.com/paciente/${id}`
        );
        setpaciente(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setpaciente({
      ...paciente,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `https://ifpi-projeto-integrador-ii.onrender.com/paciente/${id}`,
        paciente
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao editar emoção:", error);
    }
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <h1>Detalhes da emoção</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
            
        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={paciente.categoria}
          onChange={handleInputChange}
        />
        <FormField
          label="Privacidade"
          type="text"
          name="privacidade"
          value={paciente.privacidade}
          onChange={handleInputChange}
        />
        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={paciente.descricao}
          onChange={handleInputChange}
        />
        <FormField
          label="Situação"
          type="text"
          name="contexto"
          value={paciente.contexto}
          onChange={handleInputChange}
        />
        <FormField
          label="Data"
          type="text"
          name="data"
          value={paciente.data}
          onChange={handleInputChange}
        />
        </div>
        <SubmitButton onClick={handleSubmit} label={"Salvar edições"} />
      </form>
      <BottomBar />
    </div>
  );
}
