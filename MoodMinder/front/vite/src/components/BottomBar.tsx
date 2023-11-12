import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
  HiOutlinePencil,
} from "react-icons/hi2";

export default function BottomBar() {
  const [value, setValue] = React.useState(0);

  const svgStyle = { fontSize: '2em' };

  return (
    <Box sx={{ width: 500, position: "fixed", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Configurações"
          icon={<HiOutlineCog6Tooth style={svgStyle}/>}
        />
        <BottomNavigationAction label="Registrar" icon={<HiOutlinePencil style={svgStyle}/>} />
        <BottomNavigationAction
          label="Histórico"
          icon={<HiOutlineCalendar style={svgStyle}/>}
        />
      </BottomNavigation>
    </Box>
  );
}
