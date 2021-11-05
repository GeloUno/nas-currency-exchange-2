import { nanoid } from 'nanoid';
import React from 'react';
import { ICurrencyCodeCounytry } from '../models/ICurrencyCodeCounytry';
import { ICurrenciesCode } from '../models/currencyCode';

interface IOptionExchangeProps {
  currencyCodeContryArray: Array<ICurrencyCodeCounytry>;
  setShowSelect(value: React.SetStateAction<boolean>): void;
  setCurrency(code: ICurrenciesCode): void;
}

function OptionExchange({
  currencyCodeContryArray,
  setShowSelect,
  setCurrency,
}: IOptionExchangeProps) {
  return (
    <div className="absolute bg-white w-32 h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-md shadow-lg ">
      {currencyCodeContryArray.map((arr) => {
        return (
          <div
            key={nanoid()}
            className="p-1 pl-3 cursor-pointer"
            onClick={() => {
              setCurrency({ id: arr.code } as ICurrenciesCode);
              setShowSelect((prev) => !prev);
            }}
          >
            {arr.code}
          </div>
        );
      })}
    </div>
  );
}

export default OptionExchange;
