import React from "react";
import { BsStopwatch, BsLightbulb, BsArrowThroughHeart } from "react-icons/bs";
import EmotionSlider from "../../../components/EmotionForm/EmotionSlider";
import Input from "../../../components/Input";
import BottomBar from "../../../components/BottomBar/BottomBarPatient";
import SubmitButton from "../../../components/SubmitButton";
import useEmotion from "../../../hooks/useEmotion";

const EmotionForm: React.FC = () => {
  const { handleChange, handleSliderChange, handleSubmit } = useEmotion();

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
        <h1>Guarde um novo momento</h1>
      </div>
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
    </div>
  );
};

export default EmotionForm;
