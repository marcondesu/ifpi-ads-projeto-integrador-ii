import { BsStopwatch, BsLightbulb, BsArrowThroughHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import EmotionSlider from "../../components/EmotionSlider";
import Input from "../../components/Input";
import BottomBar from "../../components/BottomBar";
import SubmitButton from "../../components/SubmitButton";
import { useState } from "react";
import axios from "axios";
// import BasicAlerts from '../../components/Alerts'

const EmotionForm = () => {
  const navegation = useNavigate();
  const [emotion, setEmotion] = useState({
    idPaciente: "e6acf5e7-759c-41d5-b2a9-1d9e09a73f2f",
    intensidade: 0,
    categoria: "",
    descricao: "",
    contexto: "",
    privacidade: "privada",
  });

  const handleChange = (e: { target: { value: any } }, field: string) => {
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
        "http://localhost:3000/emocao",
        emotion
      );
      console.log("Emoção cadastrada com sucesso:", response.data);
      navegation("/historico");
    } catch (error: any) {
      console.error("Erro ao cadastrar emoção:", error.message);
    }
  };

  return (
    <div>
      {/* <h1>Cadastre uma situação</h1> */}
      <EmotionSlider onChange={handleSliderChange} />
      <BottomBar />
      <div className="inputs">
        <Input
          icon={<BsArrowThroughHeart />}
          placeholder={"Emoção"}
          onChange={(e) => handleChange(e, "categoria")}
        />
        <Input
          icon={<BsStopwatch />}
          placeholder={"Situação"}
          onChange={(e) => handleChange(e, "contexto")}
        />
        <Input
          icon={<BsLightbulb />}
          placeholder={"Pensamento"}
          onChange={(e) => handleChange(e, "descricao")}
        />
      </div>
      <SubmitButton onClick={handleSubmit} label={"Salvar"} />
      {/* <BasicAlerts /> */}
    </div>
  );
};

export default EmotionForm;
