import { useDispatch, useSelector } from "react-redux";
import { setError } from "../store/slices/formSlice"
import { AppDispatch, RootState } from "../store";
import { currencyList } from "../constants/countries/countryList";

import { useEffect } from "react";
export const useInputValidation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const formState = useSelector((state: RootState) => state.converterForm);

  useEffect(() => {
    if (!currencyList[formState.fromCurrency] || !currencyList[formState.toCurrency]) {
      dispatch(setError("Please choose currency"));
      return;
    }
    const pattern: RegExp = /^(?!0(\.0{1,2})?$)\d+(\.\d{1,2})?$/;
    if(formState.amount===0) return
    if (isNaN(formState.amount) || !pattern.test(formState.amount.toString())) dispatch(setError("Please choose number in this format *#.##"));
  }, [formState.amount, formState.fromCurrency, formState.toCurrency]);
};
