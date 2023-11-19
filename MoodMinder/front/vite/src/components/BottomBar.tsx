import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  HiOutlineCalendar,
  HiOutlineCog6Tooth,
  HiOutlinePencil,
} from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BottomBar = () => {
  const [value, setValue] = React.useState(4);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (
    newValue: React.SetStateAction<number>,
    path: string
  ) => {
    setValue(newValue);
    navigate(path);
  };

  const svgStyle = { fontSize: "2em" };

  return (
    <Box
      sx={{
        width: 500,
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          const path =
            newValue === 0
              ? "/Configuracoes"
              : newValue === 1
              ? "/EmotionForm"
              : "/Historico";
          handleNavigation(newValue, path);
        }}
      >
        <BottomNavigationAction
          label="Configurações"
          icon={<HiOutlineCog6Tooth style={svgStyle} />}
          component={Link}
          to="/Configuracoes"
          sx={{
            color:
              location.pathname === "/Configuracoes"
                ? "primary.main"
                : "inherit",
          }}
        />
        <BottomNavigationAction
          label="Registrar"
          icon={<HiOutlinePencil style={svgStyle} />}
          component={Link}
          to="/EmotionForm"
          sx={{
            color:
              location.pathname === "/EmotionForm" ? "primary.main" : "inherit",
          }}
        />
        <BottomNavigationAction
          label="Histórico"
          icon={<HiOutlineCalendar style={svgStyle} />}
          component={Link}
          to="/Historico"
          sx={{
            color:
              location.pathname === "/Historico" ? "primary.main" : "inherit",
          }}
        />
      <BottomNavigationAction
          label="Acompanhamento"
          icon={<LiaHandsHelpingSolid style={svgStyle} />}
          component={Link}
          to="/Acompanhamento"
          sx={{
            color:
              location.pathname === "/Acompanhamento" ? "primary.main" : "inherit",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomBar;
