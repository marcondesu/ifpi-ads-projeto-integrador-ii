import {
  BsStopwatch,
  BsLightbulb,
  BsPlayCircle,
  BsArrowThroughHeart,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import EmotionSlider from "./EmotionSlider";
import Input from "./Input";
import BottomBar from "./BottomBar";
import SubmitButton from "./SubmitButton";
// import BasicAlerts from '../../components/Alerts'

const EmotionForm = () => {
  const navegation = useNavigate();
  const goHistorico = () => {
    navegation("/historico");
  };
  return (
    <div>
      {/* <h1>Cadastre uma situação</h1> */}
      <EmotionSlider />
      <BottomBar />
      <div className="inputs">
        <Input icon={<BsStopwatch />} placeholder={"Situação"} />
        <Input icon={<BsLightbulb />} placeholder={"Pensamento"} />
        <Input icon={<BsArrowThroughHeart />} placeholder={"Emoção"} />
        <Input icon={<BsPlayCircle />} placeholder={"Comportamento"} />
      </div>
      <SubmitButton onClick={goHistorico} label={"Salvar"} />
      {/* <BasicAlerts /> */}
    </div>
  );
};

export default EmotionForm;
