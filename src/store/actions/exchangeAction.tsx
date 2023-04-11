import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { exchangeRateApi } from "../../services/rapidApi";

interface CurrencyExchange {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}
console.log(exchangeRateApi)
const options = {
    method: 'GET',
    url: exchangeRateApi.url,
    params: {have: 'USD', want: 'EUR', amount: '5000'},
    headers: {
      'X-RapidAPI-Key': exchangeRateApi["X-RapidAPI-Key"]
      ,
      'X-RapidAPI-Host':  exchangeRateApi["X-RapidAPI-Host"]
    }
};
  
export const convertCurrency = createAsyncThunk(
  "currencyExchange/convertCurrency",
  async ({ fromCurrency, toCurrency, amount }: CurrencyExchange) => {
    const response = await axios.request(options)
    console.log(response.data)
    return response.data;
  }
);
