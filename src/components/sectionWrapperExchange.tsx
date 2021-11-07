import React from 'react';
import { useContext } from 'react';
import MobileContext from '../store/mobileContext';

interface ISectionWrapperExchangeProps {
  children: React.ReactNode;
}

function SectionWrapperExchange({ children }: ISectionWrapperExchangeProps) {
  const mobileCtx = useContext(MobileContext);

  const isMobielUseScaleInCss: React.CSSProperties = mobileCtx?.isMobile
    ? {
        transform: `scale(${mobileCtx!.scale})`,
      }
    : { fontSize: '1rem' };

  return (
    <div
      //   className="absolute -top-10 -left-5 sm:top-25 sm:left-20 md:top-60 md:-left-32  flex w-screen justify-center"
      className={`absolute ${
        mobileCtx?.isMobile ? `-top-10` : `top-5`
      } -left-5 ${
        mobileCtx?.isMobile ? `sm:-top-24` : `sm:top-60`
      } sm:-left-1/4 md:top-5 xl:top-20 flex w-screen justify-center`}
      style={{ height: `503px`, ...isMobielUseScaleInCss }}
    >
      {children}
    </div>
  );
}
export default SectionWrapperExchange;
