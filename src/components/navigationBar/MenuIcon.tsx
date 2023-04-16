import React, { useState } from "react";

interface MenuIconLineProps {
  isOpen: boolean;
  extraClasses: string;
}

const MenuIconLine = ({ isOpen, extraClasses }: MenuIconLineProps) => {
  const baseClasses = "w-5 h-[1px]   bg-red-700 transition duration-300 ease-in-out transform";
  return <div className={`${baseClasses} ${isOpen ? extraClasses : ""}`} />;
};

const MenuIcon = ({ isOpen, handleClick }: { isOpen: boolean; handleClick: () => void }) => {
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="con-MenoIcon   flex justify-end w-full  items-center"
      style={isOpen ? { height: "10%" } : { height: "100%" }}
    >
      <div className="menuIcon scale-150  cursor-pointer flex  flex-col h-full mr-2  justify-center " style={isOpen ? { gap: "0px", height: "10%" } : { gap: "2px" }}>
        <MenuIconLine isOpen={isOpen} extraClasses=" rotate-45 " />
        <MenuIconLine isOpen={isOpen} extraClasses="hidden" />
        <MenuIconLine isOpen={isOpen} extraClasses=" -rotate-45" />
      </div>
    </div>
  );
};

export default MenuIcon;
