import HistoryExchange from './historyExchange';
import BodyExchange from './bodyExchange';
import { useContext, useMemo } from 'react';
import { ICurrenciesData } from '../models/currencyCodeData';
import { AxiosResponse, AxiosError } from 'axios';
import { ErrorDataFetch } from '../models/ErrorDataFetch';
import { useQuery } from 'react-query';
import { getCurrencyCodeCountry } from '../controllers/getCurrecyCodeContry';
import { currencyCodeCountryObjectToArray } from '../controllers/CurrencyCodeCountryObjectToArray';
import FadeLoader from 'react-spinners/FadeLoader';
import ErrorContext from '../store/errorContext';
import CurrencyContext from '../store/currencyContext';
import FormExchange from './formExchange';

function SectionExchange() {
  const currencyCtx = useContext(CurrencyContext);
  const errorCtx = useContext(ErrorContext);
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

  if (isLoading) {
    return (
      <div
        className="flex absolute top-60 -left-32  w-screen  justify-center "
        style={{ height: '503px' }}
      >
        <div
          className="flex h-full justify-center items-center bg-gray-100 rounded-2xl"
          style={{ width }}
        >
          <FadeLoader color={`#1C5CC5`} height={25} margin={20} />
        </div>
      </div>
    );
  }

  if (isError) {
    errorCtx?.showErrorExchangeMessage();
  }

  return (
    <div
      className="flex absolute top-60 -left-32  w-screen  justify-center"
      style={{ height: '503px' }}
    >
      <BodyExchange width={width}>
        <HistoryExchange width={width} />
      </BodyExchange>
      <BodyExchange width={width} absolute>
        <FormExchange />
      </BodyExchange>
    </div>
  );
}

export default SectionExchange;
