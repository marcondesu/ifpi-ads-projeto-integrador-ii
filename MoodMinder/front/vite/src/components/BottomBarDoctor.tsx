import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { Link, useNavigate, useLocation } from "react-router-dom";

const BottomBar = () => {
  const [value, setValue] = React.useState(3);
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
              ? "/Profissional/Configuracoes"
              : "/Profissional/Acompanhamento"
          handleNavigation(newValue, path);
        }}
      >
        <BottomNavigationAction
          label="Configurações"
          icon={<HiOutlineCog6Tooth style={svgStyle} />}
          component={Link}
          to="/Profissional/Configuracoes"
          sx={{
            color:
              location.pathname === "/Configuracoes"
                ? "primary.main"
                : "inherit",
          }}
        />
      <BottomNavigationAction
          label="Acompanhamento"
          icon={<LiaHandsHelpingSolid style={svgStyle} />}
          component={Link}
          to="/Profissional/Acompanhamento"
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
