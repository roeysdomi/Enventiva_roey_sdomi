import React from "react";
import { useToggle } from "../../hooks/useToggle";
import classNames from "classnames";
import { SideMenu } from "./SideMenu";
export function NavigationBar({}) {
  const { isOn: isOpen, changeToggle } = useToggle();

  return (
    <div className={classNames("con-navigationBar w-full    fixed  flex justify-between flex-col z-10", isOpen ? " h-full" : "h-[10%]")}>
      <div className={classNames("navigationBar w-full  flex-center-center", isOpen ? "h-[10%]" : "h-full")}>
        <div className={classNames("logo w-h-full   flex justify-start items-center pl-2  text-[#bf360c]", isOpen ? "sm:flex hidden " : "w-h-full ")}>CoinSwipe.</div>
        <SideMenu isOpen={isOpen} handleClick={changeToggle} />
      </div>
    </div>
  );
}
