// Dashboard.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { IconContext } from 'react-icons';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (card: string) => {
    setSelectedCard(card);
  };

  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <div className="dashboard">
        <Sidebar onCardClick={handleCardClick} />
        <div className="main">
          {selectedCard && <h3>{`Selected Card: ${selectedCard}`}</h3>}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Dashboard;
