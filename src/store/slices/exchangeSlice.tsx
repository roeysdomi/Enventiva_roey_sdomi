import { createSlice } from "@reduxjs/toolkit";
import { convertCurrency } from "../actions/exchangeAction";

interface CurrencyExchangeState {
  loading: boolean;
  error: string | null;
  result: number | null;
}

const initialState: CurrencyExchangeState = {
  loading: false,
  error: null,
  result: null,
};

const currencyExchangeSlice = createSlice({
  name: "currencyExchange",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.result = null;
      })
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.result = action.payload;
      })
      .addCase(convertCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong.";
        state.result = null;
      });
  },
});

export default currencyExchangeSlice;
