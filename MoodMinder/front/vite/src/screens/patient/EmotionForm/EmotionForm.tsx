import React from "react";
import { BsStopwatch, BsLightbulb, BsArrowThroughHeart } from "react-icons/bs";
import EmotionSlider from "../../../components/EmotionForm/EmotionSlider";
import Input from "../../../components/Input";
import SideBarPatient from "../../../components/SideBar/SideBarPatient";
import SubmitButton from "../../../components/SubmitButton";
import useEmotion from "../../../hooks/useEmotion";

const EmotionForm: React.FC = () => {
  const { handleChange, handleSliderChange, handleSubmit } = useEmotion();

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <SideBarPatient />

      <div className="content-container">
        <h1>Guarde um novo momento</h1>

        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "2rem", justifyContent: 'center' }}
        >
          <span>Qual a intensidade do que você está sentindo?</span>
        </div>

        <EmotionSlider onChange={handleSliderChange} />

        <div className="inputs">
          <div
            style={{ display: "flex", alignItems: "center", paddingTop: "1rem" }}
          >
            <span>Que emoções resumem o que você está passando? Ex: alegria, medo, alívio...</span>
          </div>
          
          <Input
            icon={<BsArrowThroughHeart />}
            placeholder={"Emoção"}
            onChange={(e) => handleChange(e, "categoria")}
          />
          <div
            style={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
          >
            <span>Que situação te deixou dessa forma?</span>
          </div>
          <Input
            icon={<BsStopwatch />}
            placeholder={"Situação"}
            onChange={(e) => handleChange(e, "contexto")}
          />
          <div
            style={{ display: "flex", alignItems: "center", paddingTop: "2rem" }}
          >
            <span>O que você pensa sobre tudo isso?</span>
          </div>
          <Input
            icon={<BsLightbulb />}
            placeholder={"Pensamento"}
            onChange={(e) => handleChange(e, "descricao")}
          />
        </div>

        <SubmitButton onClick={handleSubmit} label={"Salvar"} />
      </div>
    </div>
  );
};

export default EmotionForm;
