import React from 'react';
import './FormField.css'; // Importando o arquivo de estilos

interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="form-field-container">
      <label className="form-label">{label}:</label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
