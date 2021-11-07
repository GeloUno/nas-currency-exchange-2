import { useWindowWidth } from '@react-hook/window-size';
import { IoCloseSharp } from 'react-icons/io5';
import { useEffect, useState, useContext } from 'react';
import HistoryExchangeList from './historyExchangeList';
import NoHistoryExchange from './noHistoryExchange';
import CleaningHistoryExchange from './cleaningHistoryExchange';
import HistoryExchangeContext from '../store/historyContext';
import MobileContext from '../store/mobileContext';

interface IHistoryExchangeProps {
  width: number;
}
function HistoryExchange({ width }: IHistoryExchangeProps) {
  const widthHelper = useWindowWidth();
  const [showHistory, setShowHistory] = useState(false);

  const mobileCtx = useContext(MobileContext);

  const rightMove = showHistory && !mobileCtx?.isPortrait ? 400 : 55;

  const historyCtx = useContext(HistoryExchangeContext);

  useEffect(() => {
    historyCtx?.refreshHistoryFromLocalStorage();
  }, []);

  return (
    <div
      className={`absolute flex  h-full w-full justify-center self-start  bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl cursor-default ${
        showHistory && mobileCtx?.isPortrait ? `z-20` : `z-0`
      }`}
      style={{
        width,
        left: `${widthHelper / 2 + rightMove - width / 2}px`,
        transition: '1s ease-in-out',
      }}
    >
      <div
        className={`p-2 flex flex-row justify-center align-middle font-medium ${
          showHistory ? `text-white` : `text-blue-200`
        } m-2 text-center`}
        style={{
          transform: 'translate(158px,-165px) rotate(90deg)',
          transition: '1s ease-in-out',
        }}
      >
        {showHistory && (
          <p className="cursor-pointer w-10 h-10 justify-center p-1">
            <IoCloseSharp onClick={() => setShowHistory((prev) => !prev)} />
          </p>
        )}
        <p
          className="cursor-pointer w-8 h-8"
          onClick={() => setShowHistory((prev) => !prev)}
        >
          Historia
        </p>
      </div>
      <div className="flex flex-col h-5/6 w-4/6  justify-start self-center mr-12">
        <div className="flex flex-col h-5/6 w-full ">
          <div className="flex justify-between w-full text-xs border-b-2 border-white py-4 font-medium text-white">
            <p>Data</p> <p>Przed konwersją</p> <p>Po konwersji</p>
          </div>
          {historyCtx?.historyExchange &&
            historyCtx?.historyExchange.length === null && (
              <NoHistoryExchange />
            )}
          {historyCtx?.historyExchange &&
            historyCtx?.historyExchange.length !== 0 && (
              <HistoryExchangeList
                exchangeHistory={historyCtx?.historyExchange}
              />
            )}
        </div>
        <CleaningHistoryExchange />
      </div>
    </div>
  );
}

export default HistoryExchange;
