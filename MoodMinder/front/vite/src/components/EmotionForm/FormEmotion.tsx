import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { HiOutlineFaceSmile, HiOutlineFaceFrown } from "react-icons/hi2";

export default function FormEmotion() {
  const svgStyle = { fontSize: '3.5em' };

  return (  
    <Box sx={{ width: 500, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <div style={{width: '70%', display: 'flex', alignItems: 'center', gap: '20px'}}>
      < HiOutlineFaceFrown style={svgStyle}/>
      <Slider defaultValue={30} aria-label="Disabled slider" color='secondary' />
      <HiOutlineFaceSmile style={svgStyle}/>
      </div>
    </Box>
  );
}