//basic React component structure
import React, { useEffect } from "react";
import { Loading } from "../shared/loading";
import { OptionsInput, InputTitle, InputText } from "../shared/inputs";
import { currencyList } from "../../constants/countries/countryList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setAmount, setFromCurrency, setToCurrency, setConvertedAmount,setSwitch } from "../../store/slices/formSlice";
import { formErrorsHandler } from "../../utils/errors/formErrors";
import { string } from "prop-types";
import { convertCurrency } from "../../store/actions/exchangeAction";

export const ConvertorForm = ({ isLoading }: { isLoading: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const formState = useSelector((state: RootState) => state.converterForm);
  const apiState = useSelector((state: RootState) => state.convertCurrency);
  const { fromCurrency, toCurrency, amount, convertedAmount } = formState;
  console.log(isLoading);
  console.log(convertedAmount);
  console.log(isLoading || convertedAmount);

  useEffect(() => {
    const newAmountCheck = Number(apiState?.result?.new_amount);
    if (!isNaN(newAmountCheck)) {
      dispatch(setConvertedAmount(newAmountCheck));
    }
  }, [apiState?.result?.new_amount]);



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(convertCurrency({ fromCurrency, toCurrency, amount }));
      }}
      className="z-[4] con-form p-6 mb-6 bg-white max-w-[80%] flex-col justify-center rounded-lg "
    >
      <InputTitle title="Amount:" size="text-xl" location="text-start" />
      <div className="center-input flex-center-center">
        <InputText
          onChange={(e) => {
            dispatch(setAmount(Number(e.target.value)));
          }}
          placeholder="Enter amount"
          required
        />
      </div>
      <InputTitle title="From:" size="text-xl" location="text-start" />
      <OptionsInput
        options={currencyList}
        selectedOption={formState.fromCurrency}
        handleOptionChange={(e) => {
          dispatch(setFromCurrency(e.target.value));
        }}
      />
      <SwitchButton handleClick={()=>{dispatch(setSwitch())}} />
      <InputTitle title="To:" size="text-xl" location="text-start" />
      <OptionsInput
        options={currencyList}
        selectedOption={formState.toCurrency}
        handleOptionChange={(e) => {
          dispatch(setToCurrency(e.target.value));
        }}
      />

      <SubmitButton text="Convert" onClick={() => {}} />

      {(isLoading || convertedAmount > 0) && <ConvertedAmount convertedAmount={convertedAmount} isLoading={isLoading} />}
    </form>
  );
};

const SwitchButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="con-switch w-full flex-center-center" onClick={handleClick}>
      <div className="switchButton cursor-pointer  text-white m-4 p-2 text-sm flex justify-center items-center rounded-md bg-green-500 w-[30%]" onClick={() => {}}>
        switch
      </div>
    </div>
  );
};

interface SubmitButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const SubmitButton = ({ text, onClick, disabled }: SubmitButtonProps) => {
  const buttonStyle = " w-[90%]  mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  return (
    <>
      <div className="con-submit w-full flex justify-center m-2">
        <button className={buttonStyle} type="submit" onClick={onClick} disabled={disabled}>
          {text}
        </button>
      </div>
    </>
  );
};

const ConvertedAmount = ({ convertedAmount, isLoading }: { convertedAmount: number; isLoading: boolean }) => {
  console.log(isLoading);
  console.log(convertedAmount);

  return (
    <div className="con-convertedAmount w-full flex-center-center">
      <div className="convertedAmount text-blue-800 m-4 p-4 text-4xl text-sm flex justify-center items-center rounded-md bg-blue-400 w-full" onClick={() => {}}>
        {isLoading ? "loading" : convertedAmount}
      </div>
    </div>
  );
};
