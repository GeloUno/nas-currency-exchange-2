import { createContext, useState } from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import React from 'react';
import { ICurrenciesCode } from '../models/currencyCode';

interface ICurrencyContext {
  currencyCodeArray: Array<ICurrencyCodeCounytry> | undefined;
  setCurrencyCodeContryArray(
    arrayCurrencyCode: Array<ICurrencyCodeCounytry>
  ): void;
  currencyFrom: ICurrenciesCode;
  setCurrencyFrom(code: ICurrenciesCode): void;
  currencyTo: ICurrenciesCode;
  setCurrencyTo(code: ICurrenciesCode): void;
}

interface ICurrencyContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const CurrencyContext = createContext<ICurrencyContext | null>(null);

export function CurrencyContextProvider({
  children,
}: ICurrencyContextProviderProps) {
  const [currencyCodeArray, _setCurrencyCodeContryArray] = useState<
    Array<ICurrencyCodeCounytry> | undefined
  >();

  function setCurrencyCodeContryArray(
    arrayCurrencyCode: Array<ICurrencyCodeCounytry>
  ) {
    _setCurrencyCodeContryArray(arrayCurrencyCode);
  }

  const [currencyFrom, _setCurrencyFrom] = useState<ICurrenciesCode>({
    id: 'PLN',
  });

  function setCurrencyFrom(currency: ICurrenciesCode) {
    _setCurrencyFrom(currency);
  }

  const [currencyTo, _setCurrencyTo] = useState<ICurrenciesCode>({ id: 'EUR' });

  function setCurrencyTo(currency: ICurrenciesCode) {
    _setCurrencyTo(currency);
  }

  const context: ICurrencyContext = {
    currencyCodeArray,
    setCurrencyCodeContryArray,
    currencyFrom,
    currencyTo,
    setCurrencyFrom,
    setCurrencyTo,
  };

  return (
    <CurrencyContext.Provider value={context}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
