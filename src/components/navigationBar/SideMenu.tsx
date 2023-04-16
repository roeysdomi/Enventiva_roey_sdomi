import React, { useEffect } from "react";
import { menuExample } from "../../constants/menuExamples";
import MenuIcon from "./MenuIcon";
import gsap from "gsap";
import { Link } from "react-router-dom";

const optionsList: Array<option> = [
  { name: "Home", route: "/" },
  { name: "About us", route: "/about" },
];

export const SideMenu = ({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) => {
  useEffect(() => {
    if (isOpen) {
      gsap.from(".openMenu", { x: "100%", duration: 0.5, ease: "power2.out" });
    } else {
    }
  }, [isOpen]);

  const baseMenuStyle = "menu  absolute ";
  return (
    <div className="  con-sideMenu w-h-full flex-center-center  ">
      <div className="menu-con relative h-full w-full  sm:flex  flex-col ">
        <div className={`${baseMenuStyle} ${isOpen ? "openMenu h-screen w-screen sm:w-[70%] top-0 right-0 bg-red-600 z-0" : "w-full h-full"}`}>
          <MenuIcon isOpen={isOpen} handleClick={handleClick} />
          {isOpen && <MenuOptions optionsList={optionsList} handleClick={handleClick } />}
        </div>
      </div>
    </div>
  );
};
interface option {
  name: string;
  route: string;
}

export const MenuOptions = ({ optionsList,handleClick }: { optionsList: Array<option> ,handleClick:() => void }) => {
  return (
    <div className="con-menuOptions w-full h-[80%] z-[2]">
      {optionsList.map((option, index) => {
        return (
          <Link to={option.route} onClick={handleClick}>
            <div key={index + option.name} className="menuOption flex-center-center w-full h-[20%]   cursor-pointer hover:bg-white text-white hover:text-red-600">
              <div className="menuOption-name flex-center-center text-2xl">{option.name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
