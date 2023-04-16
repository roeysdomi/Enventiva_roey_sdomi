import React, { useEffect, useRef, useState } from "react";
import HeroBg from "../assets/backgrounds/hero-bg.svg";
import earth from "../assets/backgrounds/earth.svg";
import sunBg from "../assets/backgrounds/sun.svg";
import { Title } from "../components/shared/Title";
import { ConvertorForm } from "../components/form/convertorForm";
import { useDispatch } from "react-redux";
import { convertCurrency } from "../store/actions/exchangeAction";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import gsap from "gsap";

export const MainPage = () => {
  const apiState = useSelector((state: RootState) => state.convertCurrency);
  const formState = useSelector((state: RootState) => state.converterForm);

  return (
    <div className="con-mainPage flex flex-row w-h-full ">
      <SideHero />
      <CurrencyFormSection  isLoading={apiState.loading} />
    </div>
  );
};

export const SideHero = () => {
  const elementHero = useRef(null);

  useEffect(() => {
    animationHero(elementHero);
  }, []);

  return (
    <div className="con-sideHero flex flex-col justify-center items-center w-[80%] h-full relative hidden md:flex ">
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] flex justify-center" style={{ backgroundImage: `url(${HeroBg})` }}></div>
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] top-0 left-0 bg-center bg-cover flex justify-center" style={{ backgroundImage: `url(${earth})` }}></div>
      <div ref={elementHero} className="con-main-title   flex flex-col h-[60%] w-[80%]  justify-center">
        <Title size="text-5xl" text="Make currency conversions simple, fast, and stress-free." color="#d84315" />
      </div>
    </div>
  );
};

export const CurrencyFormSection = ({ isLoading }: { isLoading: boolean }) => {
  const elementForm= useRef(null);

  useEffect(() => {
    animationForm(elementForm);
    animationStaggers(elementForm)
  }, []);

  return (
    <div className="con-currencyFormSection flex-col flex-center-center w-[100%] md:w-[40%] h-full relative overflow-hidden ">
      <div className="sideHero-bg w-h-full  absolute z-[-2] bg-cover  flex   pointer-events-none opacity-[0.98] overflow-auto" style={{ backgroundImage: `url(${sunBg})` }}></div>
      <div className="scroll-section w-full h-[100%] flex-col gap-4 flex-center-center   overflow-scroll overflow-x-hidden md:overflow-y-hidden">
        <Title visibility=" z-[4] text-3xl text-white items-center  md:hidden m-4 mt-[20%] h-[10%] w-[100%] " text="Make currency conversions simple." color="" />
        <ConvertorForm refComponent={ elementForm} isLoading={isLoading} />
      </div>
    </div>
  );
};
const animationHero = (ref: React.MutableRefObject<null>|null) => {
  if (!ref) return;
  return gsap.fromTo(
    ref.current,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
    }
  );
};

const animationForm = (ref: React.MutableRefObject<null>|null) => {
  if (!ref) return;
  return gsap.fromTo(
    ref.current,
    {
      width:'0%',
      opacity: 0,
     
    },
    {
      width:'100%',
      opacity: 1,
      duration: 1,
    }
  );
};
const animationStaggers = (ref: any) => {
  if (!ref) return;
  const children = (ref.current as HTMLDivElement).children;
  if(!children) return 
  return gsap.fromTo(
    ref?.current?.children,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1, duration: 0.3 }
  );
};