// App.tsx
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import './App.css'; // Importar o arquivo CSS para os estilos

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  const handleLogout = () => {
    // Implementar a lógica de logout aqui
    console.log('Usuário desconectado');
  };

  return (
    <div className="app-container">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} onLogout={handleLogout} />
      <Dashboard />
    </div>
  );
};

export default App;
