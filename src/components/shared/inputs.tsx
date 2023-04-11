import React from "react";

interface InputProps {
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    pattern?: string;
}
export const InputTextForm = (inputProps:InputProps    ) => {
    return <input type="text" onChange={inputProps.onChange} placeholder="Enter a number" required pattern="[0-9]*"  />;
};
interface OptionsInputProps {
    options: Array<string>;
    selectedOption: string;
    handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  
}

const OptionsInput = ({ options, selectedOption, handleOptionChange }:OptionsInputProps) => (
  <select value={selectedOption} onChange={handleOptionChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
);
