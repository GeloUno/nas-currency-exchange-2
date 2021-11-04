import React from 'react';
import { clearExchangeFromLocalStorage } from '../controllers/clearExchangeFromLocalStorage';

interface IClearHistoryExchangeProps {
  active: boolean;
}

function CleaningHistoryExchange({ active }: IClearHistoryExchangeProps) {
  if (!active) {
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
        onClick={() => clearExchangeFromLocalStorage()}
      >
        wyczyść historię
      </p>
    </div>
  );
}

export default CleaningHistoryExchange;
