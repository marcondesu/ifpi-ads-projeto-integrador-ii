import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { HiOutlineFaceSmile, HiOutlineFaceFrown } from "react-icons/hi2";

interface EmotionSliderProps {
  onChange: (intensidade: number) => void;
}

const EmotionSlider: React.FC<EmotionSliderProps> = ({ onChange }) => {
  const [intensidade, setIntensidade] = useState(0);
  const svgStyle = { fontSize: "3.5em" };

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setIntensidade(newValue as number);
    onChange(newValue as number);
  };

  return (
    <Box
      sx={{
        width: 500,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <HiOutlineFaceFrown style={svgStyle} />
        <Slider
          value={intensidade}
          onChange={handleSliderChange}
          aria-label="Emotion intensity slider"
          color="primary"
        />
        <HiOutlineFaceSmile style={svgStyle} />
      </div>
    </Box>
  );
};

export default EmotionSlider;
