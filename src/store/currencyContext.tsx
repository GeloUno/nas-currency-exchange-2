import { createContext, useState } from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import React from 'react';
import { ICurrenciesCode } from '../models/currencyCode';

interface ICurrencyContext {
  currencyCodeContryArray: Array<ICurrencyCodeCounytry> | undefined;
  setCurrencyCodeContryArray: React.Dispatch<
    React.SetStateAction<ICurrencyCodeCounytry[] | undefined>
  >;
  currencyFrom: ICurrenciesCode;
  setCurrencyFrom: React.Dispatch<React.SetStateAction<ICurrenciesCode>>;
  currencyTo: ICurrenciesCode;
  setCurrencyTo: React.Dispatch<React.SetStateAction<ICurrenciesCode>>;
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

  const [currencyFrom, setCurrencyFrom] = useState<ICurrenciesCode>({
    id: 'PLN',
  });
  const [currencyTo, setCurrencyTo] = useState<ICurrenciesCode>({ id: 'EUR' });

  const context: ICurrencyContext = {
    currencyCodeContryArray,
    setCurrencyCodeContryArray,
    currencyFrom,
    currencyTo,
    setCurrencyFrom,
    setCurrencyTo,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
