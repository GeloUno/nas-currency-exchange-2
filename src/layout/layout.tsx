import SectionExchange from '../components/sectionExchange';
import ErrorExchange from '../components/errorExchange';
import { useContext } from 'react';
import ErrorContext from '../store/errorContext';
import MobileContext from '../store/mobileContext';

function Layout() {
  const errorCtx = useContext(ErrorContext);
  const mobileCtx = useContext(MobileContext);
  return (
    <div
      className="w-full h-full flex"
      style={{ backgroundColor: 'hsl(220, 20%, 97%)' }}
    >
      <div
        className="h-full flex absolute top-0 left-0 items-end bg-gradient-to-b from-blue-500 to-blue-700 font-sans"
        style={{ width: `${mobileCtx?.isMobile ? `50%` : `39%`}` }}
      >
        <h1 className="p-10 text-5xl font-black opacity-30">NASK</h1>
        <div>
          <SectionExchange />
        </div>
      </div>
      {errorCtx?.errorExchange && <ErrorExchange />}
    </div>
  );
}

export default Layout;
