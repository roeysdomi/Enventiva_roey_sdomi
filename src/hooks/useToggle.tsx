import { useCallback, useState } from "react";

export const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const changeToggle = useCallback(() => {
    setIsOn((previousState)=>!previousState);
  }, []);

  return { isOn, changeToggle };
};
