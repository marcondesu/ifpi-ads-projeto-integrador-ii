import React from 'react';

interface InputWithIconProps {
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
}

const Input: React.FC<InputWithIconProps> = ({ icon, type, placeholder }) => {
  return (
    <div className="input">
      {icon}
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
