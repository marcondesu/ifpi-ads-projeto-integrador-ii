import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  label: string;
  style?: React.CSSProperties;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label, style }) => {
  const defaultStyles: React.CSSProperties = {
    padding: '10px 15px',
    backgroundColor: '#fff',
    border: '1px solid #333',
    borderRadius: '5px',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const buttonStyles: React.CSSProperties = { ...defaultStyles, ...style };

  return (
    <div className="submit-container">
      <button style={buttonStyles} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
