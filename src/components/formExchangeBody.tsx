import { RiArrowLeftRightFill } from 'react-icons/ri';
import SelectExchange from './selectExchange';
import { ICurrenciesCode } from '../models/currencyCode';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormExchange } from '../models/IFormExchange';
import { addExchangeToLocalStorage } from '../controllers/addExchangeToLocalSrorage';
// import { DevTool } from '@hookform/devtools';
import ScaleLoader from 'react-spinners/ScaleLoader';
import {
  divideExchange,
  multiplyExchange,
  isNotEmptyStringAndValueIsZero,
  isBothInputsHaveEmptyString,
  isValueExchangeAndDataInputIsNumberOtherThanZero,
} from '../controllers/form/input';

interface IFormExchangeBodyProps {
  exchangeValue: number | null;
  currencyFrom: ICurrenciesCode;
  currencyTo: ICurrenciesCode;
  refreshHistoryFromLocalStorage(): void;
  setCurrencyFrom(code: ICurrenciesCode): void;
  setCurrencyTo(code: ICurrenciesCode): void;
  toggleCurrencyHandler(): void;
  isLoading: boolean;
}

function FormExchangeBody({
  exchangeValue,
  currencyFrom,
  currencyTo,
  refreshHistoryFromLocalStorage,
  setCurrencyFrom,
  setCurrencyTo,
  toggleCurrencyHandler,
  isLoading,
}: IFormExchangeBodyProps) {
  const { register, handleSubmit, setValue, setError, clearErrors, formState } =
    useForm<IFormExchange>();

  const { errors, isDirty } = formState;
  // const { dirtyFields } = useFormState<IFormExchange>({ control });

  const onSubmitHandler: SubmitHandler<IFormExchange> = (data) => {
    if (isBothInputsHaveEmptyString(data.valueFrom, data.valueTo)) {
      setError('valueFrom', { message: 'Nieprawidłowa wartość' });
      setError('valueTo', { message: 'Nieprawidłowa wartość' });
      return;
    }

    if (
      isNaN(+data.valueFrom) ||
      isNotEmptyStringAndValueIsZero(data.valueFrom)
    ) {
      setError('valueFrom', { message: 'Nieprawidłowa wartość' });
      return;
    } else {
      if (
        isValueExchangeAndDataInputIsNumberOtherThanZero(
          exchangeValue,
          data.valueFrom
        )
      ) {
        const calc = multiplyExchange(data.valueFrom, exchangeValue);
        setValue('valueTo', calc);
        addExchangeToLocalStorage(
          data.valueFrom.toString(),
          currencyFrom.id,
          calc,
          currencyTo.id
        );
        refreshHistoryFromLocalStorage();
        return;
      }
    }

    if (isNaN(+data.valueTo) || isNotEmptyStringAndValueIsZero(data.valueTo)) {
      setError('valueTo', { message: 'Nieprawidłowa wartość' });
      return;
    } else {
      if (exchangeValue && +data.valueTo !== 0) {
        const calc = divideExchange(data.valueTo, exchangeValue);
        setValue('valueFrom', calc);
        addExchangeToLocalStorage(
          calc,
          currencyFrom.id,
          data.valueTo.toString(),
          currencyTo.id
        );
        refreshHistoryFromLocalStorage();
        return;
      }
    }
  };

  return (
    <>
      <div
        data-testid="formExchangeBody"
        className="flex w-full justify-center items-center pt-12 pb-10 "
      >
        <h3
          data-testid="formExchangeTitle"
          className="text-blue-500 text-3xl font-sans font-semibold "
        >
          Konwerter walut
        </h3>
      </div>
      <form
        data-testid="formExchangeForm"
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col w-full justify-center items-center"
      >
        <div data-testid="firstInputFormBody" className="relative w-4/6 my-3">
          <label
            data-testid="firstLabelForm"
            htmlFor=""
            className="absolute top-2 right-2 text-gray-300"
          >
            {currencyFrom && currencyFrom.id}
          </label>
          <input
            data-testid="firstInputForm"
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
            <p
              data-testid="firstInputError"
              className="text-red-500 text-xs"
            >{`${errors.valueFrom.message}`}</p>
          )}
        </div>
        <div data-testid="secondInputFormBody" className="relative w-4/6 my-3 ">
          <label
            data-testid="secondLabelForm"
            htmlFor=""
            className="absolute top-0 right-2 text-gray-300"
          >
            {currencyTo && currencyTo.id}
          </label>
          <input
            data-testid="secondInputForm"
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
            <p
              data-testid="secondInputError"
              className="text-red-500 text-xs"
            >{`${errors.valueTo.message}`}</p>
          )}
        </div>
        <div className="flex flex-row w-4/6 justify-between items-center my-5">
          <div data-testid="firstSelectExchane">
            <SelectExchange
              currency={currencyFrom}
              setCurrency={setCurrencyFrom}
            />
          </div>
          <div
            data-testid="toggleSelectExchane"
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
            {!isLoading && (
              <RiArrowLeftRightFill data-testid="toggleCurrencyExchange" />
            )}
          </div>
          <div data-testid="secondSelectExchane">
            <SelectExchange currency={currencyTo} setCurrency={setCurrencyTo} />
          </div>
        </div>
        <div className="flex w-4/6">
          <input
            data-testid="buttonSubmitForm"
            type="submit"
            className={`flex w-full py-4 text-left ${
              isDirty ? `bg-blue-600` : `bg-gray-300`
            } text-white justify-center rounded-3xl uppercase mt-4 text-sm cursor-pointer`}
            value="KONWERTUJ"
            // disabled={!isDirty}
          />
        </div>
      </form>

      {/* <DevTool control={control} placement={'top-left'} /> */}
    </>
  );
}

export default FormExchangeBody;
