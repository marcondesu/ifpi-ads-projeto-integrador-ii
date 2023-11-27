import React from "react";
import { BsStopwatch, BsLightbulb, BsArrowThroughHeart } from "react-icons/bs";
import EmotionSlider from "../../../components/EmotionForm/EmotionSlider";
import Input from "../../../components/Input";
import BottomBar from "../../../components/BottomBar/BottomBarPatient";
import SubmitButton from "../../../components/SubmitButton";
import useEmotion from "../../../hooks/useEmotion";
import './EmotionForm.css'

const EmotionForm: React.FC = () => {
  const { handleChange, handleSliderChange, handleSubmit } = useEmotion();

  return (
    <div>
      <div className="sidebar">
        <BottomBar />
      </div>

      <div className="main">
        <div className="content">
          <div
            style={{
              position: "fixed",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="title"
          >
            <h1>Guarde um novo momento</h1>
          </div>

          <EmotionSlider onChange={handleSliderChange} />
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
        </div>
      </div>
    </div>
  );
};

export default EmotionForm;
