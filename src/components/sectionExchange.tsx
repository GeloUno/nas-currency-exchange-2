import HistoryExchange from './historyExchange';
import BodyExchange from './bodyExchange';
import { useContext, useMemo } from 'react';
import NotificationContext from '../store/currencyContext';
import { ICurrenciesData } from '../models/currencyCodeData';
import { AxiosResponse, AxiosError } from 'axios';
import { ErrorDataFetch } from '../models/ErrorDataFetch';
import { useQuery } from 'react-query';
import { getCurrencyCodeCountry } from '../controllers/getCurrecyCodeContry';
import { currencyCodeCountryObjectToArray } from '../controllers/CurrencyCodeCountryObjectToArray';

function SectionExchange() {
  const currencyCtx = useContext(NotificationContext);
  const width = 462;

  const {
    data,
    isError,
    isLoading,
  }: {
    data: AxiosResponse<ICurrenciesData> | undefined;
    isError: boolean;
    isLoading: boolean;
    error: AxiosError<ErrorDataFetch> | null;
  } = useQuery('CurrencyCodeCountry', getCurrencyCodeCountry, {
    staleTime: 6 * 60 * 60 * 1000,
  });

  useMemo(() => {
    if (data != undefined) {
      const currencyCodeCoutryArray = currencyCodeCountryObjectToArray(
        data.data
      );

      currencyCtx?.setCurrencyCodeContryArray(currencyCodeCoutryArray);
    }
  }, [data]);

  return (
    <div
      className="flex absolute top-14 left-0  w-screen  justify-center"
      style={{ height: '503px' }}
    >
      <HistoryExchange width={width} />
      <BodyExchange width={width} />
    </div>
  );
}

export default SectionExchange;
