import { createContext, useState, useMemo } from 'react';
import React from 'react';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';
interface IMobileContext {
  isMobile: boolean;
  isPortrait: boolean;
  widthWindow: number;
  heightWindow: number;
}

interface IMobileContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const MobileContext = createContext<IMobileContext | null>(null);

export function MobileContextProvider({
  children,
}: IMobileContextProviderProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isPortrait, setIsPortrait] = useState(false);

  const widthWindow = useWindowWidth();
  const heightWindow = useWindowHeight();

  useMemo(() => {
    if (heightWindow > widthWindow && widthWindow < 450) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (heightWindow > widthWindow) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
  }, [widthWindow, heightWindow]);

  const context: IMobileContext = {
    isMobile: isMobile,
    isPortrait: isPortrait,
    heightWindow,
    widthWindow,
  };

  return (
    <MobileContext.Provider value={context}>{children}</MobileContext.Provider>
  );
}

export default MobileContext;
