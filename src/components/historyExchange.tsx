import { useWindowWidth } from '@react-hook/window-size';
import { IoCloseSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { IExchangeLocalStorage } from '../models/IExchangeLocalStorage';
import { getExchangeFromLocalStorage } from '../controllers/getExchangeFromLocalSrorage';
import HistoryExchangeList from './historyExchangeList';
import NoHistoryExchange from './noHistoryExchange';

interface IHistoryExchangeProps {
  width: number;
}
function HistoryExchange({ width }: IHistoryExchangeProps) {
  const widthHelper = useWindowWidth();
  const [showHistory, setShowHistory] = useState(false);
  const rightMove = showHistory ? 400 : 55;

  const [exchangeHistory, setExchangeHistory] = useState<
    Array<IExchangeLocalStorage>
  >([]);

  useEffect(() => {
    const data: Array<IExchangeLocalStorage> = getExchangeFromLocalStorage();
    setExchangeHistory(data);
  }, []);

  return (
    <div
      className="absolute flex  h-full w-full justify-center self-start  bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl cursor-default"
      style={{
        width,
        left: `${widthHelper / 2 + rightMove - width / 2}px`,
        transition: '1s ease-in-out',
      }}
    >
      <div
        className={`p-2 flex flex-row justify-center font-medium ${
          showHistory ? `text-white` : `text-blue-200`
        } m-2 text-center`}
        style={{
          transform: 'translate(160px,-165px) rotate(90deg)',
          transition: '1s ease-in-out',
        }}
      >
        {showHistory && (
          <IoCloseSharp
            className=" font-bold cursor-pointer w-6 h-6 mt-0 mr-1 "
            onClick={() => setShowHistory((prev) => !prev)}
          />
        )}
        <p
          className="cursor-pointer h-8 "
          onClick={() => setShowHistory((prev) => !prev)}
        >
          Historia
        </p>
      </div>
      <div className="flex flex-col h-5/6 w-4/6  justify-start self-center mr-12">
        <div className="flex justify-between w-full text-xs border-b-2 border-white py-4 font-medium">
          <p>Data</p> <p>Przed konwersją</p> <p>Po konwersji</p>
        </div>
        {exchangeHistory.length === 0 && <NoHistoryExchange />}
        {exchangeHistory.length !== 0 && (
          <HistoryExchangeList exchangeHistory={exchangeHistory} />
        )}
      </div>
    </div>
  );
}

export default HistoryExchange;
