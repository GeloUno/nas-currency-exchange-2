import { useMemo, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useQuery } from 'react-query';
import { getCurrencyCodeCountry } from '../controllers/getCurrecyCodeContry';
import OptionExchange from './optionExchange';
import { AxiosError, AxiosResponse } from 'axios';
import { ICurrenciesData } from '../models/currencyCodeData';
import { ErrorDataFetch } from '../models/ErrorDataFetch';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import { currencyCodeCountryObjectToArray } from '../controllers/CurrencyCodeCountryObjectToArray';

interface ISelectExchangeProps {
  currency: string;
}

function SelectExchange({ currency }: ISelectExchangeProps) {
  const [showSelect, setshowSelect] = useState<boolean>(false);

  const [currencyCodeContryArray, setCurrencyCodeContryArray] = useState<
    Array<ICurrencyCodeCounytry> | undefined
  >();

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

      setCurrencyCodeContryArray(currencyCodeCoutryArray);
    }
  }, [data]);

  console.log(`data`, data);
  return (
    <div>
      <div
        className="relative flex w-32 p-3 shadow-md justify-between items-center rounded-md cursor-pointer"
        onClick={() => setshowSelect((prev) => !prev)}
      >
        <div className="flex">{currency}</div>
        <div className="flex">
          {!showSelect && <FiChevronDown />}
          {showSelect && <FiChevronUp />}
        </div>
      </div>
      {showSelect && currencyCodeContryArray != undefined && (
        <OptionExchange currencyCodeContryArray={currencyCodeContryArray} />
      )}
    </div>
  );
}

export default SelectExchange;
