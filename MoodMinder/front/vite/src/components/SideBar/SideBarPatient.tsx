import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineFeedback } from "react-icons/md";
import {
  FaUser,
  FaSignInAlt,
  FaHistory,
  // FaPen,
  FaUserFriends,
} from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";

import logo1 from "../../assets/logo1.png";
import Help from "../Suport/Suport";

interface SidebarProps {
  isOpen: boolean;
}

const SidebarWrapper = styled.div<SidebarProps>`
  z-index: 2;
  height: 100vh;
  width: 280px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    width: 50%;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  color: #fff;
`;

const Logo = styled.img`
  width: 50px;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 16px 24px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    margin-right: 30px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  padding: 20px;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 3;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BottomBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerMenu onClick={toggleSidebar}>
        <div>&#9776;</div>
      </HamburgerMenu>

      <SidebarWrapper isOpen={isOpen}>
        <SidebarTop>
          <Logo src={logo1} alt="Logo" />
          <h1 style={{ color: "black" }}>MoodMinder.</h1>
        </SidebarTop>

        {/* <h3>MENU RÁPIDO</h3> */}
        <SidebarLink href="/historico">
          <FaHistory /> Histórico
        </SidebarLink>
        {/* <SidebarLink href="/EmotionForm">
          <FaPen /> Registro
        </SidebarLink> */}
        <SidebarLink href="/acompanhamentos">
          <FaUserFriends /> Médicos
        </SidebarLink>
        <SidebarLink href="#">
          <MdOutlineFeedback /> Feedbacks
        </SidebarLink>

        {/* <h3>CONFIGURAÇÕES</h3> */}
        <SidebarLink href="/configuracoes">
          <FaUser /> Perfil
        </SidebarLink>
        <SidebarLink href="/login">
          <FaSignInAlt /> Logout
        </SidebarLink>

        <div
          className="sideBarCard"
          style={{
            padding: " 1rem",
            textAlign: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <IoHelpCircleOutline
            className="icon"
            style={{
              position: "absolute",
              backgroundColor: "white",
              border: "10px solid white",
              fontSize: "1.5rem",
              borderRadius: "50%",
              top: "-8px",
              right: "50%",
              transform: "translate(50%)",
              zIndex: "100",
            }}
          />
          <Help />
        </div>
      </SidebarWrapper>
    </>
  );
};

export default BottomBar;
