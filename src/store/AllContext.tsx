import React from 'react';
import { CurrencyContextProvider } from './currencyContext';
import { ErrorExchangeProvider } from './errorContext';
import { HistoryExchangeProvider } from './historyContext';
import { MobileContextProvider } from './mobileContext';
interface IJoinContextProps {
  children: React.ReactNode | React.ReactNode[];
}

function AllContextProvider({ children }: IJoinContextProps) {
  return (
    <CurrencyContextProvider>
      <ErrorExchangeProvider>
        <HistoryExchangeProvider>
          <MobileContextProvider>{children}</MobileContextProvider>
        </HistoryExchangeProvider>
      </ErrorExchangeProvider>
    </CurrencyContextProvider>
  );
}

export default AllContextProvider;
