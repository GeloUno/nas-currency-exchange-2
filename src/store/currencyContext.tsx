import { createContext, useState } from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import React from 'react';

interface ICurrencyContext {
  currencyCodeContryArray: Array<ICurrencyCodeCounytry> | undefined;
  setCurrencyCodeContryArray: React.Dispatch<
    React.SetStateAction<ICurrencyCodeCounytry[] | undefined>
  >;
}

interface ICurrencyCpontextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const NotificationContext = createContext<ICurrencyContext | null>(null);

export function CurrencyContextProvider({
  children,
}: ICurrencyCpontextProviderProps) {
  const [currencyCodeContryArray, setCurrencyCodeContryArray] = useState<
    Array<ICurrencyCodeCounytry> | undefined
  >();

  const context: ICurrencyContext = {
    currencyCodeContryArray,
    setCurrencyCodeContryArray,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
