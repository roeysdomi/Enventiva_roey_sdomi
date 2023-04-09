import React from "react";
import { useToggle } from "../hooks/useToggle";
import classNames from "classnames";
import { menuExample } from "../constants/menuExamples";
import MenuIcon from "./MenuIcon";
import { SideMenu } from "./SideMenu";
export function NavigationBar({}) {
  const { isOn: isOpen, changeToggle } = useToggle();

  return (
    <div className={classNames("con-navigationBar w-full borders   fixed  flex justify-between flex-col z-10", isOpen ? " h-full" : "h-[10%]")}>
      <div className={classNames("navigationBar w-full  flex-center-center", isOpen ? "h-[10%]" : "h-full")}>
        <div className={classNames("logo w-h-full  borders flex-center-center  ", isOpen ? "sm:flex hidden " : "w-h-full ")}></div>
        <div className="  con-sideMenu w-h-full flex-center-center  ">
          <SideMenu isOpen={isOpen} handleClick={changeToggle} />
        </div>
      </div>
    </div>
  );
}
