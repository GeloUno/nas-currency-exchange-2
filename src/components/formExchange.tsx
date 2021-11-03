import { RiArrowLeftRightFill } from 'react-icons/ri';
import ButtonExchange from './buttonExchange';
import SelectExchange from './selectExchange';
import { useContext, useMemo, useState } from 'react';
import NotificationContext from '../store/currencyContext';
import { ICurrenciesCode } from '../models/currencyCode';
import { useQuery } from 'react-query';
import { getCurrencyExchange } from '../controllers/getCurrencyEchange';

function FormExchange() {
  const currencyCtx = useContext(NotificationContext);

  function toggleCurrencyHandler() {
    const currencyHelper: ICurrenciesCode = currencyCtx!.currencyFrom;
    currencyCtx?.setCurrencyFrom(currencyCtx.currencyTo);
    currencyCtx?.setCurrencyTo(currencyHelper);
  }

  const [exchangeValue, setExchangeValue] = useState<number | null>(null);
  console.log(
    '<- LOG -> file: formExchange.tsx -> line 21 -> FormExchange -> exchangeValue',
    exchangeValue
  );

  const { data, isError, isLoading, refetch } = useQuery(
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

  useMemo(() => {
    if (data?.data) {
      const key = Object.keys(data?.data);
      setExchangeValue(() => data?.data[key[0]].val);
    }
  }, [data]);

  return (
    <div className="flex flex-col w-full">
      <form
        action=""
        className="flex flex-col w-full justify-center items-center"
      >
        <div className="relative w-5/6 my-3">
          <label htmlFor="" className="absolute top-5 right-5 text-gray-300">
            {currencyCtx?.currencyFrom && currencyCtx.currencyFrom.id}
          </label>
          <input
            type="text"
            className="w-full border-b-2 p-4 border-gray-400 focus:outline-none focus:border-blue-600 placeholder-gray-300"
            placeholder="wpisz kwotę"
          />
        </div>
        <div className="relative w-5/6 my-3 ">
          <label htmlFor="" className="absolute top-5 right-5 text-gray-300">
            {currencyCtx?.currencyTo && currencyCtx.currencyTo.id}
          </label>
          <input
            type="text"
            className="w-full border-b-2 p-4 border-gray-400 focus:outline-none focus:border-blue-600 placeholder-gray-300"
            placeholder="wynik"
          />
        </div>
        <div className="flex flex-row w-5/6 justify-between items-center my-6">
          <div>
            <SelectExchange
              currency={currencyCtx!.currencyFrom}
              setCurrency={currencyCtx!.setCurrencyFrom}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => toggleCurrencyHandler()}
          >
            <RiArrowLeftRightFill />
          </div>
          <div>
            <SelectExchange
              currency={currencyCtx!.currencyTo}
              setCurrency={currencyCtx!.setCurrencyTo}
            />
          </div>
        </div>
        <div className="flex w-5/6">
          <ButtonExchange />
        </div>
      </form>
    </div>
  );
}

export default FormExchange;
