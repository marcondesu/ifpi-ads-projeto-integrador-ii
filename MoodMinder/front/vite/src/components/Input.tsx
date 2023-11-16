import React from 'react';

interface InputWithIconProps {
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  icon,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input">
      {icon}
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputWithIcon;
