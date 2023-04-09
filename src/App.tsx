import { NavigationBar } from "./components/NavigationBar";
import { useState } from "react";
import "./App.css";
import { useInnerHeight } from "./hooks/useInnerHeight";
import classNames from "classnames";
import { SideMenu } from "./components/SideMenu";
import { MainPage } from "./layout/mainPage";
import MenuIcon from "./components/MenuIcon";
function App() {
  const { currentHeight } = useInnerHeight();

  return (
    <div className={"w-screen font-main-font font-semibold text-xl"} style={{ height: `${currentHeight}px` }}>
      <div className="con-layout w-full h-full">

      <NavigationBar />
      <div className="layout-con h-full w-full flex flex-row">
        <div className="layout-main-section h-w-full ">
          <MainPage />
        </div>
      </div>    

     
      </div>
    </div>
  );
}

export default App;
