import { configureStore } from "@reduxjs/toolkit";
import convertCurrencySlice from "./slices/exchangeSlice";

const store = configureStore({
  reducer: {
    convertCurrency: convertCurrencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
    