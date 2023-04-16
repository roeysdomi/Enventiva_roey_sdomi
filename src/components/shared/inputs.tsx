import React from "react";
import { CurrencyFlag } from "react-currency-flags/dist/components";

interface InputProps {
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    pattern?: string;
}
export const InputText = (inputProps: InputProps) => {
  return (
    <input
      data-testid="amount-input"
      className="w-[100%] text-sm text-orange-800  bg-gray-100 rounded-md p-3  focus:border-transparent appearance-none  outline-none"
      type="text"
      onChange={inputProps.onChange}
      placeholder={inputProps.placeholder}
      required
      pattern="^(?!0(\.0{1,2})?$)\d+(\.\d{1,2})?$"
      maxLength={11}
    />
  );
};
interface OptionsInputProps {
    options: Array<string>;
    selectedOption: string;
    handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;  
}

export const OptionsInput = ({ options, selectedOption, handleOptionChange }: OptionsInputProps) => {
  return (
    <>
      <div className="options-con flex flex-row justify-center items-center gap-2 ">
        <CurrencyFlag className="w-[10%]  " currency={selectedOption} size="lg" />
        <select
          data-testid="options-input"
          className=" w-[80%] text-sm text-orange-800  bg-orange-300 rounded-md p-3 border-transparent focus:border-transparent appearance-none  outline-none"
          value={selectedOption}
          onChange={(e) => handleOptionChange(e)}
        >
          {Object.entries(options).map(([key, value]) => (
            <option className="text-xs" key={key} value={key}>
              {` ${key}-${value}`}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export const InputTitle = ({ title, size, location }: { title: string; size: string; location: string }) => {
  return <h1 className={`font-bold ${title} ${size} ${location} text-gray-800 m-2`}>{title}</h1>;
};
