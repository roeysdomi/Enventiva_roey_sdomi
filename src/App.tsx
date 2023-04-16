import { NavigationBar } from "./components/navigationBar/NavigationBar";
import React from "react";
import "./App.css";
import { useInnerHeight } from "./hooks/useInnerHeight";
import Routers from "./components/routes";

function App() {
  const { currentHeight } = useInnerHeight();

  return (
    <div className={"w-screen font-main-font font-semibold text-xl"} style={{ height: `${currentHeight}px` }}>
      <div className="con-layout w-full h-full">
        <NavigationBar />
        <div className="layout-con h-full w-full flex flex-row">
          <div className="layout-main-section h-w-full ">
            <Routers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
