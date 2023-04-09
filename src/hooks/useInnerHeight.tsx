import React, { useEffect, useState } from "react";
interface MenuOption {
  title: String;
  route: String;
}

export const useInnerHeight = () => {
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  useEffect(() => {
    const setHeight = () => {
      setCurrentHeight(window.innerHeight);
    };
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("resize", setHeight);
    };
  }, []);
  return { currentHeight };
};
