import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
  label: string;
  style?: {}
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, label, style }) => {
  return (
    <div className="submit-container" >
      <span style={style} onClick={onClick}>{label}</span>
    </div>
  );
};

export default SubmitButton;
