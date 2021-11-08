import { useContext, useMemo, useState } from 'react';
import { ICurrenciesCode } from '../models/currencyCode';
import { useQuery } from 'react-query';
import { getCurrencyExchange } from '../controllers/getCurrencyEchange';
import ErrorContext from '../store/errorContext';
import HistoryExchangeContext from '../store/historyContext';
import CurrencyContext from '../store/currencyContext';
import FormExchangeBody from './formExchangeBody';

function FormExchangeData() {
  const currencyCtx = useContext(CurrencyContext);
  const errorCtx = useContext(ErrorContext);
  const historyCtx = useContext(HistoryExchangeContext);

  function toggleCurrencyHandler() {
    const currencyHelper: ICurrenciesCode = currencyCtx!.currencyFrom;
    currencyCtx?.setCurrencyFrom(currencyCtx.currencyTo);
    currencyCtx?.setCurrencyTo(currencyHelper);
  }

  const [exchangeValue, setExchangeValue] = useState<number | null>(null);

  const { data, isError, isLoading } = useQuery(
    [
      'getCurrencyExchange',
      currencyCtx?.currencyFrom.id,
      currencyCtx?.currencyTo.id,
    ],
    () =>
      getCurrencyExchange(currencyCtx!.currencyFrom, currencyCtx!.currencyTo),
    {
      staleTime: 1 * 60 * 60 * 1000,
    }
  );

  if (isError) {
    errorCtx?.showErrorExchangeMessage();
  }

  useMemo(() => {
    if (data?.data) {
      const key = Object.keys(data?.data);
      setExchangeValue(() => data?.data[key[0]].val);
    }
  }, [data]);

  return (
    <div className="flex flex-col w-full">
      <FormExchangeBody
        currencyFrom={currencyCtx!.currencyFrom}
        currencyTo={currencyCtx!.currencyTo}
        exchangeValue={exchangeValue}
        isLoading={isLoading}
        refreshHistoryFromLocalStorage={
          historyCtx!.refreshHistoryFromLocalStorage
        }
        setCurrencyFrom={currencyCtx!.setCurrencyFrom}
        setCurrencyTo={currencyCtx!.setCurrencyTo}
        toggleCurrencyHandler={toggleCurrencyHandler}
      />
    </div>
  );
}

export default FormExchangeData;
