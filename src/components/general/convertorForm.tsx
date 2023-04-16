//basic React component structure
import React from "react";
import { Loading } from "../shared/loading";
import CurrencyFlag from "react-currency-flags";

export const ConvertorForm = () => {
  return (
    <div className="con-form p-6 bg-white  rounded-lg">
      {/* <Loading /> */}
      <div className="currency-flag currency-flag-usd h-w-full"></div>
      <CurrencyFlagComponent1 currency="eur" />
    </div>
  );
};
type CurrencyFlagComponentProps = {
    currency: string;
  };
  
  const CurrencyFlagComponent1 = ({ currency }: CurrencyFlagComponentProps) => (
    <CurrencyFlag currency={currency} size="sm" />
  );
