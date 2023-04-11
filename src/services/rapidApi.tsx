const key = import.meta.env.VITE_RAPIDKEY
const host = import.meta.env.VITE_RAPIDHOST
export const exchangeRateApi = {
  url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
  "X-RapidAPI-Key": key,
  "X-RapidAPI-Host":host,
};
