import { createContext, useState } from 'react';
import React from 'react';

interface IErrorContext {
  errorExchange: boolean;
  showErrorExchangeMessage(): void;
  hiddenErrorExchangeMessage(): void;
}

interface IErrorProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const ErrorContext = createContext<IErrorContext | null>(null);

export function ErrorExchangeProvider({ children }: IErrorProviderProps) {
  const [errorExchange, setErrorExchange] = useState<boolean>(false);

  function showErrorExchangeMessage() {
    setErrorExchange(true);
  }
  function hiddenErrorExchangeMessage() {
    setErrorExchange(false);
  }

  const context: IErrorContext = {
    errorExchange: errorExchange,
    showErrorExchangeMessage,
    hiddenErrorExchangeMessage,
  };

  return (
    <ErrorContext.Provider value={context}>{children}</ErrorContext.Provider>
  );
}

export default ErrorContext;
