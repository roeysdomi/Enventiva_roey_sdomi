import React from "react";
import HeroBg from "../assets/backgrounds/hero-bg.svg";
import earth from "../assets/backgrounds/earth.svg";
import sunBg from "../assets/backgrounds/sun.svg";

export const MainPage = () => {
  return (
    <div className="con-mainPage flex flex-row w-h-full ">
      <SideHero />
      <CurrencyFormSection />
    </div>
  );
};

export const SideHero = () => {
  return (
    <div className="con-sideHero flex flex-col w-[60%] h-full relative ">
      <div className="sideHero-bg w-h-full  absolute opacity-[0.5] flex justify-center" style={{ backgroundImage: `url(${HeroBg})` }}></div>
      <div className="sideHero-bg w-h-full  absolute opacity-[0.5] top-0 left-0 bg-center bg-cover flex justify-center" style={{ backgroundImage: `url(${earth})` }}></div>

      <div className="con-main-title ">rfnrjfnjrnf</div>
    </div>
  );
};

export const CurrencyFormSection = () => {
  return (
    <div className="con-currencyFormSection flex flex-col w-[40%] h-full relative">
      <div className="sideHero-bg w-h-full  absolute z-[-2] bg-cover flex justify-center  pointer-events-none opacity-[0.98]" style={{ backgroundImage: `url(${sunBg})` }}></div>
      <div className="con-currencyFormSection-title"></div>
    </div>
  );
};
