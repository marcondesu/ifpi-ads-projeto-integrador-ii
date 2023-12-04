import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import BottomBar from "../../../components/SideBar/SideBarPatient";
import SubmitButton from "../../../components/SubmitButton";
import FormField from "../../../components/FormField/FormField";

export default function EmotionDetails() {
  const { id } = useParams();
  const [emocao, setEmocao] = useState({
    nome: "",
    categoria: "",
    privacidade: "",
    descricao: "",
    contexto: "",
    data: "",
  });

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ifpi-projeto-integrador-ii.onrender.com/emocao/${id}`,
          { headers }
        );
        setEmocao(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setEmocao({
      ...emocao,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `https://ifpi-projeto-integrador-ii.onrender.com/emocao/${id}`,
        emocao,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao editar emoção:", error);
    }
  };

  return (

    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <BottomBar />

      <div className="content-container">
        <h1>Detalhes da emoção</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">

            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={emocao.categoria}
              onChange={handleInputChange}
            />
            <FormField
              label="Privacidade"
              type="text"
              name="privacidade"
              value={emocao.privacidade}
              onChange={handleInputChange}
            />
            <FormField
              label="Descrição"
              type="text"
              name="descricao"
              value={emocao.descricao}
              onChange={handleInputChange}
            />
            <FormField
              label="Situação"
              type="text"
              name="contexto"
              value={emocao.contexto}
              onChange={handleInputChange}
            />
            <FormField
              label="Data"
              type="text"
              name="data"
              value={emocao.data}
              onChange={handleInputChange}
            />
          </div>
          <SubmitButton onClick={handleSubmit} label={"Salvar edições"} />
        </form>
      </div>
    </div>
  );
}
