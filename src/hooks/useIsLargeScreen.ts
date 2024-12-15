import { useEffect, useState } from "react";

export const useIsLargeScreen = (breakpoint = 768) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [breakpoint]);

  return isLargeScreen;
};
