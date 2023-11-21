import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label }) => {
  return (
    <div className="submit-container">
      <span onClick={onClick}>{label}</span>
    </div>
  );
};

export default SubmitButton;
