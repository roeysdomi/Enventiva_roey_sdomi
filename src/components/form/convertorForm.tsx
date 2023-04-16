import React, { useEffect } from "react";
import { Loading } from "../shared/loading";
import { OptionsInput, InputTitle, InputText } from "../shared/inputs";
import { currencyList } from "../../constants/countries/countryList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setAmount, setFromCurrency, setToCurrency, setConvertedAmount, setSwitch, ConverterState } from "../../store/slices/formSlice";
import { convertCurrency } from "../../store/actions/exchangeAction";
import { StatusError } from "./status/error";
import { CurrencyExchangeState } from "../../store/slices/exchangeSlice";
import { StatusSuccess } from "./status/succsess";
import {  useInputValidation } from "../../hooks/useInputValidation";

export const ConvertorForm = ({ isLoading, refComponent }: { isLoading: boolean; refComponent: React.MutableRefObject<null> | null }) => {
  const dispatch = useDispatch<AppDispatch>();
  const formState = useSelector((state: RootState) => state.converterForm);
  const apiState = useSelector((state: RootState) => state.convertCurrency);
  const { fromCurrency, toCurrency, amount } = formState;

  useEffect(() => {
    const newAmountCheck = Number(apiState?.result?.new_amount);
    if (!isNaN(newAmountCheck)) {
      dispatch(setConvertedAmount(newAmountCheck));
    }
  }, [apiState?.result?.new_amount]);

  useInputValidation();

  return (
    <form
      ref={refComponent}
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
      <SwitchButton
        handleClick={() => {
          dispatch(setSwitch());
        }}
      />
      <InputTitle title="To:" size="text-xl" location="text-start" />
      <OptionsInput
        options={currencyList}
        selectedOption={formState.toCurrency}
        handleOptionChange={(e) => {
          dispatch(setToCurrency(e.target.value));
        }}
      />

      <SubmitButton text="Convert" onClick={() => {}} />
      <Status apiState={apiState} formState={formState} />
    </form>
  );
};

const SwitchButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div data-testid="switch-button" className="con-switch w-full flex-center-center" onClick={handleClick}>
      <div className="switchButton cursor-pointer  text-white m-4 p-2 text-sm flex justify-center items-center rounded-md bg-green-500 w-[30%]" onClick={() => {}}>
        switch
      </div>
    </div>
  );
};

interface SubmitButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const SubmitButton = ({ text, onClick, disabled }: SubmitButtonProps) => {
  const buttonStyle = " w-[90%]  mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  return (
    <>
      <div className="con-submit w-full flex justify-center m-2">
        <button data-testid="submit-button" className={buttonStyle} type="submit" onClick={onClick} disabled={disabled}>
          {text}
        </button>
      </div>
    </>
  );
};

const Status = ({ apiState, formState }: { apiState: CurrencyExchangeState; formState: ConverterState }) => {
  if (apiState.error || formState.error) {
    return <StatusError errorApi={apiState.error} errorInput={formState.error} />;
  }
  if (apiState.loading || formState.convertedAmount > 0) {
    return <StatusSuccess convertedAmount={formState.convertedAmount} isLoading={apiState.loading} />;
  }
  return <></>;
};
