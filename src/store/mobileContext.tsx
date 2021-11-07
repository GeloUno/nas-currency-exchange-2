import { createContext, useState, useMemo } from 'react';
import React from 'react';
import { useWindowHeight, useWindowWidth } from '@react-hook/window-size';
interface IMobileContext {
  isMobile: boolean;
  isPortrait: boolean;
  widthWindow: number;
  heightWindow: number;
  scale: number | null;
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
  const [scale, setScale] = useState<number | null>(null);
  const widthWindow = useWindowWidth();
  const heightWindow = useWindowHeight();

  useMemo(() => {
    if (heightWindow > widthWindow) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }

    if (heightWindow > widthWindow && widthWindow < 450) {
      let scale = ((widthWindow / 503) * 0.8).toFixed(2);
      scale = +scale < 0.45 ? '0.45' : scale;
      setScale(+scale);
      setIsMobile(true);
      return;
    } else {
      setScale(null);
      setIsMobile(false);
    }
    if (heightWindow < widthWindow && heightWindow < 550) {
      let scale = ((heightWindow / 503) * 0.8).toFixed(2);
      scale = +scale < 0.45 ? '0.45' : scale;
      setScale(+scale);
      setIsMobile(true);
      return;
    } else {
      setScale(null);
      setIsMobile(false);
    }
  }, [widthWindow, heightWindow]);

  const context: IMobileContext = {
    isMobile: isMobile,
    isPortrait: isPortrait,
    scale: scale,
    heightWindow,
    widthWindow,
  };

  return (
    <MobileContext.Provider value={context}>{children}</MobileContext.Provider>
  );
}

export default MobileContext;
