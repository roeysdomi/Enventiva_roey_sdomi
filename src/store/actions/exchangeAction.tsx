import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { exchangeRateApi } from "../../services/api/rapidApi";

interface CurrencyExchange {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}
const options = {
    method: 'GET',
    url: exchangeRateApi.url,
    params: {have: '', want: '', amount: ''},
    headers: {
      'X-RapidAPI-Key': exchangeRateApi["X-RapidAPI-Key"]
      ,
      'X-RapidAPI-Host':  exchangeRateApi["X-RapidAPI-Host"]
    }
};
  
export const convertCurrency = createAsyncThunk(
  "currencyExchange/convertCurrency",
  async ({ fromCurrency, toCurrency, amount }: CurrencyExchange) => {
    const response = await axios.request({ ...options,params: {have: fromCurrency, want: toCurrency, amount: amount} })
    return response.data;
  }
);
