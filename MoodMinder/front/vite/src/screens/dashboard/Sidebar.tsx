// Sidebar.tsx
import React from 'react';
import { FaCoffee, FaBeer } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './Sidebar.css';

interface SidebarProps {
  onCardClick: (card: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCardClick }) => {
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <div className="sidebar">
        <div className="card" onClick={() => onCardClick('Coffee')}>
          <FaCoffee />
          <h3>Coffee</h3>
        </div>
        <div className="card" onClick={() => onCardClick('Beer')}>
          <FaBeer />
          <h3>Beer</h3>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Sidebar;
