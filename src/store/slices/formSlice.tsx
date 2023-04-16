import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConverterState {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  convertedAmount: number;
  error: string | null;
}

const initialState: ConverterState = {
  amount: 0,
  fromCurrency: "ILS",
  toCurrency: "USD",
  convertedAmount: 0,
  error: null,
};

export const converterFormSlice = createSlice({
  name: "converter",
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      if (!action.payload) return;
      state.amount = action.payload;
      state.error = null;
      state.convertedAmount = 0;
    },
    setFromCurrency: (state, action: PayloadAction<string>) => {
      state.fromCurrency = action.payload;
      state.error = null;
    },
    setToCurrency: (state, action: PayloadAction<string>) => {
      state.toCurrency = action.payload;
      state.error = null;
    },
    setConvertedAmount: (state, action: PayloadAction<number>) => {
      if (isNaN(action.payload)) return;
      if (!action.payload) return;
      state.convertedAmount = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSwitch: (state) => {
      const temp = state.fromCurrency;
      state.fromCurrency = state.toCurrency;
      state.toCurrency = temp;
      state.error = null;
    },
  },
});

export const { setAmount, setFromCurrency, setToCurrency, setConvertedAmount, setError, setSwitch } = converterFormSlice.actions;

export default converterFormSlice;
