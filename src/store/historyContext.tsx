import React from 'react';
import { createContext, useState } from 'react';
import { IExchangeLocalStorage } from '../models/IExchangeLocalStorage';
import { getExchangeFromLocalStorage } from '../controllers/getExchangeFromLocalSrorage';

interface IHistoryExchangeContext {
  historyExchange: Array<IExchangeLocalStorage> | null;
  refreshHistoryFromLocalStorage(): void;
}

const HistoryExchangeContext = createContext<IHistoryExchangeContext | null>(
  null
);

interface IHistoryExchangeProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export function HistoryExchangeProvider({
  children,
}: IHistoryExchangeProviderProps) {
  const [historyExchange, setHistoryExchange] =
    useState<Array<IExchangeLocalStorage> | null>(null);

  function refreshHistoryFromLocalStorage() {
    const data = getExchangeFromLocalStorage();
    setHistoryExchange(data);
  }

  const context: IHistoryExchangeContext = {
    historyExchange: historyExchange,
    refreshHistoryFromLocalStorage,
  };

  return (
    <HistoryExchangeContext.Provider value={context}>
      {children}
    </HistoryExchangeContext.Provider>
  );
}

export default HistoryExchangeContext;
