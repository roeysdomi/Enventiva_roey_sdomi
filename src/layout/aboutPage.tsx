import React, { useEffect, useRef } from "react";
import { Title } from "../components/shared/Title";
import HeroBg from "../assets/backgrounds/hero-bg.svg";
import earth from "../assets/backgrounds/earth.svg";
import currencyPic from "../assets/description/currency.png";
import gsap from "gsap";

export const AboutPage = () => {
  const aboutText =
    "Our currency converter website provides accurate and up-to-date exchange rates for over 100 currencies. Convert and compare currencies with ease for your business or personal needs.";
  const elementAboutText = useRef(null);
  const elementMoneyPic = useRef(null);

  useEffect(() => {
    animationAbout(elementAboutText);
    animationMoneyPic(elementMoneyPic)
  }, []);

  return (
    <div className="con-sideHero flex flex-col justify-center items-center w-full h-full   ">
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] flex justify-center" style={{ backgroundImage: `url(${HeroBg})` }}></div>
      <div className="sideHero-bg w-h-full z-[-2] absolute opacity-[0.5] top-0 left-0 bg-center bg-cover flex justify-center" style={{ backgroundImage: `url(${earth})` }}></div>
      <div className="boxes-con w-full h-full  flex justify-around items-center flex-col-reverse  md:flex-row relative">
        <Floatbox refComponent={elementAboutText} text={aboutText} />
        <Floatbox refComponent={elementMoneyPic} image={currencyPic} />
      </div>
    </div>
  );
};

interface FloatContentProps {
  text?: string;
  image?: string;
  refComponent?: React.MutableRefObject<null>;
}
const Floatbox = ({ text, image, refComponent }: FloatContentProps) => {
  if (image)
    return (
      <div className="con-floatbox flex flex-col justify-between items-center bg-green bg-cover w-full h-[30%] md:w-[50%] md:h-full overflow-hidden">
        <img ref={refComponent}  src={image} alt="about-image" className="w-full h-full object-cover" />
      </div>
    );
  else
    return (
      <div className="con-floatbox  flex  justify-center  p-4  text-3xl md:text-5xl items-center w-full h-[70%] md:w-[50%] md:h-full  bg-red-800 text-white align-middle">
        <p ref={refComponent} className="text-center">
          {text}
        </p>
      </div>
    );
};

const animationAbout = (ref: React.MutableRefObject<null>|null) => {
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
const animationMoneyPic = (ref: React.MutableRefObject<null>|null) => {
  if (!ref) return;
  return gsap.fromTo(
    ref.current,
    {
      scale: 1.5,
      opacity: 0.8,
    },
    {
      scale: 1,

      opacity: 1,

      duration: 4,
    }
  );
};
