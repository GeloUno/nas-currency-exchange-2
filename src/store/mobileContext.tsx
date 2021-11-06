import { createContext, useState, useMemo } from 'react';
import React from 'react';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';
interface IMobileContext {
  isMobile: boolean;
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
  console.log(
    '<- LOG -> file: mobileContext.tsx -> line 20 -> isMobile',
    isMobile
  );

  const widthWindow = useWindowWidth();
  const heightWindow = useWindowHeight();

  useMemo(() => {
    if (heightWindow > widthWindow) setIsMobile(true);
  }, []);

  const context: IMobileContext = {
    isMobile: isMobile,
    heightWindow,
    widthWindow,
  };

  return (
    <MobileContext.Provider value={context}>{children}</MobileContext.Provider>
  );
}

export default MobileContext;
