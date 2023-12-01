// Header.tsx
import React from 'react';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode, onLogout }) => {
  const headerClass = isDarkMode ? 'header-container dark-mode' : 'header-container';

  return (
    <div className={headerClass}>
      <div className="header-left">
        {/* Adicione sua logo aqui */}
        <span className={`app-name ${isDarkMode ? 'dark-text' : ''}`}>Nome do App</span>
      </div>
      <div className="header-right">
        <button className="icon-button" onClick={onToggleDarkMode}>
          {isDarkMode ? <FaSun color="white" /> : <FaMoon />}
        </button>
        <button className="icon-button" onClick={onLogout}>
          {isDarkMode ? <FaSignOutAlt color="white" /> : <FaSignOutAlt />}
        </button>
      </div>
    </div>
  );
};

export default Header;
