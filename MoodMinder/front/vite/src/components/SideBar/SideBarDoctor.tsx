import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaCog, FaSignInAlt } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

const SidebarWrapper = styled.div<SidebarProps>`
  z-index:2;
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
    transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
    width: 50%;
  }
`;

const SidebarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
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
          <Logo src="caminho/para/o/seu/logo.png" alt="Logo" />
        </SidebarTop>
        <SidebarLink href="/profissional/acompanhamento">
          <FaUser /> Acompanhamentos
        </SidebarLink>
        <SidebarLink href="/profissional/configuracoes">
          <FaCog /> Account
        </SidebarLink>
        <SidebarLink href="/login/profissional">
          <FaSignInAlt /> Logout
        </SidebarLink>
      </SidebarWrapper>
    </>
  );
};

export default BottomBar;
