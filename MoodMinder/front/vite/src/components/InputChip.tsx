import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

interface InputWithChipsProps {
  icon: React.ReactNode;
  placeholder: string;
}

const InputWithChips: React.FC<InputWithChipsProps> = ({
  icon,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setChips((prevChips) => [...prevChips, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleChipDelete = (chipToDelete: string) => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <div className="input">
      {icon}
      {chips.map((chip) => (
        <Chip
          key={chip}
          label={chip}
          onDelete={() => handleChipDelete(chip)}
          variant="outlined"
          color="primary"
        />
      ))}

      <TextField
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
    </div>
  );
};

export default InputWithChips;
