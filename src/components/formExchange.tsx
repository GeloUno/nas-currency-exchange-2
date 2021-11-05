import { RiArrowLeftRightFill } from 'react-icons/ri';
import SelectExchange from './selectExchange';
import { useContext, useMemo, useState } from 'react';
import { ICurrenciesCode } from '../models/currencyCode';
import { useQuery } from 'react-query';
import { getCurrencyExchange } from '../controllers/getCurrencyEchange';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';
import { IFormExchange } from '../models/IFormExchange';
import { addExchangeToLocalStorage } from '../controllers/addExchangeToLocalSrorage';
import { DevTool } from '@hookform/devtools';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ErrorContext from '../store/errorContext';
import HistoryExchangeContext from '../store/historyContext';
import CurrencyContext from '../store/currencyContext';

function FormExchange() {
  const currencyCtx = useContext(CurrencyContext);
  const errorCtx = useContext(ErrorContext);
  const historyCtx = useContext(HistoryExchangeContext);

  function toggleCurrencyHandler() {
    const currencyHelper: ICurrenciesCode = currencyCtx!.currencyFrom;
    currencyCtx?.setCurrencyFrom(currencyCtx.currencyTo);
    currencyCtx?.setCurrencyTo(currencyHelper);
  }

  const [exchangeValue, setExchangeValue] = useState<number | null>(null);

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

  if (isError) {
    errorCtx?.showErrorExchangeMessage();
  }

  useMemo(() => {
    if (data?.data) {
      const key = Object.keys(data?.data);
      setExchangeValue(() => data?.data[key[0]].val);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    control,
    watch,
    formState,
  } = useForm<IFormExchange>();

  const { errors, isDirty } = formState;
  const { dirtyFields } = useFormState<IFormExchange>({ control });

  const onSubmitHandler: SubmitHandler<IFormExchange> = (data) => {
    if (data.valueFrom === '' && data.valueTo === '') {
      setError('valueFrom', { message: 'Nieprawidłowa wartość' });
      setError('valueTo', { message: 'Nieprawidłowa wartość' });
      return;
    }

    if (data.valueFrom === '0' || isNaN(+data.valueFrom)) {
      setError('valueFrom', { message: 'Nieprawidłowa wartość' });
    } else {
      if (exchangeValue && +data.valueFrom !== 0) {
        const calc = (+data.valueFrom * +exchangeValue).toFixed(2);
        setValue('valueTo', calc);
        addExchangeToLocalStorage(
          data.valueFrom.toString(),
          currencyCtx!.currencyFrom.id,
          calc,
          currencyCtx!.currencyTo.id
        );
        historyCtx?.refreshHistoryFromLocalStorage();
        return;
      }
    }

    if (data.valueTo === '0' || isNaN(+data.valueTo)) {
      setError('valueTo', { message: 'Nieprawidłowa wartość' });
    } else {
      if (exchangeValue && +data.valueTo !== 0) {
        const calc = (+data.valueTo / +exchangeValue).toFixed(2);
        setValue('valueFrom', calc);
        addExchangeToLocalStorage(
          calc,
          currencyCtx!.currencyFrom.id,
          data.valueTo.toString(),
          currencyCtx!.currencyTo.id
        );
        historyCtx?.refreshHistoryFromLocalStorage();
        return;
      }
    }
  };

  return (
    <div className="flex flex-col w-full">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col w-full justify-center items-center"
      >
        <div className="relative w-4/6 my-3">
          <label htmlFor="" className="absolute top-2 right-2 text-gray-300">
            {currencyCtx?.currencyFrom && currencyCtx.currencyFrom.id}
          </label>
          <input
            type="text"
            className={`w-full border-b-2 p-1 pt-2 pb-2 ${
              errors.valueFrom
                ? `text-red-500 border-red-500 mb-0`
                : `border-gray-400 focus:border-blue-600 mb-4`
            }  focus:outline-none  placeholder-gray-300`}
            placeholder="wpisz kwotę"
            {...register('valueFrom')}
            onChange={() => {
              clearErrors('valueFrom');
              clearErrors('valueTo');
              setValue('valueTo', '');
            }}
          />
          {errors.valueFrom && (
            <p className="text-red-500 text-xs">{`${errors.valueFrom.message}`}</p>
          )}
        </div>
        <div className="relative w-4/6 my-3 ">
          <label htmlFor="" className="absolute top-0 right-2 text-gray-300">
            {currencyCtx?.currencyTo && currencyCtx.currencyTo.id}
          </label>
          <input
            type="text"
            className={`w-full border-b-2 p-1 pt-0 pb-2  ${
              errors.valueTo
                ? `text-red-500 border-red-500 mb-0 `
                : `border-gray-400 focus:border-blue-600 mb-4`
            }  focus:outline-none  placeholder-gray-300`}
            placeholder="wynik"
            {...register('valueTo')}
            onChange={() => {
              clearErrors('valueTo');
              clearErrors('valueFrom');
              setValue('valueFrom', '');
            }}
          />
          {errors.valueTo && (
            <p className="text-red-500 text-xs">{`${errors.valueTo.message}`}</p>
          )}
        </div>
        <div className="flex flex-row w-4/6 justify-between items-center my-5">
          <div>
            <SelectExchange
              currency={currencyCtx!.currencyFrom}
              setCurrency={currencyCtx!.setCurrencyFrom}
            />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              toggleCurrencyHandler();
              setValue('valueFrom', '');
              setValue('valueTo', '');
            }}
          >
            {isLoading && (
              <ScaleLoader height={15} width={2} radius={1} margin={2} />
            )}
            {!isLoading && <RiArrowLeftRightFill />}
          </div>
          <div>
            <SelectExchange
              currency={currencyCtx!.currencyTo}
              setCurrency={currencyCtx!.setCurrencyTo}
            />
          </div>
        </div>
        <div className="flex w-4/6">
          <input
            type="submit"
            className={`flex w-full py-4 text-left ${
              isDirty ? `bg-blue-600` : `bg-gray-300`
            } text-white justify-center rounded-3xl uppercase mt-4 text-sm cursor-pointer`}
            value="KONWERTUJ"
            // disabled={!isDirty}
          />
        </div>
      </form>

      <DevTool control={control} placement={'top-left'} />
    </div>
  );
}

export default FormExchange;
