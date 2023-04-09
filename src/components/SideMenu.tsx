import React from "react";
import { menuExample } from "../constants/menuExamples";
import MenuIcon from "./MenuIcon";

export const SideMenu = ({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) => {
  const baseMenuStyle = "test bg-black absolute";
  return (
    <div className="menu-con relative h-full w-full  sm:flex  flex-col bg-purple-600">
      <div className={`${baseMenuStyle} ${isOpen ? "h-screen w-screen sm:w-[70%] top-0 right-0" : "w-full h-full"}`}>
        <MenuIcon isOpen={isOpen} handleClick={handleClick} />
      </div>
    </div>
  );
};
