import React from "react";
import "./FormField.css";

interface FormFieldProps {
  label: string;
  type: "text" | "select" | "email" | "password" | any; // Modificado para aceitar "select" como tipo
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void; // Atualizado o tipo do evento
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
      {type === "select" ? ( // Renderização condicional para o tipo "select"
        <select
          className="form-select"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="publico">Pública</option>
          <option value="privada">Privada</option>
        </select>
      ) : (
        <input
          className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
