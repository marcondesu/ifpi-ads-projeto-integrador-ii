import React from 'react';
import { InputWithIconProps } from './Input';

interface InputMultilineProps extends InputWithIconProps {
  rows?: number; // Adicionamos a propriedade rows para controlar o número de linhas
  cols?: number; // Adicionamos a propriedade cols para controlar o número de colunas
}

const InputMultiline: React.FC<InputMultilineProps> = ({ icon, placeholder,  rows = 5, cols = 50 }) => {
  return (
    <div className="input">
      {icon}
      <textarea rows={rows} cols={cols} placeholder={placeholder} />
    </div>
  );
};

export default InputMultiline;
