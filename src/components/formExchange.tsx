import { RiArrowLeftRightFill } from 'react-icons/ri';
import ButtonExchange from './buttonExchange';
import SelectExchange from './selectExchange';
import { useContext } from 'react';
import NotificationContext from '../store/currencyContext';

function FormExchange() {
  const CurrencyCtx = useContext(NotificationContext);
  return (
    <div className="flex flex-col w-full">
      <form
        action=""
        className="flex flex-col w-full justify-center items-center"
      >
        <div className="relative w-5/6 my-3">
          <label htmlFor="" className="absolute top-5 right-5 text-gray-300">
            PLN
          </label>
          <input
            type="text"
            className="w-full border-b-2 p-4 border-gray-400 focus:outline-none focus:border-blue-600 placeholder-gray-300"
            placeholder="wpisz kwotę"
          />
        </div>
        <div className="relative w-5/6 my-3 ">
          <label htmlFor="" className="absolute top-5 right-5 text-gray-300">
            USD
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
              currency={CurrencyCtx!.currencyFrom}
              setCurrency={CurrencyCtx!.setCurrencyFrom}
            />
          </div>
          <div className="cursor-pointer">
            <RiArrowLeftRightFill />
          </div>
          <div>
            <SelectExchange
              currency={CurrencyCtx!.currencyTo}
              setCurrency={CurrencyCtx!.setCurrencyTo}
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
