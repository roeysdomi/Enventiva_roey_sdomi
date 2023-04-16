import { configureStore } from "@reduxjs/toolkit";
import convertCurrencySlice from "./slices/exchangeSlice";
import converterFormSlice from "./slices/formSlice";

const store = configureStore({
  reducer: {
    convertCurrency: convertCurrencySlice.reducer,
    converterForm: converterFormSlice.reducer,

  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
    