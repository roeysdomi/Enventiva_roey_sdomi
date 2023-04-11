import React, { useEffect, useState } from "react";
import HeroBg from "../assets/backgrounds/hero-bg.svg";
import earth from "../assets/backgrounds/earth.svg";
import sunBg from "../assets/backgrounds/sun.svg";
import { Title } from "../components/shared/Title";
import { ConvertorForm } from "../components/general/convertorForm";
import { useDispatch } from "react-redux";
import { convertCurrency } from "../store/actions/exchangeAction";
import { AppDispatch } from "../store";
export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const fromCurrency = "USD";
  const toCurrency = "USD";
  const amount = 50;
  
  useEffect(() => {
    dispatch(convertCurrency({ fromCurrency, toCurrency, amount }));
  }, []);
  return (
    <div className="con-mainPage flex flex-row w-h-full ">
      <SideHero />
      <CurrencyFormSection />
    </div>
  );
};

export const SideHero = () => {
  return (
    <div className="con-sideHero flex flex-col justify-center items-center w-[80%] h-full relative hidden md:flex ">
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] flex justify-center" style={{ backgroundImage: `url(${HeroBg})` }}></div>
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] top-0 left-0 bg-center bg-cover flex justify-center" style={{ backgroundImage: `url(${earth})` }}></div>
      <div className="con-main-title  flex flex-col h-[60%] w-[80%]  justify-center">
        <Title size="text-5xl" text="Make currency conversions simple, fast, and stress-free." color="#d84315" />
      </div>
    </div>
  );
};

export const CurrencyFormSection = () => {
  return (
    <div className="con-currencyFormSection flex flex-center-center w-[100%] md:w-[40%] h-full relative ">
      <div className="sideHero-bg w-h-full  absolute z-[-2] bg-cover flex justify-center  pointer-events-none opacity-[0.98]" style={{ backgroundImage: `url(${sunBg})` }}></div>
      <div className="con-currencyFormSection-title"></div>
      <ConvertorForm />
    </div>
  );
};
