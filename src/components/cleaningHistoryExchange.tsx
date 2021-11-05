import { cleaningExchangeFromLocalStorage } from '../controllers/cleaningExchangeFromLocalStorage';
import { useContext } from 'react';
import HistoryExchangeContext from '../store/historyContext';

function CleaningHistoryExchange() {
  const historyCtx = useContext(HistoryExchangeContext);
  if (historyCtx?.historyExchange?.length === 0) {
    return (
      <div className="flex justify-center">
        <p className="text-blue-400 underline cursor-not-allowed p-5">
          {' '}
          wyczyść historię
        </p>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <p
        className="text-blue-200 underline cursor-pointer p-5"
        onClick={() => {
          cleaningExchangeFromLocalStorage();
          historyCtx?.refreshHistoryFromLocalStorage();
        }}
      >
        wyczyść historię
      </p>
    </div>
  );
}

export default CleaningHistoryExchange;
