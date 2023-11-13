import BottomBar from "../../components/BottomBar";
import FormEmotion from "../../components/EmotionSlider";
import Input from "../../components/Input";
import { TfiThought } from "react-icons/tfi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowThroughHeart, BsStopwatch } from "react-icons/bs";
import SubmitButton from "../../components/SubmitButton";
import { useNavigate } from "react-router-dom";
// import InputWithChips from "../../components/InputChip";

const EmotionForm = () => {
  const navigate = useNavigate()
  const goHistorico = () => {
    navigate("/Historico")
  }
  return (
    <div>
      <FormEmotion />

      <div className="inputs">
        <Input icon={<BsStopwatch />} type={"text"} placeholder={"Situação"} />
        <Input icon={<TfiThought />} type={"text"} placeholder={"Pensamento"} />
        {/* <InputWithChips icon={<BsArrowThroughHeart />} placeholder="Emoção" /> */}
        <Input
          icon={<BsArrowThroughHeart />}
          type={"text"}
          placeholder={"Emoção"}
        />
        <Input
          icon={<AiOutlinePlayCircle />}
          type={"text"}
          placeholder={"Comportamento"}
        />
      </div>

    <SubmitButton onClick={goHistorico} label={"Salvar"} />
      <BottomBar />
    </div>
  );
};

export default EmotionForm;
